/* compare-provider.js */

/** External Module Dependencies **/
import {connect} from 'react-redux';
import {pathOr} from 'ramda';

/** Global Module Dependencies **/
import maxed from './../../../app-state/builds-maxed';

/** Internal Module Dependencies **/
import Compare from './../elements/compare';
import {
	compareAddBuild,
	compareRemoveBuild,
} from './../actions/compare-actions';

const mapStateToProps = (state) => {
	let builds = state.compare.get('builds');
	let current = state.compare.get('current');

	let badges = maxed.filter((build, index) => {
		return (
			build['Position'].toLowerCase() === pathOr('', ['bio', 'position'])(current).toLowerCase() &&
			build['Primary Skill'].toLowerCase() === pathOr('', ['skills', 'primary'])(current).toLowerCase() &&
			build['Secondary Skill'].toLowerCase() === pathOr('', ['skills', 'secondary'])(current).toLowerCase()
		)
	})

	return {
		builds: builds,
		current: current,
		badges: badges,

		profile: state.session.get('profile'),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		compareAddBuild: (build) => {
			dispatch(compareAddBuild(build));
		},
		compareRemoveBuild: (index) => {
			dispatch(compareRemoveBuild(index));
		},
	};
};

const CompareProvider = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Compare);

export default CompareProvider;
