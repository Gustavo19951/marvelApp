import apiMarvel from '@/conf/apiMarvel.ts';
import {ApisauceInstance} from 'apisauce';
import {
  MarvelComicsListResponse,
  MarvelHeroesListResponse,
} from '@/type/marvel.ts';

export type MarvelResponse =
  | MarvelHeroesListResponse
  | MarvelComicsListResponse;

type ProxyHandler<T, P extends string> = {
  get?(
    target: {
      results: {[key in P]: T | undefined};
      apiInstance: ApisauceInstance;
    },
    p: P,
    receiver: any,
  ): any;
  set?(
    target: {results: {[key in P]?: T}; apiInstance: ApisauceInstance},
    p: P,
    value: any,
    receiver: any,
  ): boolean;
};

declare const Proxy: {
  new <T extends MarvelResponse>(
    target: {results: {[key in string]: T}; apiInstance: ApisauceInstance},
    handler: ProxyHandler<T, string>,
  ): {[key: string]: Promise<T>};
};

export const marvelProxy = new Proxy<MarvelResponse>(
  {
    apiInstance: apiMarvel,
    results: {},
  },
  {
    get: <T extends MarvelResponse>(
      target: {
        results: {[key: string]: T | undefined};
        apiInstance: ApisauceInstance;
      },
      url: string,
    ) => {
      if (url === 'prototype' || url === '$$typeof') {
        return;
      }

      return new Promise<T>(async (resolve, reject) => {
        if (target.results[url] !== undefined) {
          resolve(target.results[url] as T);
          return;
        }

        try {
          const response = await target.apiInstance.get<T>(url);
          const {data} = response;

          if (response.status !== 200 || !data) {
            throw new Error('Error fetching data');
          }
          target.results[url] = data;
          resolve(data);
        } catch (e) {
          reject(e);
        }
      });
    },
    set: (target, url: string, value) => {
      target.results[url] = value;
      return true;
    },
  },
);
