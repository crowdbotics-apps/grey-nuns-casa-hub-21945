import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps161461Navigator from '../features/Maps161461/navigator';
import Add-Item161460Navigator from '../features/Add-Item161460/navigator';
import Maps161456Navigator from '../features/Maps161456/navigator';
import UserProfile161452Navigator from '../features/UserProfile161452/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps161461: { screen: Maps161461Navigator },
Add-Item161460: { screen: Add-Item161460Navigator },
Maps161456: { screen: Maps161456Navigator },
UserProfile161452: { screen: UserProfile161452Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
