/* @flow */

import {Image, StyleSheet} from 'react-native';

const admobStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#000',
    },
    connectContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#3B5998',
        height: 66,
    },
	continueContainer: {
    	height: 66,
	},
    admobSplashBackground: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        alignSelf: 'center',
        padding: 20,
    },
    admobLogo: {
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignSelf: 'center',
    },
	mplplayerLogo: {
		alignItems: 'flex-start',
		resizeMode: Image.resizeMode.contain,
		justifyContent: 'flex-start',
		alignSelf: 'center',
		height: 280,
	},
	logoText: {
        color: '#ffffff',
        fontSize: 38,
        fontWeight: '100',
        fontFamily: 'Roboto Light',
        alignSelf: 'center',
        marginTop: -5,
    },
	admobIcon: {
		paddingLeft: 8,
		paddingRight: 16,
	},
    facebookAdmobButton: {
        height: 66,
    },
    facebookRegisterButton: {
    	position: 'relative',
    },
    text: {
        fontSize: 18,
        color: '#FFFFFF'
    },
});

export default admobStyles;
