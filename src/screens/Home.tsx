import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationScreenProp } from 'react-navigation';
import s from '../styles/global';

interface IProps {
	navigation: NavigationScreenProp<any, any>;
}

interface IState {}

export class Home extends Component<IProps, IState> {
	render() {
		return (
			<View style={s.container}>
				<Text style={s.welcome}>🗽</Text>
				<Text style={s.instructions}>Project Manhattan</Text>
				<Icon name="check-circle" size={16} color="#77ACD4">
					<Text> React Native Vector Icons</Text>
				</Icon>
				<Button
					title="React Native Elements"
					icon={{
						name: 'check-circle',
						size: 16,
						color: 'white',
					}}
					buttonStyle={s.button}
					onPress={() => {}}
				/>
			</View>
		);
	}
}
