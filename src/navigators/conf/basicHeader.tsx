import {Colors} from '@/theme/Theme.ts';
import {ChevronLeft} from 'lucide-react-native';

export const BasicHeader = {
  headerShown: true,
  headerStyle: {
    backgroundColor: Colors.foreground,
    elevation: 0,
  },
  headerTitleStyle: {
    color: Colors.white,
  },
  headerTitleAlign: 'center',
  headerBackImage: () => <ChevronLeft color={Colors.white} size={35} />,
};
