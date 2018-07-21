import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { Color, Font } from '../styles';

interface IProps {
	readonly label: string;
	readonly disabled?: boolean;
	readonly size?: 'small' | 'large' | number;
	onClick: () => void;
}

export class BButton extends Component<IProps> {
	render() {
		const { label, disabled = false, onClick, size = 'large' } = this.props;

		return (
			<Button
				buttonStyle={{
					marginTop: 20,
					width: this.getButtonWidth(),
					height: 40,
				}}
				backgroundColor={Color.brightBlue}
				title={label}
				onPress={onClick}
				borderRadius={4}
				fontSize={14}
				disabled={disabled}
				disabledStyle={{ backgroundColor: Color.powderBlue }}
				fontFamily={Font.bold}
				textStyle={{ textAlign: 'center' }}
			/>
		);
	}

	getButtonWidth() {
		const { size = 'large' } = this.props;
		let calculatedSize: number = 280;
		switch (size) {
			case 'small':
				calculatedSize = 160;
				break;
			case 'large':
				calculatedSize = 280;
				break;
			default:
				calculatedSize = size;
		}
		return calculatedSize;
	}
}
