import {SharedElementsComponentConfig} from 'react-navigation-shared-element/build/types';

export const SharedElementConf: SharedElementsComponentConfig = route => {
  const {item} = route.params;
  return [
    {
      id: `item.${item.id}`,
      animation: 'move',
      resize: 'clip',
      align: 'center-center',
    },
  ];
};
