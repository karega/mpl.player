/* term-reducers.js */

/** External Module Dependencies **/
import Immutable from 'immutable';

/** Internal Module Dependencies **/
import { SET_TERM } from './../../../actions/actions';

const term = function (term: Immutable.Map<string, any>, action: Object): Immutable.Map<string, any> {

	switch (action.type) {
		case SET_TERM :
			var	_term = term;

			var definitions = action.term.definitions;
			var	play;
			var	topics = action.term.breakdowns;
			var	pro;

			_term = _term.set('label', action.term.label);
			_term = _term.setIn(['tabs', 'definitions'], definitions);
			_term = _term.set(['tabs', 'play'], play);
			_term = _term.setIn(['tabs', 'social', 'topics'], topics);
			_term = _term.set(['tabs', 'pro'], pro);

			return _term;

		default :
			return term;
	}
};

export default term;
