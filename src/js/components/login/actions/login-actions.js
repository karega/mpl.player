/* login-actions.js */

/** External Module Dependencies **/
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
		console.log('debug', 'Logged in! Attempting to register @ ' + config.getRegistrationURL());
		console.log('info', 'Calling with params. ', JSON.stringify(profile));

		fetch(config.getRegistrationURL(), {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(profile)
		})
		.then((registrationResponse) => {
			return registrationResponse.json();
		})
		.then((registrationResponse) => {
			console.log('info', registrationResponse);

			if (registrationResponse && registrationResponse.success) {
				console.log('success', registrationResponse);

				dispatch(registerLogin(profile));
			}
			else if (registrationResponse && !registrationResponse.success) {
				console.log('failed', registrationResponse.status);

				switch (registrationResponse.code) {
					case ERROR_CODE_REGISTERED:
						dispatch(registerLogin(profile));

						break;
					default:
						break;
				}
			}
		})
		.catch((error) => {
			console.log('error exception', error);
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
