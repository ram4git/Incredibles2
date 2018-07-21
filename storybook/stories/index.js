import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import {
	ImageBackground,
	ListView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import {
	BAlert,
	BBanner,
	BButton,
	BCheckBox,
	BInput,
	BSearchBar,
	BToggle,
	PasscodeTextInput,
} from '../../src/components';
import { Color, Font } from '../../src/styles';

storiesOf('Colors', module).add('all', () => (
	<ScrollView style={{ backgroundColor: Color.white }}>
		<Header centerComponent={{ text: 'COLORS', style: { color: '#fff' } }} />
		<ListView
			contentContainerStyle={s.colorGrid}
			dataSource={getColors()}
			renderRow={item => renderColor(item)}
		/>
	</ScrollView>
));

storiesOf('Input', module)
	.addDecorator(withKnobs)
	.add('one input', () => (
		<View style={s.centerize}>
			<BInput
				label={text('Label', 'Username', 'STORY_TOGGLE_INPUT_1')}
				value={text('Input', 'Donald', 'STORY_TOGGLE_INPUT_1')}
				onChange={action({ onChange: 'username entered' })}
			/>
		</View>
	))
	.add('two inputs, White background', () => (
		<View style={s.centerize}>
			<BInput
				label={text('First Label', 'Username', 'STORY_INPUT_INPUT_2')}
				value={text('First Input', 'Donald', 'STORY_INPUT_INPUT_2')}
				style={{ flex: 1 }}
				onChange={action({ onChange: 'Username changed' })}
			/>
			<BInput
				label={text('Second Label', 'Password', 'STORY_INPUT_INPUT_2')}
				style={{ flex: 1 }}
				onChange={action({ onChange: 'Password changed' })}
			/>
		</View>
	));

storiesOf('Toggle', module)
	.addDecorator(withKnobs)
	.add('No Labels', () => (
		<View style={s.centerize}>
			<BToggle
				isOn={boolean('isOn?', true)}
				onChange={action({ onChange: 'Toggle flipped' })}
			/>
			<BToggle
				isOn={boolean('isOn?', false)}
				onChange={action({ onChange: 'Toggle flipped' })}
			/>
		</View>
	))

	.add('With Labels', () => (
		<View style={s.centerize}>
			<BToggle
				isOn={boolean('isOn?', true, 'TOGGLE')}
				onChange={action({ onChange: 'Toggle flipped' })}
				label="save password"
			/>
			<BToggle
				isOn={boolean('isOn?', false, 'TOGGLE')}
				onChange={action({ onChange: 'Toggle flipped' })}
				label="save password"
			/>
		</View>
	))

	.add('with input box', () => (
		<View style={s.centerize}>
			<BInput
				label={text('Username Label', 'Username', 'TOGGLE_WITH_INPUTS')}
				value={text('Username Input', 'Donald', 'TOGGLE')}
				style={{ flex: 1 }}
				onChange={action({ onChange: 'Username changed' })}
			/>
			<BInput
				label={text('Password Label', 'Password', 'TOGGLE_WITH_INPUTS')}
				style={{ flex: 1 }}
				onChange={action({ onChange: 'Password changed' })}
			/>
			<BToggle
				isOn={boolean('saveUserName?', true, 'TOGGLE_WITH_INPUTS')}
				label={text('Toggle Label', 'Save Username?')}
				onChange={action({ onChange: 'Toggle flipped' })}
			/>
			<BToggle
				isOn={boolean('saveUserName?', true, 'TOGGLE_WITH_INPUTS')}
				label={text('Toggle Label', 'Leftist')}
				onChange={action({ onChange: 'Toggle flipped' })}
				position="flex-start"
			/>
			<BToggle
				isOn={boolean('saveUserName?', true, 'TOGGLE_WITH_INPUTS')}
				label={text('Toggle Label', 'Rightist')}
				onChange={action({ onChange: 'Toggle flipped' })}
				position="flex-end"
			/>
		</View>
	));
storiesOf('Scenes', module)
	.addDecorator(withKnobs)
	.add('Phone Numer verification', () => (
		<View
			style={{
				backgroundColor: 'white',
				flex: 1,
			}}>
			<PasscodeTextInput />
		</View>
	));

storiesOf('Button', module)
	.addDecorator(withKnobs)
	.add('Large Button', () => (
		<View style={s.centerize}>
			<BButton
				label={text('Button Label', 'Sign In')}
				onClick={action({ onChange: 'Button Clicked' })}
			/>
		</View>
	))
	.add('Small Button', () => (
		<View style={s.centerize}>
			<BButton
				label={text('Button Label', 'Sign In')}
				size="small"
				onClick={action({ onChange: 'Button Clicked' })}
			/>
		</View>
	))
	.add('Large Button Disabled', () => (
		<View style={s.centerize}>
			<BButton
				label={text('Button Label', 'Sign In')}
				onClick={action({ onChange: 'Button Clicked' })}
				disabled
			/>
		</View>
	))
	.add('Small Button Disabled', () => (
		<View style={s.centerize}>
			<BButton
				label={text('Button Label', 'Sign In')}
				size="small"
				disabled={true}
				onClick={action({ onChange: 'Button Clicked' })}
			/>
		</View>
	))
	.add('All variations of buttons', () => (
		<View style={s.centerize}>
			<BButton
				label={text('Button Label', 'Large Button')}
				onClick={action({ onChange: 'Button Clicked' })}
			/>
			<BButton
				label={text('Button Label', 'Small Button')}
				size="small"
				onClick={action({ onChange: 'Button Clicked' })}
			/>
			<BButton
				label={text('Button Label', 'Large Button Disabled')}
				disabled
				onClick={action({ onChange: 'Button Clicked' })}
			/>
			<BButton
				label={text('Button Label', 'Small Button Disabled')}
				size="small"
				disabled
				onClick={action({ onChange: 'Button Clicked' })}
			/>
			<BButton
				label={text('Button Label', 'Custom Width')}
				size={350}
				onClick={action({ onChange: 'Button Clicked' })}
			/>
		</View>
	));

storiesOf('Check Box', module)
	.addDecorator(withKnobs)
	.add('All Variations', () => (
		<View style={s.centerize}>
			<BCheckBox label="Selected Radio" checked={true} onChange={() => {}} />
			<BCheckBox
				label="Not Selected Radio"
				checked={false}
				onChange={() => {}}
			/>
			<BCheckBox
				label="Disabled Radio"
				checked={false}
				onChange={() => {}}
				disabled={true}
			/>
			<BCheckBox
				label="Selected Checkbox"
				type="checkbox"
				checked={true}
				onChange={() => {}}
			/>
			<BCheckBox
				label="Not Selected Checkbox"
				type="checkbox"
				checked={false}
				onChange={() => {}}
			/>
			<BCheckBox
				label="Disabled Checkbox"
				type="checkbox"
				checked={false}
				onChange={() => {}}
				disabled={true}
			/>
		</View>
	));

storiesOf('Alert', module)
	.addDecorator(withKnobs)
	.add('Alert with Two buttons', () => (
		<View style={s.centerize}>
			<BImageBackround>
				<BAlert
					visible={boolean('showAlert?', true)}
					title="Hello there smart pants!"
					body="Do you even read this long text bro?"
					buttons={[
						{ text: 'Yes', onPress: action({ onClick: 'Yes is Clicked' }) },
						{ text: 'No', onPress: action({ onClick: 'No is Clicked' }) },
					]}
				/>
			</BImageBackround>
		</View>
	))
	.add('Sans title and single button', () => (
		<View style={s.centerize}>
			<BImageBackround>
				<BAlert
					visible={boolean('showAlert?', true)}
					body="Title less life is of no meaning! Alas!!"
					buttons={[
						{
							text: 'Regret',
							onPress: action({ onClick: 'Regret is Clicked' }),
						},
					]}
				/>
			</BImageBackround>
		</View>
	))
	.add('Very loooooong content', () => (
		<View style={s.centerize}>
			<BImageBackround>
				<BAlert
					visible={boolean('showAlert?', true)}
					body="Lorem ipsum dolor sit amet, consectetur adipiscing elit 😃, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					buttons={[
						{
							text: 'Smile Now',
							onPress: action({ onChange: 'Smile Now is Clicked' }),
						},
					]}
				/>
			</BImageBackround>
		</View>
	));

