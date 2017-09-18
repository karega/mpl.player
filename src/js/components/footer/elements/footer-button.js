/* footer-button.js */

import Immutable from 'immutable';
import React, {PropTypes} from 'react';
import {
    View ,
    Text ,
    TouchableHighlight ,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { ROUTE_KEY } from './../../config/constants';
import fStyles from './../../_delete_a/footer-_delete_a';

type FooterButtonPropTypes = {
    btn : Immutable.OrderedMap<string , any>;
    onLogout : () => void;
    onPress : () => void;
    openModal : ( type : string , props : Object ) => void;
    stops : Immutable.OrderedMap<string , any>;
    currentSceneKey : string;
    deliveryInstructions : string;
    stopId : string;
};

class FooterButton extends React.PureComponent<any , FooterButtonPropTypes , void> {
    props : FooterButtonPropTypes;

    constructor( props : FooterButtonPropTypes ) : void {
        super( props );
        this.onPress = this.onPress.bind( this );
    }

    onPress() : void {
        if ( this.props.btn.get( "text" ) === "Back" ) {
            if ( this.props.currentSceneKey && ( this.props.currentSceneKey == ROUTE_KEY ) ) {
                // guard the back button from returning to the login scene...
                this.props.openModal(
                    "confirmation" ,
                    {
                        title : "Route Confirmation" ,
                        text : "Finish Route?" ,
                        confirmText : "Yes" ,
                        cancelText : "No" ,
                        onClose : () => {
                            Actions.pop();
                            this.props.onLogout();
                        } ,
                    }
                );
            } else {
                Actions.pop();
            }
        }
        if ( this.props.btn.get( "text") === "Check List" ) {
            Actions.tabs();
        }
        if ( this.props.btn.get( "text" ) === "Instructions" ) {
            this.props.openModal( "directions" , { data : this.props.deliveryInstructions } );
        }
    }

    render() : React.Element {
        return (
            <TouchableHighlight onPress={ this.onPress } >
                <View style={ fStyles.button } >
                    <Icon name={ this.props.btn.get( "icon" ) } size={ 20 } style={ fStyles.buttonIcon } />
                    <Text style={ fStyles.buttonText } >{ this.props.btn.get( "text" ) }</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

FooterButton.propTypes = {
    onLogout : PropTypes.func.isRequired ,
    onPress : PropTypes.func.isRequired ,
    btn : PropTypes.object.isRequired ,
    currentSceneKey : PropTypes.string ,
    deliveryInstructions : PropTypes.string ,
    openModal : PropTypes.func ,
};

export default FooterButton;
