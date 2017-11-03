/* admob-reducers.js */

/** External Module Dependencies **/
import Immutable from 'immutable';

/** Internal Module Dependencies **/
import { UPDATE_AD_UNITS } from './../../../actions/actions';

const admob = function (admob: Immutable.Map<string, any>, action: Object): Immutable.Map<string, any> {
	switch (action.type) {
		case UPDATE_AD_UNITS:
			var	_admob = admob;

			const _provider = _admob.get('current') === 'play24' ? 'lab2k' : 'play24';

			_admob = _admob.set('current', _provider);

			return _admob;

		default :
			return admob;
	}
};

export default admob;
