import {DefaultTheme} from 'react-native-paper';
import Colors from '../Colors';

const Theme = {
  ...DefaultTheme,
  id: 1,
  dark: false,
  roundness: 7,
  colors: {
    ...DefaultTheme.colors,
    primary: '#5c80bc',
    accent: '#a5be00',
    background: Colors.issabeline,
    text: Colors.panegrey,
    placeholder: Colors.ashgrey,
    header: '#5c80bc',
    headerTitle: Colors.white,

    //react-native-paper theme colors
    surface: Colors.white,
    primaryText: Colors.darkgunmetal,
  },
};

export default Theme;