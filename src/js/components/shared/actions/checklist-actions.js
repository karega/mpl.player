/* @flow */

import {CHECK_QUESTION_ANSWER} from './actions';

export function checkQuestionAnswer(id: string, check: boolean): Object {
    return {
        type: CHECK_QUESTION_ANSWER,
        id,
        check
    };
}
