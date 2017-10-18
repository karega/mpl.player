/* compare-reducers.js */

/** External Module Dependencies **/
import Immutable from 'immutable';

/** Internal Module Dependencies **/
import { ADD_BUILD, REMOVE_BUILD, SET_CURRENT } from './../../../actions/actions';

const compare = function (compare: Immutable.Map<string, any>, action: Object): Immutable.Map<string, any> {
	switch (action.type) {
		case ADD_BUILD:
			var	_compare = compare;
			var _builds = _compare.get('builds');

			if (_builds.size <= 4) {
				if (_builds) {
					_builds = _builds.push(action.build);
				}
				else {
					_builds = Immutable.fromJS([action.build]);
				}

				_compare = _compare.set('builds', _builds);
				_compare = _compare.set('current', _builds.last());
			}

			return _compare;

		case REMOVE_BUILD:
			var	_compare = compare;
			var _builds = _compare.get('builds');

			_builds = _builds.delete(action.index);
			console.log(_builds,_builds)
			_compare = _compare.set('builds', _builds);
			_compare = _compare.set('current', _builds.last());

			return _compare;

		default :
			return compare;
	}
};

export default compare;
