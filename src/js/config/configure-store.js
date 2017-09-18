/* configure-store.js */

import {AsyncStorage} from 'react-native';
import {
	applyMiddleware,
	compose,
	createStore,
} from 'redux';
import createActionBuffer from 'redux-action-buffer';
import {
	autoRehydrate,
	persistStore,
} from 'redux-persist';
import {REHYDRATE} from 'redux-persist/constants';
import immutableTransform from 'redux-persist-transform-immutable';
import reduxThunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';

import reducer from '../reducers/reducer';

const persistConfig = {
	/* whitelist : [ ] , */
	blacklist: [
		"scene",
		"notification",
		"modal",
		"pictures",
	],
	storage: AsyncStorage,
	keyPrefix: "mplplayerStorage",
	transforms: [
		immutableTransform(),
	],
};

export default function configureStore(initialState) {
	const enhancer = compose(
		autoRehydrate(),
		applyMiddleware(
			reduxThunk,
			createActionBuffer(REHYDRATE),
		),
		devTools(),
	);
	const store = createStore(
		reducer,
		initialState,
		enhancer,
	);
	const persistor = persistStore(
		store,
		persistConfig,
	);
	return {
		store,
		persistor,
	};
}
