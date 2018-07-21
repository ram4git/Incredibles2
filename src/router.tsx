import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {
	createStackNavigator,
	createSwitchNavigator,
	createTabNavigator,
} from 'react-navigation';
import {
	AcademicStudies,
	CompititiveExams,
	EStore,
	Home,
	OnlineTests,
	SignIn,
} from './screens';
import { Color } from './styles';

export const SignedOut = createStackNavigator({
	SignIn: {
		screen: SignIn,
		navigationOptions: {
			header: null,
		},
	},
});

// FIX ME #1
// Tab Icons need to be replaced wtih Miz's icons

// FIX ME #2
// Central Icon has to be scaled and moved up with circle around
export const SignedIn = createTabNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Ionicon name="ios-home-outline" size={20} color={tintColor} />
				),
				tabBarVisible: true,
			},
		},
		AcademicStudies: {
			screen: AcademicStudies,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Ionicon name="ios-heart" size={20} color={tintColor} width={600} />
				),
			},
		},
		CompititiveExams: {
			screen: CompititiveExams,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Ionicon name="ios-search-outline" size={20} color={tintColor} />
				),
			},
		},
		OnlineTests: {
			screen: OnlineTests,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Ionicon name="ios-search-outline" size={20} color={tintColor} />
				),
			},
		},

		EStore: {
			screen: EStore,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Ionicon name="ios-search-outline" size={20} color={tintColor} />
				),
			},
		},
	},
	{
		initialRouteName: 'Home',
		tabBarOptions: {
			activeTintColor: Color.brightBlue,
			inactiveTintColor: Color.warmGrey,
			showLabel: true,
			style: {
				borderTopColor: Color.macaroniAndCheese,
				borderBottomWidth: 1,
				backgroundColor: 'transparent',
				marginTop: 50,
			},
		},
		tabBarPosition: 'top',
		swipeEnabled: true,
	}
);

export const createRootNavigator = (signedIn: boolean = false) => {
	return createSwitchNavigator(
		{
			SignedIn: {
				screen: SignedIn,
			},
			SignedOut: {
				screen: SignedOut,
			},
		},
		{
			initialRouteName: !signedIn ? 'SignedIn' : 'SignedOut',
		}
	);
};
