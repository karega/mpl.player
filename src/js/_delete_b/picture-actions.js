/* @flow */

import {ADD_PICTURE, DELETE_PICTURE, SET_PICTURE, UNSET_PICTURE} from './actions';

export function addPicture(stopId: string, question: Object, process: string, picture: Object): Object {
    return {
        type: ADD_PICTURE,
        stopId,
        question,
        process,
        picture
    };
}

export function deletePicture(stopId: string, process: string, questionId: string, picture: Object): Object {
    return {
        type: DELETE_PICTURE,
        stopId,
        process,
        questionId,
        picture
    };
}

export function setPicture(stopId: string, section: string, key: string, picture: Object): Object {
    return {
        type: SET_PICTURE,
        stopId,
        section,
        key,
        picture
    };
}

export function unsetPicture(stopId: string, section: string, key: string): Object {
    return {
        type: UNSET_PICTURE,
        stopId,
        section,
        key
    };
}
