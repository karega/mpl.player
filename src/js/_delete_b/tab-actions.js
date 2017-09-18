/* tab-actions.js */

import {
    SET_TAB_ACTIVE ,
    SET_TAB_STARTED ,
    SET_TAB_COMPLETED ,
} from "./actions";

export function setTabActive( stopId : string , id : number , active : boolean ) : Object {
    return {
        stopId ,
        id ,
        active ,
        type : SET_TAB_ACTIVE ,
    };
}

export function setTabStarted( stopId : string , id : string ) : Object {
    return {
        stopId ,
        id ,
        type : SET_TAB_STARTED ,
    };
}

export function setTabCompleted( stopId : string , id : string ) : Object {
    return {
        stopId ,
        id ,
        type : SET_TAB_COMPLETED ,
    };
}
