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
			var	_current = null;

			_builds.toJS().map((_build, index) => {
				if (JSON.stringify(_build) === JSON.stringify(action.build)) {
					_current = action.build;
				}
			})

			if (_builds && !(_current)) {
				_builds = _builds.push(action.build);
			}
			else if (!(_builds) && !(_current)) {
				_builds = Immutable.fromJS([action.build]);
			}

			_current = (_current == null) ? _builds.last() : _current;

			_summary = _summary.set('builds', _builds);
			_summary = _summary.set('current', _current);

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
