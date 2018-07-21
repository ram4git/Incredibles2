import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { Font } from '../styles';

interface IProps {
	label: string;
	value?: string;
	onChange: (event: { nativeEvent: { text: string } }) => void;
}

interface IState {
	isFocused: boolean;
}

export class BInput extends Component<IProps, IState> {
	constructor(props) {
		super(props);
		this.state = {
			isFocused: props.value || false,
		};
	}

	handleFocus() {
		this.setState({ isFocused: true });
	}

	handleBlur() {
		this.setState({ isFocused: false });
	}

	render() {
		const { label, ...props } = this.props;
		const { isFocused } = this.state;
		const labelStyle = {
			left: 10,
			top: !isFocused && !props.value ? 12 : -12,
			fontSize: Platform.OS === 'ios' ? 18 : 12,
			alignSelf: 'flex-start',
			backgroundColor: 'white',
			paddingLeft: 4,
			paddingRight: 4,
			fontFamily: Font.regular,
		};
		return (
			<View style={s.container}>
				<Text style={labelStyle}>{label}</Text>
				<TextInput
					{...props}
					underlineColorAndroid="transparent"
					style={s.textInput}
					onFocus={this.handleFocus}
					onBlur={this.handleBlur}
					onChange={props.onChange}
				/>
			</View>
		);
	}
}

const s = StyleSheet.create({
	container: {
		borderRadius: 4,
		borderWidth: 1,
		marginTop: 10,
		marginBottom: 10,
		width: 320,
		height: 52,
	},
	textInput: {
		height: Platform.OS === 'ios' ? 32 : 38,
		fontSize: Platform.OS === 'ios' ? 20 : 15,
		color: '#000',
		marginLeft: 10,
		bottom: 10,
		fontFamily: Font.regular,
	},
});
