declare module '*.mp4' {
  const value: any;
  export default value;
}
declare module '@env' {
  export const API_MARVEL_URL: string;
  export const API_MARVEL_PRIVATE_KEY: string;
  export const API_MARVEL_PUBLIC_KEY: string;
}

declare module '*.svg' {
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
