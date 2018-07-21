import React from 'react';
import { Platform } from 'react-native';
import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';
import { NavigationState } from 'react-navigation';
import {
	createNavigationReducer,
	createReactNavigationReduxMiddleware,
	reduxifyNavigator,
} from 'react-navigation-redux-helpers';
import { connect, Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import { createRootNavigator } from './router';

let trackerId;
// TODO : need to move this to config file
if (__DEV__) {
	trackerId = 'UA-121395894-1';
} else {
	trackerId = 'UA-121451952-1';
}

export const tracker = new GoogleAnalyticsTracker(trackerId);
tracker.trackScreenView('Test');
const instructions = Platform.select({
	ios: 'Project Manhattan',
	android: 'Project Manhattan',
});

interface IProps {}

interface IState {
	signedIn: boolean;
	checkedSignIn: boolean;
	nav: string;
}

export default class App extends React.Component<IProps, IState> {
	constructor(props) {
		super(props);

		this.state = {
			signedIn: false,
			checkedSignIn: false,
			nav: 'root',
		};
	}

	render() {
		const { signedIn } = this.state;

		const AppNavigator = createRootNavigator(signedIn);
		const navReducer = createNavigationReducer(AppNavigator);
		const appReducer = combineReducers({
			nav: navReducer,
		});

		// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
		const middleware = createReactNavigationReduxMiddleware(
			'root',
			(state: { nav: NavigationState }) => state.nav
		);

		const App = reduxifyNavigator(AppNavigator, 'root');
		const mapStateToProps = state => ({
			state: state.nav,
		});
		const AppWithNavigationState = connect(mapStateToProps)(App);

		const store = createStore(appReducer, applyMiddleware(middleware, logger));

		return (
			<Provider store={store}>
				<AppWithNavigationState />
			</Provider>
		);
	}
}
