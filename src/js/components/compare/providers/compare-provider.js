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
} from './../actions/compare-actions';

const mapStateToProps = (state) => {
	let builds = state.compare.get('builds');
	let current = state.compare.get('current') ? state.compare.get('current') : builds.last();
	let archetype = maxed.filter((build, index) => {
		return (
			build['Position'].toLowerCase() === current.bio.position.toLowerCase() &&
			build['Primary Skill'].toLowerCase() === current.skills.primary.toLowerCase() &&
			build['Secondary Skill'].toLowerCase() === current.skills.secondary.toLowerCase()
		)
	})

	return {
		builds: builds,
		current: current,
		archetype: archetype,

		profile: state.session.get('profile'),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		compareAddBuild: (build) => {
			dispatch(compareAddBuild(build));
		},
	};
};

const CompareProvider = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Compare);

export default CompareProvider;
