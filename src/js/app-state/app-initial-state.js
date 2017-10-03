/* app-initial-state.js */

/** External Module Dependencies **/
import Immutable from 'immutable';
import pg from './pg';
import sg from './sg';
import sf from './sf';
import pf from './pf';
import c from './c';
import attributes from './attributes';

const AppInitialState = {
	archetypes: {
		pg,
		sg,
		sf,
		pf,
		c,
	},
	attributes: {
		...attributes
	},
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
