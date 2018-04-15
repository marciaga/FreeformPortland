// app/index.js
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Home } from './screens/main';
import { About } from './screens/about';
import { Schedule } from './screens/schedule';
import { ShowDetail } from './screens/show-detail';
import { PlaylistDetail } from './screens/playlist-detail';

export const startApp = async () => {
    try {
        Navigation.registerComponent('Home', () => Home);
        Navigation.registerComponent('About', () => About);
        Navigation.registerComponent('Schedule', () => Schedule);
        Navigation.registerComponent('ShowDetail', () => ShowDetail);
        Navigation.registerComponent('PlaylistDetail', () => PlaylistDetail);

        // iconName, size, color
        const homeIcon = await Icon.getImageSource('home', 30, 'black');
        const questionIcon = await Icon.getImageSource('question', 30, 'black');
        const calendarIcon = await Icon.getImageSource('calendar', 30, 'black');
        const upIcon = await Icon.getImageSource('caret-up', 30, 'black');
        const downIcon = await Icon.getImageSource('caret-down', 30, 'black');

        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'Home',
                    screen: 'Home',
                    icon: homeIcon,
                    // selectedIcon: require('./images/icon1_selected.png'),
                    title: 'Freeform Portland'
                },
                {
                    label: 'Schedule',
                    screen: 'Schedule',
                    icon: calendarIcon,
                    // selectedIcon: require('./images/icon1_selected.png'),
                    title: 'Schedule'
                },
                {
                    label: 'About',
                    screen: 'About',
                    icon: questionIcon,
                    // selectedIcon: require('./images/icon2_selected.png'),
                    title: 'About Us'
                }
            ],
            passProps: {
                upIcon,
                downIcon
            }
        });
    } catch (e) {
        console.log('OH NO', e);
    }
};
