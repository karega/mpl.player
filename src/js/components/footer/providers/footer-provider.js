/* footer-provider.js */

import { connect } from 'react-redux';

import { openModal } from './../../actions/modal-actions';
import { receiveLogout } from './../../actions/login-actions';
import { getActiveStop } from '../../reducers/menu-reducers';
import Footer from './../footer/footer';

const mapStateToProps = ( state ) => {
    const stopId = ( getActiveStop( state.stops ) != undefined ) ? getActiveStop( state.stops ) : 0;
    const currentStop = state.stops.get( stopId );
    var deliveryInstructions = null;
    if ( ( currentStop != undefined ) && ( typeof currentStop == "object" ) ) {
        deliveryInstructions = currentStop.get( "DELIVERY_INSTRUCTIONS" );
    }
    return {
        scene : state.scene ,
        btns : state.buttons ,
        session : state.session ,
        stops : state.stops ,
        stopId : stopId ,
        deliveryInstructions : deliveryInstructions ,
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        onLogout : ( ) => {
            dispatch( receiveLogout() );
        } ,
        openModal : ( modalType , modalProps ) => {
            dispatch( openModal( modalType , modalProps ) );
        } ,
        onButtonPress : ( /*id*/ ) => {
            // TO DO: create action for button press
            // dispatch(setTabActive(id));
        } ,
    };
};

const FooterProvider = connect(
    mapStateToProps ,
    mapDispatchToProps ,
) ( Footer );

export default FooterProvider;
