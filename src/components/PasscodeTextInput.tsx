import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { CodeInputBox } from './CodeInputBox';

interface IState {
	autoFilledValues: string; // autofill passcode value coming from SMS/Service
}

export class PasscodeTextInput extends Component<{}, IState> {
	requiredPasscodeBoxes: number = 6; // size of passcode boxes, should be equal to autofill passcode length.

	constructor(Props) {
		super(Props);
		this.state = {
			autoFilledValues: '', // initial autofill passcode value as blank.
			// need to be set from setState() method where actual SMS/Service received.
		};
	}

	inputPasscodeHandler = event => {
		// handle updated passcode values as string for further processing
	};

	render() {
		return (
			<View style={s.passcodeContainer}>
				<CodeInputBox
					inputPasscodeHandler={this.inputPasscodeHandler}
					size={this.requiredPasscodeBoxes}
					autoFilledValues={this.state.autoFilledValues}
				/>
			</View>
		);
	}
}

const s = StyleSheet.create({
	passcodeContainer: {
		flex: 1,
		flexDirection: 'row',
		height: 60,
	},
});
