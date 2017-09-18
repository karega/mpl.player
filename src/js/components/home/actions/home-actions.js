/* home-actions.js */

/** External Module Dependencies **/
import {Actions} from 'react-native-router-flux';

/** Internal Module Dependencies **/

/** Global Module Dependencies **/
import config from './../../../config/config';
import { ERROR_CODE_REGISTERED } from './../../../config/constants';

/** Internal Module Dependencies **/
import { SET_HOME_POSTS, SET_TERM, SET_TODAYS_WORD } from './../../../actions/actions';

export function requestTerm(termId): Object {
	return function (dispatch) {
		fetch('http://162.209.78.32:3000/definitions/' + termId, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		})
		.then((termResponse) => {
			return termResponse.json();
		})
		.then((termResponse) => {
			if (termResponse && termResponse.path) {
				dispatch(setTerm(termResponse));
			}
		})
		.catch((error) => {
			console.log('error', error);
		});
	};
}

export function requestHomePosts(): Object {
	return function (dispatch) {
		fetch('https://api.curator.io/v1/feeds/9a096877-563e-489d-bf66-63888ec77daa/posts?api_key=8ba5842b-1cbf-422d-957b-ad63782375a3&limit=5', {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then((homePostsResponse) => {
				return homePostsResponse.json();
			})
			.then((homePostsResponse) => {
				// console.log('info', homePostsResponse.sources);
				// console.log('homePostsResponse.success', homePostsResponse.success);

				if (homePostsResponse && homePostsResponse.success) {
					dispatch(setHomePosts(homePostsResponse));
				}
			})
			.catch((error) => {
				console.log('error', error);
			});
	};
}

export function requestTodaysWord(index): Object {
	return function (dispatch) {
		fetch('http://162.209.78.32:3000/definitions/def' + index, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then((todaysWordResponse) => {
				return todaysWordResponse.json();
			})
			.then((todaysWordResponse) => {
				// console.log('info', todaysWordResponse.path);
				// console.log('todaysWordResponse.path', todaysWordResponse.path);

				if (todaysWordResponse && todaysWordResponse.path) {
					dispatch(setTodaysWord(todaysWordResponse));
				}
			})
			.catch((error) => {
				console.log('error', error);
			});
	};
}

export function setTerm(response): Object {
	Actions.term()

	return {
		type: SET_TERM,
		term: response,
	};
}

export function setHomePosts(response): Object {
	return {
		type: SET_HOME_POSTS,
		posts: response.posts,
	};
}

export function setTodaysWord(response): Object {
	return {
		type: SET_TODAYS_WORD,
		word: response,
	};
}
