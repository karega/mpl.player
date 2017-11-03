/* compare-styles.js */

import {Dimensions, Image, StyleSheet} from 'react-native';

const { width, height } = Dimensions.get('window');

const compareStyles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: '#000',
		flex: 1,
		flexDirection: 'column',
		padding: 20,
		paddingBottom: 0,
	},
	scrollContainer: {
		flexDirection: 'column',
	},
	compareSplashContainer: {
		flexDirection: 'column',
		flexWrap: 'nowrap',
		alignSelf: 'center',
	},
	compareSplash: {
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		alignSelf: 'center',
		opacity: 0.5,
	},
	sidebar: {
		alignItems: 'flex-start',
		backgroundColor: '#dbd8da',
		justifyContent: 'flex-start',
		flex: 1,
		flexDirection: 'column',
	},
	sbProfileName: {
		alignItems: 'flex-start',
		alignSelf: 'stretch',
		backgroundColor: '#262426',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		padding: 8,
		paddingTop: 16,
		paddingBottom: 16,
	},
	sbProfileText: {
		color: '#dbd8da',
		fontSize: 18,
		fontWeight: '100',
		marginLeft: 8,
	},
	menuButton: {
		position: 'absolute',
		top: 10,
		left: 10,
		zIndex: 100,
	},
	menuItems: {
		flex: 6,
		flexDirection: 'column',
	},
	menuItem: {
		alignSelf: 'stretch',
		padding: 16,
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
	sbFooter: {
		alignSelf: 'stretch',
		alignItems: 'flex-end',
		borderTopWidth: 1,
		borderTopColor: '#262426',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		padding: 16,
	},
	versionText: {
		alignSelf: 'flex-end',
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		bottom: 12,
		right: 12,
		color: '#262426',
		position: 'absolute',
		fontSize: 12,
		opacity: 0.75,
	},
	addArchetype: {
		flex: 1,
		flexDirection: 'row',
		alignSelf: 'flex-end',
		justifyContent: 'center',
		alignItems: 'center',
		height: 72,
		padding: 10,
		borderWidth: 1,
		borderColor: '#262426',
		backgroundColor: '#BF1725',
	},
	addArchetypeIcon: {
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		alignSelf: 'center',
	},
	addArchetypeText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: '100',
		textAlign: 'center',
	},
	primaryText: {
		color: '#fff',
		fontSize: 40,
		fontWeight: '700',
		textAlign: 'center',
	},
	secondaryText: {
		color: '#fff',
		fontSize: 20,
		fontWeight: '100',
		textAlign: 'center',
	},
	headerContainer: {
		backgroundColor: '#000',
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
	contentContainer: {
		flexDirection: 'row',
		backgroundColor: '#000',
		height: 72,
		alignSelf: 'flex-end',
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},
	comparatorTable: {
		alignItems: 'flex-start',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		flexWrap: 'nowrap',
	},
	skillItem: {
		marginBottom: 10,
	},
	positionText: {
		fontSize: 32,
		fontWeight: '900',
		color: '#fff',
		textAlign: 'center',
		alignSelf: 'center',
	},
	removeBuildButton: {
		/*position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#fff',
		zIndex: 100,*/
	}
});

export default compareStyles;
