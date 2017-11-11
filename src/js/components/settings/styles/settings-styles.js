/* settings-styles.js */

import {StyleSheet} from 'react-native';

const settingsListStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-start",
		paddingTop: 8,
	},
	scrollContainer: {},
	menuItems: {
		flex: 6,
		flexDirection: 'column',
	},
	menuItem: {
		width: 284,
		alignSelf: 'stretch',
		padding: 4,
	},
	menuButton: {
		padding: 4,
		paddingLeft: 12,
	},
	menuHeader: {
		color: '#262426',
		fontSize: 28,
		fontWeight: '100',
	},
	menuLabel: {
		color: '#262426',
		fontSize: 18,
		fontWeight: '100',
	},
});

export default settingsListStyles;