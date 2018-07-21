import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Switch,
	Text,
	View,
	ViewStyle,
} from 'react-native';
import { Color, Font } from '../styles';

interface IProps {
	isOn: boolean;
	label?: string;
	onToggle: (value: boolean) => void;
	position?: 'flex-end' | 'flex-start' | 'center';
	containerStyle?: ViewStyle;
}

interface IState {}

export class BToggle extends Component<IProps, IState> {
	public static defaultProps: IProps = {
		isOn: false,
		position: 'center',
		onToggle: () => {},
	};

	render() {
		const { label, isOn, position, containerStyle } = this.props;
		return (
			<View style={[s.container, { alignSelf: position }, containerStyle]}>
				{label ? (
					<View style={s.label}>
						<Text style={s.labelText}>{label}</Text>
					</View>
				) : null}
				<View>
					<Switch
						style={s.switch}
						onTintColor={Color.brightBlue}
						onValueChange={this.props.onToggle}
						thumbTintColor={Platform.OS === 'android' ? Color.white : null}
						value={isOn}
					/>
				</View>
			</View>
		);
	}
}

const s = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginVertical: 10,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	label: {
		justifyContent: 'center',
		marginRight: 10,
		alignItems: 'center',
	},
	labelText: {
		fontSize: 18,
		fontFamily: Font.regular,
	},
	switch: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
});
