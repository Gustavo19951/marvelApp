import {generateHash} from '@/util/hash.ts';
import {MARVEL_PRIVATE_KEY, MARVEL_PUBLIC_KEY} from '@/conf/env.ts';
export const imageMarvel = (url: string, extension: string) => {
  const timestamp = new Date().getTime();
  const hash = generateHash({
    timestamp,
    privateKey: MARVEL_PRIVATE_KEY,
    publicKey: MARVEL_PUBLIC_KEY,
  });
  return `${url}.${extension}?apikey=${MARVEL_PUBLIC_KEY}&hash=${hash}&ts=${timestamp}`;
};
