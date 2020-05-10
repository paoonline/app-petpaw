import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {ROUTE_SCREEN} from './constant';
import {AuthLoadingScreen} from './AuthLoadingScreen';
import {LoginLayouts, MainLayouts} from './layouts';

export const AppNavigator = createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    [ROUTE_SCREEN.LOGIN_LAYOUT]: LoginLayouts,
    [ROUTE_SCREEN.MAIN_LAYOUT]: MainLayouts,
  }),
);
