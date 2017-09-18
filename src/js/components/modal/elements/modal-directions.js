/* @flow */

import React, {PropTypes} from 'react';
import {ScrollView, View, Text} from 'react-native';
import Button from './../../shared/elements/button';
import mStyles from './../styles/modal-styles';

type ModalDirectionsPropTypes = {
	modalProps: Object;
	closeModal: () => void;
};

const ModalDirections = ({modalProps, closeModal}: ModalDirectionsPropTypes) => {

	function getInstructions() {
		var instructions = [];

		if (modalProps !== undefined && modalProps != null) {
			if (typeof modalProps.data === 'string') {
				var nInstructions = ['No Instructions Available'];

				instructions = ((modalProps.data !== undefined && modalProps.data !== null)) ? ((modalProps.data !== '') ? modalProps.data.split('\n') : nInstructions) : nInstructions;

				var instructionRows = [];

				{
					instructions.map((info, key) => {
						instructionRows.push(
							<View key={'info-' + key} style={mStyles.text}>
								<Text style={mStyles.textHeight} key={'text-' + key}>{info != '' ? info : ''}</Text>
							</View>
						);
					})
				}

				return instructionRows;
			}
			else if (typeof  modalProps.data == 'object') {
				var instructionRows = [];

				instructionRows.push(
					<View key={'info-unavailable'} style={mStyles.text}>
						<Text style={mStyles.textHeight} key={'text-unavailable'}>Instructions unavailable.</Text>
					</View>
				);

				return instructionRows;
			}
			else {
				var instructionRows = [];

				instructionRows.push(
					<View key={'info-unavailable'} style={mStyles.text}>
						<Text style={mStyles.textHeight} key={'text-unavailable'}>No Instructions Available.</Text>
					</View>
				);

				return instructionRows;
			}
		}

		return null;
	}

	return (
		<View style={mStyles.modal}> <Text style={mStyles.title}>Delivery Instructions</Text>

			<ScrollView style={mStyles.scrollView} contentContainerStyle={mStyles.scrollContainer}>
				{ getInstructions() }
			</ScrollView>

			<View style={mStyles.buttonContainer}>
				<Button theme='red' raised={true} text='OK' onPress={() => { closeModal(); }} type='filled' />
			</View>
		</View>
	);

};

ModalDirections.propTypes = {
	modalProps: PropTypes.object.isRequired,
	closeModal: PropTypes.func.isRequired
};

export default ModalDirections;
