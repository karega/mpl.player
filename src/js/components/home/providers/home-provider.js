/* home-provider.js */

/** External Module Dependencies **/
import {connect} from 'react-redux';

/** Internal Module Dependencies **/
import { requestHomePosts, requestTodaysWord, requestTerm } from './../actions/home-actions';
import Home from './../elements/home';

/** Sibling Component Dependencies **/
import { openModal } from './../../modal/actions/modal-actions';
import { checkRefreshTerms } from './../../manager/actions/manager-actions';

const mapStateToProps = (state) => {
	return {
		terms: state.manager.get('terms'),
		searches: state.manager.get('searches'),
		posts: state.home.get('posts'),
		wotd: state.home.get('wotd'),
		profile: state.session.get('profile'),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		requestHomePosts: () => {
			dispatch(requestHomePosts());
		},
		requestTodaysWord: (index) => {
			dispatch(requestTodaysWord(index));
		},
		requestTerm: (termId) => {
			dispatch(requestTerm(termId));
		},
		openModal: (type, props) => {
			dispatch(openModal(type, props));
		},
		checkRefreshTerms: () => {
			dispatch(checkRefreshTerms());
		}
	};
};

const HomeProvider = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Home);

export default HomeProvider;
