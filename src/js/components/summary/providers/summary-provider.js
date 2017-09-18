/* summary-provider.js */

/** External Module Dependencies **/
import {connect} from 'react-redux';
import {pathOr} from 'ramda';

/** Internal Module Dependencies **/
import Summary from './../elements/summary';

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
