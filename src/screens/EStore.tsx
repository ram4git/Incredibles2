import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';
import s from '../styles/global';

interface IProps {
	navigation: NavigationScreenProp<any, any>;
	print: any;
}

interface IState {}

export class EStore extends Component<IProps, IState> {
	render() {
		return (
			<View style={s.container}>
				<Text style={s.instructions}>EStore Coming Soon!</Text>
			</View>
		);
	}
}
