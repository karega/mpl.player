/* notification-reducers.js */

/** External Module Dependencies **/
import Immutable from 'immutable';

/** Internal Module Dependencies **/
import { ADD_NOTIFICATION, 	REMOVE_NOTIFICATION } from './../../../actions/actions';

const notification = function (notifications: Immutable.List<string>, action: Object): Immutable.List<string> {
	switch (action.type) {
		case ADD_NOTIFICATION :
			return action.id;
		case REMOVE_NOTIFICATION :
			return null;
		default :
			return notifications;
	}
};

export default notification;
