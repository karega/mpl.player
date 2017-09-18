/* notification-actions.js */

/** Internal Module Dependencies **/
import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from './../../../actions/actions';

export function addNotification(id: string): Object {
	return {
		id,
		type: ADD_NOTIFICATION
	};
}

export function removeNotification(): Object {
	return {
		type: REMOVE_NOTIFICATION
	};
}
