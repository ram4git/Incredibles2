import { configure, getStorybookUI } from '@storybook/react-native';
import { AppRegistry, YellowBox } from 'react-native';
import './reactotron-config'; // Comment for disabling reacttron support
import App from './src/App';

YellowBox.ignoreWarnings([
	'Encountered an error loading page', // WebView uri: result.url and url failing to load - "bloomberg suneq" https://github.com/facebook/react-native/issues/7839#issuecomment-224111608
	'Deprecation warning: moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
	'Task orphaned for request ',
	'Remote debugger is in a background tab which may cause apps to perform slowly',
]);
console.disableYellowBox = true;

/**
 * This is a temporary arrangement to launch storybook.
 * Storybook will be conditionally hooked in the navigation tree in the future
 * Until then, set SHOW_STORY_BOOK flag to true
 */
const SHOW_STORY_BOOK = false;

if (SHOW_STORY_BOOK) {
	configure(function() {
		require('./storybook/stories');
	}, module);

	const StorybookUI = getStorybookUI({
		port: 7007,
		host: 'localhost',
	});

	AppRegistry.registerComponent('Brooklyn', () => StorybookUI);
} else {
	AppRegistry.registerComponent('Brooklyn', () => App);
}

// import your stories
