/* @flow */

import {Image, StyleSheet} from 'react-native';

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
    },
    connectContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#3b5998',
        height: 66,
    },
	continueContainer: {
    	height: 66,
	},
    loginSplashBackground: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        alignSelf: 'center',
        padding: 20,
		paddingTop: 0,
    },
    loginLogo: {
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignSelf: 'center',
    },
	mplPlayerLogo: {
		alignItems: 'flex-start',
		resizeMode: Image.resizeMode.contain,
		justifyContent: 'flex-start',
		alignSelf: 'center',
		width: 400,
		height: 400,
	},
	logoText: {
        color: '#ffffff',
        fontSize: 38,
        fontWeight: '100',
        fontFamily: 'Roboto Light',
        alignSelf: 'center',
        marginTop: -5,
    },
	loginIcon: {
		paddingLeft: 8,
		paddingRight: 16,
	},
    facebookLoginButton: {
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

export default loginStyles;
