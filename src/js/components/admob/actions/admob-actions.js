/* admob-actions.js */

/** Global Module Dependencies **/
import { SET_REWARDS, UPDATE_AD_UNITS } from './../../../actions/actions';

export function admob(): Object {
	return function (dispatch) {
		dispatch(requestAdmob());
	};
}

export function addRewards(amount): Object {
	return function (dispatch) {
		dispatch(updateAdUnits())
		dispatch(setRewards(amount));
	}
}

export function requestAdmob(): Object {
	return {
		type: REQUEST_ADMOB
	};
}

export function setRewards(amount): Object {
	return {
		type: SET_REWARDS,
		amount,
	};
}

export function updateAdUnits(): Object {
	return {
		type: UPDATE_AD_UNITS,
	};
}