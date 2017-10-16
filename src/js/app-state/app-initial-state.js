/* app-initial-state.js */

/** External Module Dependencies **/
import Immutable from 'immutable';

const AppInitialState = {
	builder: Immutable.fromJS({
		builds: [],
		current: { },
		step: 1,
	}),
	compare: Immutable.fromJS({
		builds: [],
	}),
	modal: Immutable.fromJS({
		modalType: '',
		modalProps: { },
	}),
	scene: null,
	session: Immutable.fromJS({
		legendary: 0,
	}),
	summary: Immutable.fromJS({
		builds: [],
		current: { },
	}),
};

export default AppInitialState;
