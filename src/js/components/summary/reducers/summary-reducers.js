/* summary-reducers.js */

/** External Module Dependencies **/
import Immutable from 'immutable';

/** Internal Module Dependencies **/
import { SET_SECONDARY, SET_PRO_FLOW, SET_BUILD, SET_CURRENT } from './../../../actions/actions';

const summary = function (summary: Immutable.Map<string, any>, action: Object): Immutable.Map<string, any> {
	switch (action.type) {
		case SET_BUILD:
			var	_summary = summary;
			var _builds = _summary.get('builds');

			if (_builds) {
				_builds = _builds.push(action.build);
			}
			else {
				_builds = Immutable.fromJS([action.build]);
			}

			_summary = _summary.set('builds', _builds);
			_summary = _summary.set('current', _builds.last());

			return _summary;

		case SET_CURRENT:
			var	_summary = summary;

			_summary = _summary.set('current', action.build);

			return _summary;

		case SET_PRO_FLOW :
			var	_summary = summary;

			_summary = _summary.set('status', action.status);

			return _summary;

		default :
			return summary;
	}
};

export default summary;
