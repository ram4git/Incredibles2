import React, { Component } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { Color, Font } from '../styles';

interface IButtonProps {
	text: string;
	onPress: () => void;
}

interface IProps {
	visible: boolean;
	title?: string;
	body: string;
	buttons: IButtonProps[];
}

interface IState {}

export class BAlert extends Component<IProps, IState> {
	renderTitle() {
		return this.props.title ? (
			<Text style={s.modalTitle}>{this.props.title}</Text>
		) : null;
	}

	renderContent() {
		return this.props.body ? (
			<Text style={s.modalText}>{this.props.body}</Text>
		) : null;
	}

	renderButtons() {
		const buttons = [];
		if (this.props.buttons) {
			this.props.buttons.forEach(button => {
				buttons.push(
					<Text style={s.modalButtonText} onPress={button.onPress}>
						{button.text.toUpperCase()}
					</Text>
				);
			});
			return <View style={s.modalButtons}>{buttons}</View>;
		}
	}

	render() {
		const { visible } = this.props;
		return (
			<Modal
				animationType="fade"
				transparent={true}
				visible={visible}
				presentationStyle="overFullScreen">
				<View style={s.modal}>
					<View style={s.modalContainer}>
						{this.renderTitle()}
						{this.renderContent()}
						{this.renderButtons()}
					</View>
				</View>
			</Modal>
		);
	}
}

const s = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Color.white,
		alignSelf: 'stretch',
	},
	modal: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	modalContainer: {
		borderWidth: 1,
		borderColor: Color.macaroniAndCheese,
		borderRadius: 4,
		backgroundColor: Color.white,
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 20,
		marginRight: 20,
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 20,
		paddingRight: 20,
		minWidth: 260,
	},
	modalTitle: {
		textAlign: 'center',
		color: Color.blackTwo,
		fontSize: 18,
		paddingBottom: 10,
		fontFamily: Font.regular,
	},
	modalText: {
		textAlign: 'center',
		color: Color.blackTwo,
		fontFamily: Font.regular,
	},
	modalButtons: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingTop: 20,
	},
	modalButtonText: {
		color: Color.brightBlue,
		textAlign: 'center',
		fontFamily: Font.bold,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
