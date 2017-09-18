/* modal-confirmation.js */

import React, {PropTypes} from 'react';
import {View, Text} from 'react-native';
import Button from './../../shared/elements/button';
import mStyles from './../styles/modal-styles';

type ModalConfirmationPropTypes = {
	modalProps: Object;
	closeModal: () => void;
};

const ModalConfirmation = ({modalProps, closeModal} : ModalConfirmationPropTypes) => {
	return (
		<View style={ mStyles.modal }>
			<Text style={ mStyles.title }>{ modalProps.title }</Text>
			<View style={ mStyles.text }>
				<Text>{ modalProps.text }</Text> 
			</View>
			<View style={ mStyles.buttonContainer }>
				<Button theme='red' raised={ true } text={ modalProps.cancelText } onPress={ () => { closeModal(); } } type='filled'/>
				<View style={ mStyles.buttonSpacing }>
					<Button 
						theme='red' 
						raised={ true } 
						text={ modalProps.confirmText } 
						onPress={
                            () => {
                                modalProps.onClose();
                                closeModal();
                            }
                        } 
						type='filled'/>
				</View>
			</View>
		</View>
	);
};

ModalConfirmation.propTypes = {
	modalProps: PropTypes.object.isRequired,
	closeModal: PropTypes.func.isRequired,
};

export default ModalConfirmation;
