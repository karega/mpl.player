/* compare-actions.js */

/** External Module Dependencies **/
import {Actions} from 'react-native-router-flux';

/** Internal Module Dependencies **/
import { ADD_BUILD } from './../../../actions/actions';

export function compareAddBuild(build): Object {
	return function (dispatch) {
		Actions.compare();

		dispatch(comparePushBuild(build));
	};
}

export function comparePushBuild(build): Object {
	return {
		type: ADD_BUILD,
		build,
	};
}
