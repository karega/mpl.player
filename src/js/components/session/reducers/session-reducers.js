/* session-reducers.js */

/** External Module Dependencies **/
import Immutable from 'immutable';
import {REHYDRATE} from 'redux-persist/constants';

/** Global Module Dependencies **/
import { REQUEST_LOGIN, REQUEST_LOGOUT, REGISTER_LOGIN, SET_REWARDS } from './../../../actions/actions';
import { middleware } from "../../../config/config";

const session = function (session: Immutable.Map<string, any>, action: Object): Immutable.Map<string, any> {
	switch (action.type) {
		case REQUEST_LOGIN:
			return session;

		case REGISTER_LOGIN:
			var _session = session;
			
			const _profile = action.profile;

			if (_profile.first_name && _profile.id) {
				console.log('logging', 'Creating session...');

				_session = _session.set('authorized', true);
				_session = _session.set('id', _profile.id);
				_session = _session.set('username', _profile.first_name);
				_session = _session.set('profile', _profile);
				_session = _session.set('legendary', _profile.legendary);

				middleware.database().ref('users/' + _profile.id).set(_profile);

				return _session;
			}
			else {
				console.log('error', 'Bad data.');

				return _session;
			}

		case REQUEST_LOGOUT:
			var _session = Immutable.fromJS({
				legendary: 100,
			});

			return _session;

		case SET_REWARDS:
			var _session = session;
			var	_profile = _session.getIn(['profile']);

			if (action.amount && _profile) {
				var	_amount = _session.getIn(['legendary']) ? _session.getIn(['legendary']) : 0;

				_amount = + _amount + action.amount;
				_session = _session.setIn(['legendary'], _amount);
				_profile['legendary'] = _amount;
				_session = _session.set('profile', _profile);

				middleware.database().ref('users/' + _profile.id).set(_profile);
			}
			else {
				console.log('error', 'Bad data.');
			}

			return _session;

		default:
			return session;
	}
};

export default session;
