/* session-reducers.js */

/** External Module Dependencies **/
import Immutable from 'immutable';
import {REHYDRATE} from 'redux-persist/constants';

/** Internal Module Dependencies **/
import { REQUEST_LOGIN, REQUEST_LOGOUT, REGISTER_LOGIN, SET_REWARDS } from './../../../actions/actions';

const session = function (session: Immutable.Map<string, any>, action: Object): Immutable.Map<string, any> {
	switch (action.type) {
		case REQUEST_LOGIN:
			return session;
		case REGISTER_LOGIN:
			var _session = session;

			if (action.fb.profile.first_name && action.fb.profile.id) {
				console.log('error', 'Creating session');

				_session = _session.set('authorized', true);
				_session = _session.set('id', action.fb.profile.id);
				_session = _session.set('username', action.fb.profile.first_name);
				_session = _session.set('profile', action.fb.profile);
			}
			else {
				console.log('error', 'Bad data.');
			}

			return _session
		case REQUEST_LOGOUT:
			var _session = Immutable.fromJS({ });

			return _session;

		case SET_REWARDS:
			var _session = session;

			if (action.amount) {
				_amount = _session.get('legendary');
				_session = _session.set('legendary', action.amount + _amount);
			}
			else {
				console.log('error', 'Bad data.');
			}

			return _session
		default:
			return session;
	}
};

export default session;
