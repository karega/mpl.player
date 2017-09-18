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
	scene: null,
	session: Immutable.fromJS({ }),
	verify: Immutable.fromJS({ }),
	home: Immutable.fromJS({
		posts: [ ],
		wotd: { },
	}),
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
	manager: Immutable.fromJS({
		searches: {
			recent: [{
				id: 'def0',
				label: '1%/10 net 30'
			}]
		},
		terms: [],
	}),
	summary: Immutable.fromJS({
		builds: [],
		current: null,
	}),
	builder: Immutable.fromJS({
		builds: { },
		step: 1,
	}),
	compare: Immutable.fromJS({ }),
	notification: null,
	modal: Immutable.fromJS({
		modalType: '',
		modalProps: { },
	}),
	term: Immutable.fromJS({
		label: '',
		tabs: {
			definitions: [],
			play: { },
			social: {
				topics: [],
			},
			pro: { },
		}
	}),
};

export default AppInitialState;
