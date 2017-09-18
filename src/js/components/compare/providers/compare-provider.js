/* compare-provider.js */

/** External Module Dependencies **/
import {connect} from 'react-redux';
import {pathOr} from 'ramda';

/** Internal Module Dependencies **/
import Compare from './../elements/compare';

const mapStateToProps = (state) => {
	let builds = state.compare.get('builds');
	let current = state.compare.get('current') ? state.compare.get('current') : builds.last();

	return {
		builds: builds,
		current: current,
		attributes: pathOr(null, ['attributes'])(current),

		profile: state.session.get('profile'),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		startCompare: () => {
			dispatch(startCompare());
		},
	};
};

const CompareProvider = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Compare);

export default CompareProvider;
