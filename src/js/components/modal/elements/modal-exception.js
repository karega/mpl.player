/* @flow */

import React, {PropTypes} from 'react';
import {ScrollView, View, Text} from 'react-native';
import Button from './../../shared/elements/button';
import {RadioButton, RadioButtonGroup} from 'react-native-material-design';
import mStyles from './../styles/modal-styles';

type ModalExceptionPropTypes = {
	modalProps: Object;
	closeModal: () => void;
};

const ModalException = ({modalProps, closeModal}: ModalExceptionPropTypes) => {
	var items = [{
		label: 'Damage',
		value: 'skuException_Damage',
		disabled: false
	}, {
		label: 'Missing',
		value: 'skuException_Missing',
		disabled: false
	}, {
		label: 'Wrong Item',
		value: 'skuException_Wrong_Item',
		disabled: false
	}, {
		label: 'Does Not Fit',
		value: 'skuException_Does_Not_Fit',
		disabled: false
	}, {
		label: 'Customer Rejected',
		value: 'skuException_Customer_Rejected',
		disabled: false
	}];

	return (
		<View style={mStyles.modal}>
			<Text style={mStyles.title}>{modalProps.title}</Text>
			<View style={mStyles.text}>
				<Text>{modalProps.text}</Text>
			</View>

			<View style={mStyles.buttonContainer}>
				<RadioButtonGroup items={items} style={mStyles.radioGroup} onSelect={modalProps.onSelect}/>
				<View style={mStyles.button}>
					<Button
						theme='red'
						raised={true}
						text='DONE'
						onPress={() => {
                            modalProps.onClose(modalProps.id);
                            closeModal();
                        }}
						type='filled'/>
				</View>
			</View>
		</View>
	);

};

ModalException.propTypes = {
	modalProps: PropTypes.object.isRequired,
	closeModal: PropTypes.func.isRequired
};

export default ModalException;
