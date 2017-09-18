/* compare-actions.js */

/** External Module Dependencies **/
import {Actions} from 'react-native-router-flux';

/** Global Module Dependencies **/
import config from './../../../config/config';
import { ERROR_CODE_REGISTERED } from './../../../config/constants';

/** Internal Module Dependencies **/
import { SET_PRO_FLOW, SET_CURRENT } from './../../../actions/actions';

export function startCompare(index): Object {
	return function (dispatch) {
		Actions.compare();

		dispatch(setCompareStatus('registration_started'));
	};
}

export function chooseBuild(build): Object {
	return function (dispatch) {
		Actions.compare();

		dispatch(setCurrentBuild(build));
	};
}

export function setCompareStatus(status): Object {
	return {
		type: SET_PRO_FLOW,
		status,
	};
}

export function setCurrentBuild(build): Object {
	return {
		type: SET_CURRENT,
		build,
	};
}
