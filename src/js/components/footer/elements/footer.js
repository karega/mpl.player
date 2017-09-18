/* footer.js */

import Immutable from 'immutable';
import React , { PropTypes } from 'react';
import { View } from 'react-native';

import {
    DRIVER_KEY ,
    SESSION_KEY ,
} from './../../config/constants';
import FooterButton from './footer-button';
import fStyles from './../../_delete_a/footer-_delete_a';

type FooterPropTypes = {
    scene : Object;
    btns : Immutable.Map<string , any>;
    session : Immutable.Map<string , any>;
    onLogout : () => void;
    onButtonPress : () => void;
    openModal : ( type : string , props : Object ) => void;
    deliveryInstructions : string;
};

class Footer extends React.Component<any , FooterPropTypes , void> {
    props : FooterPropTypes;

    constructor( props : FooterPropTypes ) : void {
        super( props );
        this.openModal = this.props.openModal.bind( this );
    }

    render() : ?React.Element {
        if ( this.props.session.get( SESSION_KEY ) === null ) {
            return null;
        }
        if ( ( this.props.scene !== null ) && ( this.props.scene.sceneKey === DRIVER_KEY ) ) {
            return null;
        }
        // track the current scene to control the behavior of the back button in the footer...
        var currentSceneKey = null;
        if ( ( this.props.scene !== null ) && this.props.scene.sceneKey ) {
            currentSceneKey = this.props.scene.sceneKey;
        }
        return (
            <View style={ fStyles.container }>
                {
                    this.props.btns.map(
                        ( btn , key ) => {
                            return (
                                <FooterButton
                                    key={ "btn-" + key }
                                    btn={ btn }
                                    currentSceneKey={ currentSceneKey }
                                    onLogout={ this.props.onLogout }
                                    onPress={ this.props.onButtonPress }
                                    deliveryInstructions={ this.props.deliveryInstructions }
                                    openModal={ this.openModal }
                                    />
                            );
                        }
                    ).toArray()
                }
            </View>
        );
    }
}

Footer.propTypes = {
    scene : PropTypes.object ,
    btns : PropTypes.object.isRequired ,
    openModal : PropTypes.func ,
    onLogout : PropTypes.func.isRequired ,
    onButtonPress : PropTypes.func.isRequired ,
    session : PropTypes.object.isRequired ,
    deliveryInstructions : PropTypes.string ,
};

export default Footer;
