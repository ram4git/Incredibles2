import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Color } from '../styles';

interface IProps {
	type?: 'action' | 'info';
	content: string;
}

interface IState {}

export class BBanner extends Component<IProps, IState> {
	render() {
		const { type = 'action' } = this.props;
		return (
			<View
				style={[
					s.container,
					type === 'action' ? s.actionBackground : s.infoBackground,
				]}>
				<Text style={type === 'action' ? s.actionText : s.infoText}>
					{this.props.content}
				</Text>
			</View>
		);
	}
}

const s = StyleSheet.create({
	container: {
		height: 50,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	actionText: {
		color: Color.white,
		fontSize: 18,
	},
	infoText: {
		color: Color.black,
		fontSize: 18,
	},
	actionBackground: {
		backgroundColor: Color.brightBlue,
	},
	infoBackground: {
		backgroundColor: Color.macaroniAndCheese,
	},
});
