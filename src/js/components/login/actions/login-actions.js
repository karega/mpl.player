/* login-actions.js */

/** External Module Dependencies **/
import * as firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

/** Global Module Dependencies **/
import config from './../../../config/config';
import { ERROR_CODE_REGISTERED } from './../../../config/constants';

/** Internal Module Dependencies **/
import { REGISTER_LOGIN, REQUEST_LOGIN, REQUEST_LOGOUT } from './../../../actions/actions';

export function login(): Object {
	return function (dispatch) {
		dispatch(requestLogin());
	};
}

export function register(profile: Object): Object {
	return function (dispatch) {
		console.log('debug', 'Logged in! Attempting to register');
		console.log('info', 'Calling with params. ', JSON.stringify(profile));

		const credential = firebase.auth.FacebookAuthProvider.credential(profile.credentials.token);

		firebase.auth()
		.signInWithCredential(credential)
		.then((res) => {
			dispatch(registerLogin(profile));
			console.log('info', 'Account accepted');
		})
		.catch((error) => {
			console.log('error', error)
		});
	};
}

export function logout(): Object {
	return function (dispatch) {
		dispatch(requestLogout());
	};
}

export function registerLogin(fb: Object): Object {
	Actions.summary();

	return {
		fb,
		type: REGISTER_LOGIN
	}
}

export function requestLogin(): Object {
	Actions.summary();

	return {
		type: REQUEST_LOGIN
	};
}

export function requestLogout(): Object {
	return {
		type: REQUEST_LOGOUT
	};
}