storiesOf('Banners', module)
	.addDecorator(withKnobs)
	.add('Info Alert', () => (
		<View style={s.upperTop}>
			<BBanner
				type="info"
				content={text('info text', 'Out of office till Nov 22nd')}
			/>
		</View>
	))
	.add('Action Alert', () => (
		<View style={s.upperTop}>
			<BBanner
				type="action"
				content={text('action text', 'Invite them to download app!')}
			/>
		</View>
	))
	.add('Multiple Alerts', () => (
		<View style={s.centerize}>
			<BBanner content="Invite them to download app!" />
			<BBanner type="info" content="Out of office till Nov 22nd" />
			<BBanner content="Force them to download app!" />
			<BBanner type="info" content="I am back on Nov 22nd" />
		</View>
	));

storiesOf('SearchBar', module)
	.addDecorator(withKnobs)
	.add('In focus', () => (
		<View style={s.upperTop}>
			<BSearchBar placeholder="search by name and speciality" />
		</View>
	))
	.add('Error', () => (
		<View style={s.upperTop}>
			<BSearchBar
				placeholder="search by name and speciality"
				errorMsg="What kind of errros can show here?"
			/>
		</View>
	))
	.add('Inactive', () => (
		<View style={s.upperTop}>
			<BSearchBar placeholder="search by name and speciality" />
		</View>
	));

const getColors = () => {
	console.log(Object.keys(Color).length);
	const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
	return ds.cloneWithRows(Object.keys(Color));
};

const BImageBackround = props => (
	<ImageBackground
		style={{
			flex: 1,
			width: '100%',
			height: '100%',
			justifyContent: 'center',
			resizeMode: 'center',
		}}
		source={require('../../src/assets/splash_screen.png')}>
		{props.children}
	</ImageBackground>
);

const renderColor = colorCode => {
	return (
		<View key={colorCode} style={s.colorGridItem}>
			<Icon name="ios-egg" type="ionicon" size={80} color={Color[colorCode]} />
			<Text style={s.colorGridItemText}>{colorCode}</Text>
		</View>
	);
};

const s = StyleSheet.create({
	colorGrid: {
		justifyContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: '#ecf0f1',
	},
	colorGridItem: {
		padding: 10,
		margin: 2,
		width: 160,
		height: 120,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 4,
		borderWidth: 1,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 2,
	},
	colorGridItemText: {
		textAlign: 'center',
		fontSize: 14,
		fontFamily: Font.regular,
	},
	centerize: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	upperTop: {
		marginTop: 80,
	},
});
