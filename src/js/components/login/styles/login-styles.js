/* @flow */

import {Image, StyleSheet} from 'react-native';

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#000',
        width: null,
        height: null,
    },
    connectContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#3B5998',
        height: 66,
        paddingRight: 16,
    },
	continueContainer: {
    	height: 70,
    	paddingLeft: 16,
	},
    loginSplashBackground: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        alignSelf: 'center',
        padding: 20,
    },
    loginLogo: {
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
    pictureContainer: {
        alignItems: 'center',
        height: 170,
        justifyContent: 'center'
    },
    picture: {
        color: '#000000',
        opacity: 0.69
    },
    loginForm: {
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginRight: 20
    },
    formFields: {
        flex: 1,
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    formCaption: {
        paddingLeft: 4
    },
    text: {
        fontSize: 18,
        color: '#FFFFFF'
    },
    textInput: {
        height: 40
    },
    notificationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 4,
        paddingRight: 4
    },
    notificationText: {
        fontSize: 10,
        color: '#ff0000'
    },
    warningIcon: {
        color: '#ff0000'
    },
});

export default loginStyles;
