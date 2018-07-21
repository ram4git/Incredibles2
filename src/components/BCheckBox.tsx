import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Color, Font } from '../styles';

interface IProps {
	checked: boolean;
	disabled?: boolean;
	readonly label?: string;
	readonly type?: 'radio' | 'checkbox';
	onChange: () => void;
}

interface IState {}

export class BCheckBox extends Component<IState, IProps> {
	public static defaultProps: Partial<IProps> = {
		type: 'radio',
		disabled: false,
	};

	render() {
		const {
			type = 'radio',
			label,
			checked,
			disabled = false,
			onChange,
		} = this.props;
		return (
			<CheckBox
				title={label}
				checked={checked}
				containerStyle={s.container}
				checkedIcon={
					type === 'radio' ? 'ios-radio-button-on' : 'ios-checkmark-circle'
				}
				uncheckedIcon={
					disabled ? 'ios-remove-circle-outline' : 'ios-radio-button-off'
				}
				checkedColor={Color.brightBlue}
				fontFamily={Font.regular}
				iconType="ionicon"
				disabled={disabled}
				onChanage={onChange}
			/>
		);
	}
}

const s = StyleSheet.create({
	container: {
		backgroundColor: 'transparent',
		borderColor: 'transparent',
	},
});
