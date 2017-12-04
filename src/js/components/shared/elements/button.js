/* button.js */

/** External Module Dependencies **/
import React, {PropTypes} from "react";
import {Text, TouchableWithoutFeedback, View} from "react-native";

/** Internal Module Dependencies **/
import bStyles from './../styles/button-styles';

type ButtonPropTypes = {
	text: string;
	raised: boolean;
	theme: string;
	type: string;
	disabled: boolean;
	onPress: () => void;
	onLongPress: () => void;
};

type ButtonDefaultPropTypes = {
	theme: string;
	type: string;
	raised: boolean;
};

type ButtonStateTypes = {
	elevation: number;
};

class Button extends React.Component<ButtonDefaultPropTypes, ButtonPropTypes, ButtonStateTypes> {
	static defaultProps: ButtonDefaultPropTypes;
	props: ButtonPropTypes;
	state: ButtonStateTypes;

	constructor(props: ButtonPropTypes): void {
		super(props);

		this.state = {
			elevation: 2
		};

		this.setElevation = this.setElevation.bind(this);
		this.removeElevation = this.removeElevation.bind(this);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.text !== this.props.text ||
			nextState.elevation !== this.state.elevation;
	}

	setElevation() {
		this.setState({
			elevation: 4
		});
	};

	removeElevation() {
		this.setState({
			elevation: 2
		});
	};

	render() {
		const {elevation} = this.state;
		const {text, raised, theme, type, onPress, onLongPress} = this.props;

		const btnStyle = [bStyles.buttonStyles.button, bStyles[theme + 'Theme'][type + 'Button'], {elevation: raised ? elevation : 0}];
		const textStyle = [bStyles[theme + 'Theme'][type + 'Text']];

		return (
			<TouchableWithoutFeedback
				onPress={onPress}
				onLongPress={onLongPress ? onLongPress : null}
				onPressIn={raised ? this.setElevation : null}
				onPressOut={raised ? this.removeElevation : null}
				background={TouchableWithoutFeedback.SelectableBackground()}>
				<View style={btnStyle}>
					<Text style={textStyle}>{text}</Text>
				</View>
			</TouchableWithoutFeedback>
		);
	};
}

Button.propTypes = {
	theme: PropTypes.string,
	type: PropTypes.string,
	disabled: PropTypes.bool,
	text: PropTypes.string.isRequired,
	raised: PropTypes.bool,
	onPress: PropTypes.func,
	onLongPress: PropTypes.func
};

Button.defaultProps = {
	theme: 'red',
	type: 'clear',
	raised: true
};

export default Button;