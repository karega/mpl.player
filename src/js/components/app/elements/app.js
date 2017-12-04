/* app.js */

/** External Module Dependencies **/
import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Router } from 'react-native-router-flux';
import { connect } from 'react-redux';

/** Internal Module Dependencies **/
import { saveState } from './../actions/app-actions';
import ModalProvider from './../../modal/providers/modal-provider';
import AppStyles from './../styles/app-styles';

/** Sibling Component Dependencies **/
import scenes from './../../route/elements/routes';

// Create connected Router if you want dispatch() method.
const ConnectedRouter = connect()(Router);

class App extends React.Component {
	saveState: () => void;
	unsubscribe: () => void;

	constructor(props): void {
		super(props);

		this.saveState = this.saveState.bind(this);
		this.testStates = this.testStates.bind(this);
		this.observeStore = this.observeStore.bind(this);
	}

	componentDidMount(): void {
		const {store} = this.context;

		this.state = store.getState();
		this.unsubscribe = this.observeStore(store, this.saveState);
	}

	componentWillUnmount(): void {
		this.unsubscribe();
	}

	testStates(cState, nState) {
		// check what properties changed in state
		// and decide if a save action is needed
		if (( cState !== undefined ) && ( nState !== undefined )) {
			if (( cState.session !== nState.session )) {
				return true;
			}
		}

		return false;
	}

	observeStore(store, onChange) {
		let currentState;

		var handleChange = () => {
			let nextState = store.getState();

			if (this.testStates(currentState, nextState)) {
				currentState = nextState;
				onChange(currentState);
			}
			if (currentState === undefined) {
				currentState = nextState;
			}
		}

		let unsubscribe = store.subscribe(handleChange);
		handleChange();

		return unsubscribe;
	}

	saveState(state): void {
		// call saveState action
		saveState(state);
	}

	render(): React.Element<any> {
		return (
			<View style={ AppStyles.container }>
				<ModalProvider />
				<ConnectedRouter scenes={ scenes } />
			</View>
		);
	}
}

App.contextTypes = {
	store: React.PropTypes.object
};

export default App;
