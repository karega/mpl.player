/* response-actions.js */

import Immutable from 'immutable';
import {
    STORE_RESPONSE ,
    STORE_TIMESTAMP ,
} from './actions';
import { Actions } from 'react-native-router-flux';

export function storeTimestamp( stopId : string , timestampId : string ) : Object {
    return {
        stopId ,
        timestampId ,
        type : STORE_TIMESTAMP ,
    };
}

export function storeResponse( checklistInstanceId : string , question : Immutable.Map< string , any > , choice : string , stopId : string ) : Object {
    return {
        checklistInstanceId ,
        question ,
        choice ,
        stopId ,
        type : STORE_RESPONSE ,
    };
}
