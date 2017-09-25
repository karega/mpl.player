/* browser-provider.js */

/** External Module Dependencies **/
import {connect} from 'react-redux';
import {pathOr} from 'ramda';

/** Internal Module Dependencies **/
import Browser from './../elements/browser';
import {
	chooseBuild,
} from './../../summary/actions/summary-actions'
import {
	compareAddBuild,
} from './../../compare/actions/compare-actions'

const mapStateToProps = (state) => {
	let builds = state.summary.get('builds');
	let current = state.summary.get('current') ? state.summary.get('current') : builds.last();

	return {
		builds: builds,
		current: current,
		attributes: pathOr(null, ['attributes'])(current),

		profile: state.session.get('profile'),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		chooseBuild: (build) => {
			dispatch(chooseBuild(build));
		},
		compareAddBuild: (build) => {
			dispatch(compareAddBuild(build));
		},
	};
};

const BrowserProvider = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Browser);

export default BrowserProvider;
