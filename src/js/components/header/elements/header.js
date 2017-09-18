/* header.js */

import Immutable from 'immutable';
import React , { PropTypes } from 'react';
import {
    View ,
    Text ,
} from 'react-native';

import Button from './../../components/shared/button';
import config from './../../config/config';
import {
    CHECKLIST_KEY ,
    DRIVER_KEY ,
    SESSION_KEY ,
    SF_LOGOUT_ENABLED ,
    ROUTE_KEY ,
} from './../../config/constants.js';
import hStyles from './../../_delete_a/header-_delete_a';

type HeaderPropTypes = {
    onLogoutPress : () => void;
};

class Header extends React.Component<any , HeaderPropTypes , void> {
    props : HeaderPropTypes;

    constructor( props : HeaderPropTypes ): void {
        super( props );
    }

    getLogoutButton() : void {
        if ( SF_LOGOUT_ENABLED ) {
            return (
                <View>
                    <Button
                        theme="red"
                        raised={ true }
                        onPress={ this.props.onLogoutPress }
                        text="Logout"
                        type="filled" />
                </View>
            );
        }
    }

    render() : ? React.Element {
        return (
            <View style={ hStyles.header }>
                <View style={ hStyles.logo }>
                    <Text style={ hStyles.headerText }>COMPANY COMPANY</Text>
                </View>
                <View style={ hStyles.app }>
                    <Text style={ hStyles.headerText }>APP APP</Text>
                </View>
                { this.getLogoutButton() }
            </View>
        );
    }
}

Header.propTypes = {
    onLogoutPress : PropTypes.func.isRequired,
};

export default Header;
