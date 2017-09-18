/* @flow */

import React, {PropTypes} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ckStyles from './../../_delete_a/checkbox-_delete_a';

type CheckBoxPropTypes = {
	selected: boolean;
	question: Object;
	value: string;
	onSelect: (selected: boolean, question: Object, value: string) => void;
};

class Checkbox extends React.Component<any, CheckBoxPropTypes, void> {

	props: CheckBoxPropTypes;

	constructor(props: CheckBoxPropTypes): void {
		super(props);

		this.onSelect = this.onSelect.bind(this);
	}

	onSelect(): void {
		this.props.onSelect(!this.props.selected, this.props.question, this.props.value);
	}

	render(): React.Element {

		const style = this.props.selected ? ckStyles.selected : ckStyles.unselected;
		const icon = this.props.selected ? <Icon name={'done'} size={20} style={ckStyles.icon}/> : null;

		return (
			<TouchableOpacity onPress={this.onSelect} activeOpacity={0.5}> <View style={[ckStyles.base, style]}>
				{icon}
			</View> </TouchableOpacity>
		);
	}
}

Checkbox.propTypes = {
	selected: PropTypes.bool,
	onSelect: PropTypes.func.isRequired
};

export default Checkbox;
