/* settings-styles.js */

import {Dimensions, Image, StyleSheet} from 'react-native';

const { width, height } = Dimensions.get('window');

const settingsListStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		paddingTop: 8,
	},
	headerContainer: {
		width: width,
		height: 90,
		maxHeight: 90,
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 10,
		paddingBottom: 10,
	},
	closeButton: {
		position: 'absolute',
		top: 10,
		left: 10,
		zIndex: 100,
	},
	primaryText: {
		color: '#262426',
		fontSize: 40,
		fontWeight: '700',
		textAlign: 'center',
	},
	scrollContainer: {},
	menuItems: {
		flex: 6,
		flexDirection: 'column',
	},
	menuItem: {
		width: width,
		alignSelf: 'stretch',
		padding: 4,
		borderBottomWidth: 1,
		borderBottomColor: '#dbd8da',
	},
	menuButton: {
		padding: 4,
		paddingLeft: 12,
		justifyContent: 'space-between',
		flexDirection: 'row'
	},
	menuIcon: {
		alignSelf: 'center',
		marginRight: 8,
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
	menuTitle: {
		width: ((width - 16) * 0.70),
		flex: 0.70,

	},
	menuSwitch: {
		width: ((width - 16) * 0.20),
		flex: 0.20,
	},
});

export default settingsListStyles;