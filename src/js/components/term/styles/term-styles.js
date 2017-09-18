/* term-styles.js */

import {StyleSheet} from 'react-native';

const termStyles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: '#464646',
		justifyContent: 'center',
		flex: 1,
		flexDirection: 'row',
	},
	homeToolbar: {
		alignSelf: 'stretch',
		backgroundColor: '#3e355c',
		height: 56,
	},
	scrollContainer: {
		flex: 1,
		flexDirection: 'column',
	},
	termCard: {
		backgroundColor: '#fff',
		flex: 1,
		paddingRight:0,
		paddingLeft:0,
		margin: 0
	},
	termImage: {
		opacity: 0.5
	},
	termLabel: {
		color: '#fff',
		fontSize: 36,
		fontWeight: '600',
		letterSpacing: 1,
		paddingLeft: 16,
	},
	termBody: {
		backgroundColor: '#073473',
		paddingTop: 0,
		paddingBottom: 0,
		flexDirection: 'column',
		flex: 1,
	},
	termBodyContent: {
		backgroundColor: '#e9feff',
		flex: 1,
		flexDirection: 'column',
	},
	termDefCardContent: {
		backgroundColor: '#e9feff',
		paddingTop: 8,
		paddingRight: 16,
		paddingBottom: 24,
		paddingLeft: 16,
		flex: 1,
		flexDirection: 'column',
	},
	termDCCText: {
		color: '#020235',
		fontSize: 14,
		letterSpacing: 1.5,
		lineHeight: 24,
		marginBottom: 6,
	},
	termDCCTA: {
		fontSize: 24,
		fontWeight: '700',
		lineHeight: 22,
		marginRight: 44,
		marginTop: 80,
		textAlign: 'right',
		alignSelf: 'flex-end',
	},
	termDCCHeader: {
		fontSize: 32,
		fontWeight: '700',
		lineHeight: 38,
		width: 325,
	},
	termProContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'stretch',
	},
	termProButton: {
		alignSelf: 'flex-end',
		width: 73,
		paddingRight: 24,
		position: 'absolute',
		bottom: 30,
		right: 20,
	},
	termProClick: {
		backgroundColor: '#c4b301',
		elevation: 1.5,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100,
	},
	termProText: {
		color: '#fff',
		fontSize: 22,
		textAlign: 'center',
		textAlignVertical: 'center',
	},
	boldLabel: {
		fontWeight: '700',
	},
	sidebar: {
		alignItems: 'flex-start',
		backgroundColor: '#464646',
		justifyContent: 'flex-start',
		flex: 1,
		flexDirection: 'column',
	},
	closeButton: {
		margin: 8,
		position: 'absolute',
		top: 0,
		right: 8,
	},
	sbProfileName: {
		alignItems: 'flex-start',
		alignSelf: 'stretch',
		backgroundColor: '#3e355c',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		padding: 8,
		paddingTop: 16,
		paddingBottom: 16,
	},
	sbProfileText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: '100',
		marginLeft: 8,
	},
	sbFeaturedContent: {
		alignItems: 'flex-start',
		alignSelf: 'stretch',
		backgroundColor: '#3e355c',
		borderTopWidth: 1,
		borderTopColor: '#96afd1',
		borderBottomWidth: 1,
		borderBottomColor: '#444',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		padding: 8,
		paddingBottom: 16,
	},
	sbHeader: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '100',
		marginLeft: 8,
	},
	sbSubHeader: {
		color: '#fff',
		fontSize: 14,
		fontWeight: '100',
		marginLeft: 8,
	},
	menuItems: {
		flex: 6,
		flexDirection: 'column',
	}
	,
	menuItem: {
		alignSelf: 'stretch',
		padding: 16,
	},
	menuLabel: {
		color: '#fff',
		fontSize: 18,
		fontWeight: '100',
	},
	sbFooter: {
		alignSelf: 'stretch',
		alignItems: 'flex-end',
		borderTopWidth: 1,
		borderTopColor: '#96afd1',
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
		color: '#fff',
		position: 'absolute',
		fontSize: 12,
		opacity: 0.75,
	}
});

export default termStyles;
