import { Navigation } from 'react-native-navigation';
import { Home } from './main';
import { About } from './about';
import { Schedule } from './schedule';
import { ShowDetail } from './show-detail';
import { PlaylistDetail } from './playlist-detail';
import Drawer from '../components/drawer';

export default (store, Provider) =>  {
    Navigation.registerComponent('Home', () => Home, store, Provider);
    Navigation.registerComponent('About', () => About, store, Provider);
    Navigation.registerComponent('Schedule', () => Schedule, store, Provider);
    Navigation.registerComponent('ShowDetail', () => ShowDetail, store, Provider);
    Navigation.registerComponent('PlaylistDetail', () => PlaylistDetail, store, Provider);
    Navigation.registerComponent('Drawer', () => Drawer, store, Provider);
}
