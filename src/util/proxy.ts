import apiMarvel from '@/conf/apiMarvel.ts';
import {ApisauceInstance} from 'apisauce';
import {MarvelHeroesListResponse} from '@/type/marvel.ts';

export type MarvelResponse = {
  results: {[key: string]: MarvelHeroesListResponse | undefined};
  apiInstance: ApisauceInstance;
};

type ProxyHandler<T, P extends string> = {
  get?(target: T, p: P, receiver: any): any;
  set?(
    target: {results: {[key in P]?: T}},
    p: P,
    value: any,
    receiver: any,
  ): boolean;
};

declare const Proxy: {
  new <T extends object>(
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
    get: function <T extends MarvelHeroesListResponse>(
      target: {
        results: {[key: string]: T | undefined};
        apiInstance: ApisauceInstance;
      },
      url: string,
    ) {
      if (url === 'prototype' || url === '$$typeof') {
        return;
      }
      const values = target;

      return new Promise<T>(async (resolve, reject) => {
        if (values.results[url] !== undefined) {
          resolve(values.results[url] as T);
          return;
        }

        try {
          const response = await values.apiInstance.get<T>(url);
          const {data} = response;

          if (response.status !== 200 || !data) {
            throw new Error('Error fetching data');
          }
          values.results[url] = data;
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
