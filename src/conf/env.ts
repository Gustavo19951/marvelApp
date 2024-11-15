import {
  API_MARVEL_URL,
  API_MARVEL_PRIVATE_KEY,
  API_MARVEL_PUBLIC_KEY,
} from '@env';

export const API_MARVEL: string = API_MARVEL_URL ? API_MARVEL_URL : '';
export const MARVEL_PRIVATE_KEY: string = API_MARVEL_PRIVATE_KEY
  ? API_MARVEL_PRIVATE_KEY
  : '';
export const MARVEL_PUBLIC_KEY: string = API_MARVEL_PUBLIC_KEY
  ? API_MARVEL_PUBLIC_KEY
  : '';
