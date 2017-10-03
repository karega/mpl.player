/* admob-actions.js */

/** External Module Dependencies **/
import {Actions} from 'react-native-router-flux';

export function admob(): Object {
	return function (dispatch) {
		dispatch(requestAdmob());
	};
}


export function addRewards(amount): Object {
	return function (dispatch, getState) {
		dispatch(setBuild(_build))
	}
}

export function requestAdmob(): Object {
	return {
		type: 'REQUEST_ADMOB'
	};
}

export function setRewards(amount): Object {
	return {
		type: 'SET_REWARDS',
		amount,
	};
}