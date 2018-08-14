/* login.js */

/** External Module Dependencies **/
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';

/** Global Module Dependencies **/
import configureStore from './src/js/config/configure-store';

/** Internal Module Dependencies **/
import App from './src/js/components/app/elements/app';

const {store, persistor} = configureStore();

class mplplayer extends Component {
    render() {
        return (
            <Provider store={ store } persistor={ persistor }>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('mplplayer', () => mplplayer);
