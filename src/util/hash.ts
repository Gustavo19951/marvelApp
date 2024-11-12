import MD5 from 'crypto-js/md5';

type GenerateHashProps = {
  timestamp: number;
  privateKey: string;
  publicKey: string;
};
export const generateHash = ({
  timestamp,
  privateKey,
  publicKey,
}: GenerateHashProps) => MD5(timestamp + privateKey + publicKey).toString();
