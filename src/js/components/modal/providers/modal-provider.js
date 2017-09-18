/* modal-provider.js */

import {connect} from 'react-redux';

import {
	openModal,
	closeModal,
} from './../actions/modal-actions';
import Modal from './../elements/modal';

const mapStateToProps = (state) => {
	return {
		modalType: state.modal.get('modalType'),
		modalProps: state.modal.get('modalProps'),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		openModal: (modalType, modalProps) => {
			dispatch(openModal(modalType, modalProps));
		},
		closeModal: () => {
			dispatch(closeModal());
		},
	};
};

const ModalProvider = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Modal);

export default ModalProvider;
