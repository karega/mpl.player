/* home-reducers.js */

/** External Module Dependencies **/
import Immutable from 'immutable';

/** Internal Module Dependencies **/
import { SET_HOME_POSTS, SET_TODAYS_WORD } from './../../../actions/actions';

const home = function (home: Immutable.OrderedMap<string, any>, action: Object): Immutable.OrderedMap<string, any> {

	switch (action.type) {
		case SET_HOME_POSTS :
			var posts = Immutable.fromJS( action.posts );
			var	_home = home;

			_home = home.set('posts', posts);

			return _home;

		case SET_TODAYS_WORD :
			var word = Immutable.fromJS( action.word );
			var	_home = home;

			_home = home.set('wotd', word);

			return _home;

		default :
			return home;
	}
};

export default home;
