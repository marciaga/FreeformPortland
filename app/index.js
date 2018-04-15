// app/index.js
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Home } from './screens/main';
import { About } from './screens/about';

export const startApp = async () => {
    try {
        Navigation.registerComponent('Home', () => Home);
        Navigation.registerComponent('About', () => About);

        // iconName, size, color
        const homeIcon = await Icon.getImageSource('home', 30, 'black');
        const questionIcon = await Icon.getImageSource('question', 30, 'black');

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
                    label: 'About',
                    screen: 'About',
                    icon: questionIcon,
                    // selectedIcon: require('./images/icon2_selected.png'),
                    title: 'About Us'
                }
            ]
        });
    } catch (e) {
        console.log('OH NO', e);
    }
};
