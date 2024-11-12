import {create} from 'apisauce';
import {API_MARVEL, MARVEL_PRIVATE_KEY, MARVEL_PUBLIC_KEY} from '@/conf/env.ts';
import {generateHash} from '@/util/hash.ts';

const apiMarvel = create({
  baseURL: API_MARVEL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiMarvel.addRequestTransform(request => {
  const timestamp = new Date().getTime();
  const hash = generateHash({
    timestamp,
    privateKey: MARVEL_PRIVATE_KEY,
    publicKey: MARVEL_PUBLIC_KEY,
  });

  request.params = {
    ...request.params,
    ts: timestamp,
    apikey: MARVEL_PUBLIC_KEY,
    hash,
  };
});

export default apiMarvel;
