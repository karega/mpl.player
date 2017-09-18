/* compare-reducers.js */

/** External Module Dependencies **/
import Immutable from 'immutable';

/** Internal Module Dependencies **/
import { SET_SECONDARY, SET_PRO_FLOW, SET_BUILD, SET_CURRENT } from './../../../actions/actions';

const compare = function (compare: Immutable.Map<string, any>, action: Object): Immutable.Map<string, any> {
	switch (action.type) {
		case SET_BUILD:
			var	_compare = compare;
			var _builds = _compare.get('builds');

			if (_builds) {
				_builds = _builds.push(action.build);
			}
			else {
				_builds = Immutable.fromJS([action.build]);
			}

			_compare = _compare.set('builds', _builds);
			_compare = _compare.set('current', _builds.last());

			return _compare;

		case SET_CURRENT:
			var	_compare = compare;

			_compare = _compare.set('current', action.build);

			return _compare;

		case SET_PRO_FLOW :
			var	_compare = compare;

			_compare = _compare.set('status', action.status);

			return _compare;

		default :
			return compare;
	}
};

export default compare;
