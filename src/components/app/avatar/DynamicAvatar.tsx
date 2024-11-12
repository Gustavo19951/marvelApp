import {Animated, StyleSheet, Text, View} from 'react-native';
import BeatSVG from '@/assets/icons/beast.svg';
import BlackWidowSVG from '@/assets/icons/blackWidow.svg';
import CaptainAmericaSVG from '@/assets/icons/captainAmerica.svg';
import CyclopsMarvelSVG from '@/assets/icons/cyclopsMarvel.svg';
import DeadpoolSVG from '@/assets/icons/deadpool.svg';
import GambitSVG from '@/assets/icons/gambit.svg';
import GrootSVG from '@/assets/icons/groot.svg';
import HawkeyeSVG from '@/assets/icons/hawkeye.svg';
import HellcatSVG from '@/assets/icons/hellcat.svg';
import HulkSVG from '@/assets/icons/hulk.svg';
import HumanTorchSVG from '@/assets/icons/humanTorch.svg';
import IronManSVG from '@/assets/icons/ironMan.svg';
import JessicaJonesSVG from '@/assets/icons/jessicaJones.svg';
import LoganSVG from '@/assets/icons/logan.svg';
import LukeCageSVG from '@/assets/icons/lukeCage.svg';
import MagnetoSVG from '@/assets/icons/magneto.svg';
import MystiqueSVG from '@/assets/icons/mystique.svg';
import ProfessorXSVG from '@/assets/icons/professorX.svg';
import PurpleManSVG from '@/assets/icons/purpleMan.svg';
import SpiderManSVG from '@/assets/icons/spiderMan.svg';
import StormSVG from '@/assets/icons/storm.svg';
import ThanosSVG from '@/assets/icons/thanos.svg';
import ThorSVG from '@/assets/icons/thor.svg';
import VenomSVG from '@/assets/icons/venom.svg';
import WolverineSVG from '@/assets/icons/wolverine.svg';
import LogoSVG from '@/assets/icons/logo.svg';
import {useEffect, useMemo, useState} from 'react';

const icons = [
  BeatSVG,
  BlackWidowSVG,
  CaptainAmericaSVG,
  CyclopsMarvelSVG,
  DeadpoolSVG,
  GambitSVG,
  GrootSVG,
  HawkeyeSVG,
  HellcatSVG,
  HulkSVG,
  HumanTorchSVG,
  IronManSVG,
  JessicaJonesSVG,
  LoganSVG,
  LukeCageSVG,
  MagnetoSVG,
  MystiqueSVG,
  ProfessorXSVG,
  PurpleManSVG,
  SpiderManSVG,
  StormSVG,
  ThanosSVG,
  ThorSVG,
  VenomSVG,
  WolverineSVG,
  LogoSVG,
];

export const DynamicAvatar = () => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const fadeAnim = useMemo(() => new Animated.Value(1), []);

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setCurrentIconIndex(prevIndex => (prevIndex + 1) % icons.length);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [fadeAnim]);

  const CurrentIcon = icons[currentIconIndex];

  return (
    <Animated.View style={{opacity: fadeAnim}}>
      <CurrentIcon width={50} height={50} />
    </Animated.View>
  );
};
