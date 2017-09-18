/* @flow */

import React, {PropTypes} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ckbStyles from './../../_delete_a/checkbutton-_delete_a';

type CheckButtonPropTypes = {
	id: string;
	selected: boolean;
	value: string;
	question : Immutable.Map<string, any>;
	onSelect: (id: string, selected: boolean, value: string) => void;
};

class CheckButton extends React.Component<any, CheckButtonPropTypes, void> {

	props: CheckButtonPropTypes;

	constructor(props: CheckButtonPropTypes): void {
		super(props);

		this.onSelect = this.onSelect.bind(this);
	}

	onSelect(): void {
		this.props.onSelect(this.props.value);
	}

	render(): React.Element {

		const style = this.props.selected ? ckbStyles.selected : ckbStyles.unselected;
		const label = this.props.value;

		return (
			<TouchableOpacity onPress={this.onSelect} activeOpacity={0.5}> <View style={[ckbStyles.base, style]}>
				<Text>{label}</Text> </View> </TouchableOpacity>
		);
	}
}

CheckButton.propTypes = {
	id: PropTypes.string,
	selected: PropTypes.bool,
	question: PropTypes.object,
	onSelect: PropTypes.func.isRequired
};

export default CheckButton;
