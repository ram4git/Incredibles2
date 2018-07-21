import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Color } from '../styles';

interface IProps {
	label: string;
	readonly placeholder: string;
	onChangeText: () => void;
	onClear: () => void;
	errorMsg?: string;
}

export class BSearchBar extends Component<IProps> {
	searchInput: React.RefObject<SearchBar>;

	constructor(props) {
		super(props);
		this.searchInput = React.createRef();
	}

	componentDidMount() {
		this.searchInput.current.focus();
	}

	clearText() {}

	render() {
		const {
			label = 'Search',
			onChangeText,
			onClear,
			placeholder,
			errorMsg,
		} = this.props;
		return (
			<View style={s.container}>
				<SearchBar
					ref={this.searchInput}
					onChangeText={onChangeText}
					placeholder={placeholder}
					round={true}
					lightTheme={true}
					containerStyle={[
						s.searchBox,
						errorMsg ? s.errorBorder : s.focusBorder,
					]}
					inputStyle={s.textInput}
					clearIcon={{
						color: Color.warmGrey,
						name: 'cancel',
						style: s.iconStyle,
					}}
					icon={{ color: Color.brightBlue, style: s.iconStyle }}
				/>
				{errorMsg ? <Text style={s.errorMsg}>{errorMsg}</Text> : null}
			</View>
		);
	}
}

const s = StyleSheet.create({
	container: {
		justifyContent: 'center',
	},
	searchBox: {
		backgroundColor: Color.liteGrey,
		height: 50,
		width: '100%',
		justifyContent: 'center',
		borderRadius: 25,
		borderWidth: 1,
	},
	textInput: {
		backgroundColor: Color.liteGrey,
		marginLeft: 12,
		fontSize: 15,
		color: Color.blackTwo,
	},
	errorMsg: {
		color: Color.grapefruit,
		fontSize: 15,
		marginLeft: 20,
	},
	errorBorder: {
		borderColor: Color.grapefruit,
		borderTopColor: Color.grapefruit,
		borderBottomColor: Color.grapefruit,
	},
	focusBorder: {
		borderColor: Color.brightBlue,
		borderTopColor: Color.brightBlue,
		borderBottomColor: Color.brightBlue,
	},
	iconStyle: {
		fontSize: 22,
		height: 20,
		width: 20,
		top: 13,
	},
});
