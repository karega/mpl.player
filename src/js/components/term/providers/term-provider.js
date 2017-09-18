/* term-provider.js */

/** External Module Dependencies **/
import {connect} from 'react-redux';

/** Internal Module Dependencies **/
import { requestTermPosts, requestTodaysWord } from './../actions/term-actions';
import Term from './../elements/term';

/** Sibling Component Dependencies **/

const mapStateToProps = (state) => {
	return {
		term: state.term,
		profile: state.session.get('profile'),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		startProflow: () => { },
	};
};

const TermProvider = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Term);

export default TermProvider;
