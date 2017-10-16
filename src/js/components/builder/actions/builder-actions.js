/* builder-actions.js */

/** External Module Dependencies **/
import {Actions} from 'react-native-router-flux';
import {pathOr} from 'ramda';

/** Global Module Dependencies **/
import attributes from './../../../app-state/attributes';

/** Internal Module Dependencies **/
import { SET_POSITION, SET_PRIMARY, SET_SECONDARY, SET_PRO_FLOW, SET_STEP, SET_BUILD } from './../../../actions/actions';

export function startBuilder(index): Object {
	return function (dispatch) {
		Actions.builder();

		dispatch(setBuilderStatus('registration_started'));
	};
}

export function choosePage(page): Object {
	return function (dispatch) {
		dispatch(setStep(page))
	}
}

export function choosePosition(position): Object {
	return function (dispatch) {
		dispatch(setPosition(position))
	}
}

export function choosePrimary(primary): Object {
	return function (dispatch) {
		dispatch(setPrimary(primary))
	}
}

export function chooseSecondary(secondary): Object {
	return function (dispatch) {
		dispatch(setSecondary(secondary))
	}
}

export function saveCurrentBuild(): Object {
	Actions.summary();
	// Actions.admob();

	return function (dispatch, getState) {
		var	_build = (getState()).builder.get('current');

		const attributes = (state) => {
			let _attributes = [];

			if (pathOr(false, ['skills', 'primary'])(_build)) {
				pathOr([], [_build.skills.primary])(attributes).map((archetype, index) => {
					if (archetype['Secondary'] === _build.skills.secondary) {
						_attributes = archetype;
					}
				})
			}

			return _attributes ? _attributes : [];
		}
		
		_build.attributes = attributes(getState());

		dispatch(setBuild(_build))
	}
}

export function setBuilderStatus(status): Object {
	return {
		type: SET_PRO_FLOW,
		status,
	};
}

export function setStep(step): Object {
	return {
		type: SET_STEP,
		step,
	};
}

export function setPosition(position): Object {
	return {
		type: SET_POSITION,
		position,
	}
}

export function setPrimary(primary): Object {
	return {
		type: SET_PRIMARY,
		primary,
	}
}

export function setSecondary(secondary): Object {
	return {
		type: SET_SECONDARY,
		secondary,
	}
}

export function setBuild(build): Object {
	return {
		type: SET_BUILD,
		build,
	}
}