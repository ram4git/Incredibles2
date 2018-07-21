import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Color, Font } from '../../src/styles';
import { PasscodeTextInput } from '../components/PasscodeTextInput';

interface IProps {
	inputPasscodeHandler: (text: string) => void;
	size: number;
	autoFilledValues?: string;
}

export class CodeInputBox extends Component<IProps, {}> {
	inputBoxValues = []; // maintains box input values for validation and sending data to calling screen

	render() {
		const { size, autoFilledValues } = this.props;
		const inputBoxes = [];
		for (let i = 0; i < size; i++) {
			if (String(autoFilledValues).charAt(i)) {
				this.inputBoxValues.push(String(autoFilledValues).charAt(i));
			} else {
				this.inputBoxValues.push('');
			}
			inputBoxes.push(
				<TextInput
					style={s.passcodeTextInput}
					underlineColorAndroid={Color.blackWith0Alpha}
					key={i}
					ref={`ref_${i}`}
					maxLength={1}
					autoFocus={i === 0}
					keyboardType="numeric"
					placeholder="-"
					placeholderTextColor={Color.black}
					value={
						String(autoFilledValues).charAt(i)
							? String(autoFilledValues).charAt(i)
							: ''
					}
					onChangeText={this.handleBoxTextChange.bind(this, i)}
				/>
			);
		}
		if (size === autoFilledValues.length) {
			this.passcodeValidation();
		}
		return <View style={s.passcodeContainer}>{inputBoxes}</View>;
	}

	// change the focus
	handleBoxTextChange(boxIndex, value) {
		if (this.refs[`ref_${boxIndex + 1}`] != null && value.length === 1) {
			(this.refs[`ref_${boxIndex + 1}`] as any).focus();
		}
		this.inputBoxValues[boxIndex] = value;
		this.passcodeValidation();
	}

	// validate and send updated codes values to calling screen
	passcodeValidation() {
		let allCodesFilled = true;
		let updatedCodesValue = '';
		this.inputBoxValues.forEach(item => {
			if (item === '') {
				allCodesFilled = false;
				return;
			} else {
				updatedCodesValue += item;
			}
		});
		if (allCodesFilled) {
			this.props.inputPasscodeHandler(updatedCodesValue);
		}
	}
}
const s = StyleSheet.create({
	passcodeContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	passcodeTextInput: {
		height: 50,
		width: 50,
		borderColor: Color.black,
		borderWidth: 1,
		borderRadius: 3,
		fontFamily: Font.regular,
		fontSize: 16,
		textAlign: 'center',
		marginStart: 5,
	},
});
