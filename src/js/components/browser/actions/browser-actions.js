/* browser-actions.js */

/** Internal Module Dependencies **/
import { DROP_BUILD } from './../../../actions/actions';

export function browserDeleteBuild(index): Object {
	return function (dispatch) {
		dispatch(browserDropBuild(index));
	};
}

export function browserDropBuild(index): Object {
	return {
		type: DROP_BUILD,
		index,
	};
}