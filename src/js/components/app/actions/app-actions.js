/* app-actions.js */

/** Internal Module Dependencies **/
import { RECEIVE_STATE } from './../../../actions/actions';

export function saveState( state : Object ) : Object { }

export function receiveSaveStatus(status: Object): Object {
	return {
		status,
		type: RECEIVE_SAVE_STATUS,
	};
}
