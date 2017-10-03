/* builder-reducers.js */

/** External Module Dependencies **/
import Immutable from 'immutable';

/** Internal Module Dependencies **/
import { playerTemplate } from '../constants/constants'
import { SET_POSITION, SET_PRIMARY, SET_SECONDARY, SET_PRO_FLOW, SET_STEP, SET_BUILD } from './../../../actions/actions';

const builder = function (builder: Immutable.Map<string, any>, action: Object): Immutable.Map<string, any> {
	switch (action.type) {
		case SET_BUILD:
			var	_builder = builder;

			// _builder = _builder.set('current', { });
			_builder = _builder.set('step', 1);

			return _builder;

		case SET_SECONDARY:
			var	_builder = builder;
			var _player = _builder.get('current');

			_player.skills.secondary = action.secondary['Secondary Skill'];
			_player.archetype = {...action.secondary};
			_builder = _builder.set('current', _player);
			_builder = _builder.set('step', 4);

			return _builder;

		case SET_PRIMARY:
			var	_builder = builder;
			var _player = _builder.get('current');

			_player.skills.primary = action.primary;
			_builder = _builder.set('current', _player);
			_builder = _builder.set('step', 3);

			return _builder;

		case SET_POSITION:
			var	_builder = builder;
			var _playerTemplate = JSON.parse(JSON.stringify(playerTemplate));

			_playerTemplate.bio.position = action.position;
			_builder = _builder.set('current', _playerTemplate);
			_builder = _builder.set('step', 2);

			return _builder;

		case SET_PRO_FLOW:
			var	_builder = builder;

			_builder = _builder.set('status', action.status);
			_builder = _builder.set('current', { });
			_builder = _builder.set('step', 1);

			return _builder;

		case SET_STEP:
			var	_builder = builder;

			_builder = _builder.set('step', action.step);

			return _builder;

		default :
			return builder;
	}
};

export default builder;
