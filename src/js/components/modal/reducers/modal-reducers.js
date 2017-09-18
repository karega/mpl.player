/* modal-reducers.js */

import { OPEN_MODAL, CLOSE_MODAL } from './../../../actions/actions';

const modals = function (modal: Object, action: Object): Object {
	switch (action.type) {
		case OPEN_MODAL:
			return modal.set('modalType', action.modalType).set('modalProps', action.modalProps);
		case CLOSE_MODAL:
			return modal.set('modalType', '').set('modalProps', {});
		default:
			return modal;
	}
};

export default modals;
