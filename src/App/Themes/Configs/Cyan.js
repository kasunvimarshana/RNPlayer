import {DefaultTheme} from 'react-native-paper';
import Colors from '../Colors';

const Theme = {
  ...DefaultTheme,
  dark: false,
  id: 2,
  roundness: 7,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1c2541',
    accent: '#ffa630',
    background: '#F1F7ED',
    text: colors.panegrey,
    placeholder: Colors.ashgrey,
    header: '#1c2541',
    headerTitle: Colors.white,

    //react-native-paper theme colors
    surface: Colors.white,
    primaryText: Colors.darkgunmetal,
  },
};

export default Theme;