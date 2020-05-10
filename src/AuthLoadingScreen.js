import AsyncStorage from '@react-native-community/async-storage';
import {ROUTE_SCREEN} from './constant';

export const AuthLoadingScreen = props => {
  const checkAccessToken = async () => {
    try {
      const value = await AsyncStorage.getItem('accessToken');
      if (value) {
        return props.navigation.navigate(ROUTE_SCREEN.MAIN_LAYOUT);
      }
      return props.navigation.navigate(ROUTE_SCREEN.LOGIN_LAYOUT);
    } catch (e) {
      // error reading value
    }
  };
  checkAccessToken();
  return null;
};
