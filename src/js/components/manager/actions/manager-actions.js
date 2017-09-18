/* manager-actions.js */

/** Global Module Dependencies **/
import { REFRESH_TERMS } from './../../../actions/actions';

export function dockNetworks(networkConfiguration) {

}

export function checkRefreshTerms(): Object {
	return function (dispatch) {
		fetch('http://162.209.78.32:3000/terms', {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then((mplplayerTerms) => {
				return mplplayerTerms.json();
			})
			.then((mplplayerTerms) => {
				if (mplplayerTerms && mplplayerTerms.length > 0) {
					dispatch(refreshTerms(mplplayerTerms));
				}
			})
			.catch((error) => {
				console.log('error', error);
			});
	};
}

export function refreshTerms(terms): Object {
	return {
		type: REFRESH_TERMS,
		terms,
	};
}