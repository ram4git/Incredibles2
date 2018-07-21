import React from 'react';
import { View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { BButton, BInput, BToggle } from '../components';
import { Strings } from '../i18n';
import s from '../styles/global';

interface IProps {
	navigation: NavigationScreenProp<any, any>;
}

interface IState {}

export class SignIn extends React.Component<IProps, IState> {
	login = () => this.props.navigation.navigate('SignedIn');

	render() {
		return (
			<View style={s.container}>
				<BInput label={Strings.username} />
				<BInput label={Strings.password} />
				<BToggle
					label={Strings.save_username}
					isOn={true}
					position="flex-end"
					containerStyle={{ marginHorizontal: 30 }}
				/>
				<BButton label={Strings.sign_in} onClick={this.login} size="small" />
			</View>
		);
	}
}
