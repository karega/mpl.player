/* modal-actions.js */

/** Global Module Dependencies **/
import { OPEN_MODAL, CLOSE_MODAL } from './../../../actions/actions';

export function openModal(modalType: string, modalProps: Object): Object {
	return {
		modalType,
		modalProps,
		type: OPEN_MODAL,
	};
}

export function closeModal(): Object {
	return {
		type: CLOSE_MODAL,
	};
}
