/* header-provider.js */

import { connect } from 'react-redux';

import { openModal } from './../../actions/modal-actions';
import { refreshDriver } from './../../actions/refresh-actions';
import Header from './../header/header';

var oauth = require( './../../bridges/react.force.oauth.js' );

const mapStateToProps = ( state ) => {
    return {
        scene : state.scene ,
        session : state.session ,
        stops : state.stops ,
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        onLogoutPress : ( ) => {
            dispatch(
                openModal(
                    "confirmation" ,
                    {
                        title : "Logout Confirmation" ,
                        text : "Logout?" ,
                        confirmText : "Yes" ,
                        cancelText : "No" ,
                        onClose: () => {
                            // invalidate oauth token...  forces app back to login.salesforce.com...
                            oauth.logout();
                            // PMCC TODO ~ needs to change app state to trigger render...
                        } ,
                    }
                )
            );
        }
    };
};

const HeaderProvider = connect(
    mapStateToProps ,
    mapDispatchToProps ,
) ( Header );

export default HeaderProvider;
