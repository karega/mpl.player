/* builder-reducers.js */

/** External Module Dependencies **/
import Immutable from 'immutable';

/** Internal Module Dependencies **/
import { playerTemplate } from '../constants/constants'
import { SET_POSITION, SET_PRIMARY, SET_SECONDARY, SET_PRO_FLOW } from './../../../actions/actions';

const builder = function (builder: Immutable.Map<string, any>, action: Object): Immutable.Map<string, any> {
	switch (action.type) {
		case SET_SECONDARY:
			var	_builder = builder;
			var _player = _builder.getIn(['builds', 'current']);

			_player.skills.secondary = action.secondary['Secondary Skill'];
			_player.archetype = action.secondary;
			_builder = _builder.setIn(['builds', 'current'], _player);
			_builder = _builder.setIn(['step'], 4);

			return _builder;
		case SET_PRIMARY:
			var	_builder = builder;
			var _player = _builder.getIn(['builds', 'current']);

			_player.skills.primary = action.primary;
			_builder = _builder.setIn(['builds', 'current'], _player);
			_builder = _builder.setIn(['step'], 3);

			return _builder;
		case SET_POSITION:
			var	_builder = builder;
			var _playerTemplate = {...playerTemplate}

			_playerTemplate.bio.position = action.position;
			_builder = _builder.setIn(['builds', 'current'], _playerTemplate);
			_builder = _builder.setIn(['step'], 2);

			return _builder;

		case SET_PRO_FLOW :
			var	_builder = builder;

			_builder = _builder.set('status', action.status);
			_builder = _builder.setIn(['builds', 'current'], { });
			_builder = _builder.setIn(['step'], 1);

			return _builder;

		default :
			return builder;
	}
};

export default builder;
