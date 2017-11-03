/* builder-styles.js */

import {Image, StyleSheet} from 'react-native';

const builderStyles = StyleSheet.create({
	container: {
		alignItems: 'stretch',
		backgroundColor: '#000',
		justifyContent: 'center',
		flex: 1,
		flexDirection: 'column',
	},
	headerContainer: {
		backgroundColor: '#000',
		height: 91,
		maxHeight: 91,
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	skillContainer: {
		flex: 1,
		flexWrap: 'wrap',
		flexDirection: 'row',
		alignItems: 'stretch',
		justifyContent: 'flex-start',
	},
	primaryText: {
		color: '#fff',
		fontSize: 48,
		fontWeight: '700',
		textAlign: 'center',
		paddingBottom: -10,
	},
	secondaryText: {
		color: '#fff',
		fontSize: 20,
		fontWeight: '100',
		textAlign: 'center',
	},
	contentContainer: {
		flex: 2,
		flexDirection: 'column',
		backgroundColor: '#000',
	},
	cypContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'stretch',
		justifyContent: 'center',
		position: 'relative',
	},
	positionText: {
		color: '#fff',
		fontSize: 32,
		fontWeight: '900',
		textAlign: 'center',
		position: 'absolute',
		top: -10,
		left: 0,
		flex: 1,
		zIndex: 100,
	},
	cypImage: {
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		alignSelf: 'center',
		flex: 1,
	},
	scrollContainer: {
		flex: 1,
		flexDirection: 'column',
	},
	menuButton: {
		position: 'absolute',
		top: 20,
		left: 10,
		zIndex: 100,
	},
	skillPanel: {
	},
	skillText: {
		height: 31,
		maxHeight: 31,
		color: '#fff',
		fontSize: 12,
		fontWeight: '100',
		textAlign: 'center',
	}
});

export default builderStyles;