/* summary-provider.js */

/** External Module Dependencies **/
import {connect} from 'react-redux';
import {pathOr} from 'ramda';

/** Global Module Dependencies **/
import maxed from './../../../app-state/builds-maxed';

/** Internal Module Dependencies **/
import Summary from './../elements/summary';

const mapStateToProps = (state) => {
	let builds = state.summary.get('builds');
	let current = state.summary.get('current') ? state.summary.get('current') : builds.last();

	let badges = maxed.filter((build, index) => {
		return (
			build['Position'].toLowerCase() === pathOr('', ['bio', 'position'])(current).toLowerCase() &&
			build['Primary Skill'].toLowerCase() === pathOr('', ['skills', 'primary'])(current).toLowerCase() &&
			build['Secondary Skill'].toLowerCase() === pathOr('', ['skills', 'secondary'])(current).toLowerCase()
		)
	});

	return {
		builds: builds,
		current: current,
		badges: badges,
		attributes: pathOr(null, ['attributes'])(current),

		profile: state.session.get('profile'),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		startSummary: () => {
			dispatch(startSummary());
		},
	};
};

const SummaryProvider = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Summary);

export default SummaryProvider;
