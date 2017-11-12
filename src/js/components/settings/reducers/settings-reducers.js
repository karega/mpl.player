/* settings-reducers.js */

/** External Module Dependencies **/
import Immutable from 'immutable';

/** Global Module Dependencies **/
import { REQUEST_LOGOUT, REGISTER_LOGIN } from './../../../actions/actions';

const settings = function (settings: Immutable.Map<string, any>, action: Object): Immutable.Map<string, any> {
	switch (action.type) {
		case REGISTER_LOGIN:
			var _settings = settings;

			if (action.profile.first_name && action.profile.id) {
				_settings = _settings.set('synching', true);
			}

			return _settings;

		case REQUEST_LOGOUT:
			var _settings = settings;

			_settings = _settings.set('synching', false);

			return _settings;

		default:
			return settings;
	}
};

export default settings;
