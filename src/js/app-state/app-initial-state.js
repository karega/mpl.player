/* app-initial-state.js */

/** External Module Dependencies **/
import Immutable from 'immutable';

const AppInitialState = {
	admob: Immutable.fromJS({
		current: 'play24',
		play24: {
			id: 'ca-app-pub-0366816116578381~9845479014',
			unit: {
				builder: 'ca-app-pub-0366816116578381/4816513612'
			},
		},
		labs2k: {
			id: 'ca-app-pub-8650818682461862~4784435046',
			unit: {
				builder: 'ca-app-pub-8650818682461862/9435439573'
			},
		},
	}),
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
		legendary: 100,
	}),
	settings: Immutable.fromJS({
		synching: false,
	}),
	summary: Immutable.fromJS({
		builds: [],
		current: { },
	}),
};

export default AppInitialState;
