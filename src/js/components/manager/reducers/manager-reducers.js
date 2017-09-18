/* manager-reducers.js */

import Immutable from 'immutable';

import { REFRESH_TERMS, SET_TERM } from './../../../actions/actions';

const manager = function (manager: Object, action: Object): Object {
	switch (action.type) {
		case REFRESH_TERMS:
			var _manager = manager;

			if (action.terms) {
				_manager = manager.set('terms', action.terms);
			}

			return _manager

		case SET_TERM :
			var	_manager = manager;
			var _recent = manager.getIn(['searches', 'recent']).toJS();

			function findRecent(recent) {
				return recent.id === action.term.id;
			}

			if (!_recent.find(findRecent)) {
				_recent.push({ label: action.term.label, id: action.term.id });
			}

			_manager = _manager.setIn(['searches', 'recent'], Immutable.fromJS(_recent));

			return _manager;

		default:
			return manager;
	}
};

export default manager;
