import { DrawerNavigationProp } from '@react-navigation/drawer';

export interface INavigation extends DrawerNavigationProp<any, any> {
  openDrawer: () => void;
  closeDrawer: () => void;
}
