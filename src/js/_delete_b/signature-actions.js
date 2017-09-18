/* signature-actions.js */

import {
    CLEAR_SIGNATURES ,
    STORE_SIGNATURES ,
} from './actions';
import {
    setTabActive ,
    setTabCompleted ,
} from './../actions/tab-actions';
import { PROCESS_SIGNATURE } from './../config/constants';

export function completeSignatureProcess( driverId : string , stopId : string ) : Object {
    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.
    return function ( dispatch ) {
        // First dispatch: the app state is updated to inform
        // that the API call is starting.
        dispatch( setTabActive( stopId , PROCESS_SIGNATURE , false ) );
        dispatch( setTabCompleted( stopId , PROCESS_SIGNATURE ) );
        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.
        // In this case, we return a promise to wait for.
        // This is not required by thunk middleware, but it is convenient for us.
    };
}

export function closeSignatureProcess( driverId : string , stopId : string ) : Object {
    return function ( dispatch ) {
        dispatch( setTabActive( stopId , PROCESS_SIGNATURE , false ) );
    }
}

export function storeSignatureResponse( checklistInstanceId : string , question : Immutable.Map< string , any > , choice : string , stopId : string , signature : Object , driverId : string ) : Object {
    return {
        checklistInstanceId ,
        question ,
        choice ,
        stopId ,
        signature ,
        driverId ,
        type : STORE_SIGNATURES ,
    };
}

export function clearSignatures( driverId : string , stopId : string ) : Object {
    return {
        driverId ,
        stopId ,
        type : CLEAR_SIGNATURES ,
    };
}
