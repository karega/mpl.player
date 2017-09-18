/* modal-error.js */

import React, {PropTypes} from 'react';
import {ScrollView, View, Text} from 'react-native';
import Button from './../../shared/elements/button';
import mStyles from './../styles/modal-styles';

type ModalErrorPropTypes = {
	modalProps : Object;
	closeModal : () => void;
};

const ModalError = ({modalProps, closeModal} : ModalErrorPropTypes) => {
	function getErrorMessage() {
		var message = null;
		if (( modalProps !== undefined )
			&& ( modalProps !== null )
			&& ( modalProps.error !== undefined )
			&& ( modalProps.error !== null )
		) {
			message = modalProps.error;
		}
		return (
			<View style={ mStyles.text }> <Text style={ mStyles.textHeight }>{ message }</Text> </View>
		);
	}

	return (
		<View style={ mStyles.modal }>
			<Text style={ mStyles.title }>Error</Text>
			<ScrollView style={ mStyles.scrollView } contentContainerStyle={ mStyles.scrollContainer }>
				{ getErrorMessage() }
			</ScrollView>
			<View style={ mStyles.buttonContainer }>
				<Button theme='red' raised={ true } text='OK' onPress={ () => { closeModal(); } } type='filled'/>
			</View>
		</View>
	);

};

ModalError.propTypes = {
	modalProps: PropTypes.object.isRequired,
	closeModal: PropTypes.func.isRequired,
};

export default ModalError;
