import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import * as reducers from './reducers/index';
import { setPlayerStatus } from './actions/index';
import registerScreens from './screens/screens.js';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

registerScreens(store, Provider);

export default class App extends React.Component {
    constructor(props) {
        super(props);

        store.dispatch(setPlayerStatus(false));
    }

    startApp = ({
        homeIcon,
        calendarIcon,
        questionIcon,
        upIcon,
        downIcon
    }) => {
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
        })
    }

    async initialize() {
        // iconName, size, color
        const homeIcon = await Icon.getImageSource('home', 30, 'black');
        const questionIcon = await Icon.getImageSource('question', 30, 'black');
        const calendarIcon = await Icon.getImageSource('calendar', 30, 'black');
        const upIcon = await Icon.getImageSource('caret-up', 30, 'black');
        const downIcon = await Icon.getImageSource('caret-down', 30, 'black');

        this.startApp({
            homeIcon,
            calendarIcon,
            questionIcon,
            upIcon,
            downIcon
        });
    }
}
