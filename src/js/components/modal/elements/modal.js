/* modal.js */

import React, {PropTypes} from 'react';
import {
	View,
	Modal,
} from 'react-native';

import mStyles from './../styles/modal-styles';

import ModalDirections from './modal-directions';
import ModalConfirmation from './modal-confirmation';
import ModalException from './modal-exception';
import ModalError from './modal-error';

const MODAL_COMPONENTS = {
	'directions': ModalDirections,
	'confirmation': ModalConfirmation,
	'deliveryException': ModalException,
	'error': ModalError
};

type ModalCustomPropTypes = {
	modalType: string;
	modalProps: Object;
	openModal: (type: string, props: Object) => void;
	closeModal: () => void;
}

class ModalCustom extends React.PureComponent<any, ModalCustomPropTypes, void> {
	props: ModalCustomPropTypes

	constructor(props: ModalCustomPropTypes): void {
		super(props);
	}

	render(): ?React.Element {
		if (this.props.modalType.length === 0) {
			return null;
		}

		const SpecificModal = MODAL_COMPONENTS[this.props.modalType];

		return (
			<Modal
				animationType={ 'none' }
				transparent={ true }
				visible={ true }
				onRequestClose={ () => {
					console.log('Modal has been closed.');
				} }>
				<View style={ mStyles.page }>
					<SpecificModal { ...this.props } />
				</View>
			</Modal>
		);
	}
}

ModalCustom.propTypes = {
	modalType: PropTypes.string.isRequired,
	modalProps: PropTypes.object.isRequired,
	openModal: PropTypes.func.isRequired,
	closeModal: PropTypes.func.isRequired,
};

export default ModalCustom;
