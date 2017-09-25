/* builder.js */

/** External Module Dependencies **/
import Immutable from 'immutable';
import React, {PropTypes} from 'react';
import {
	Dimensions,
	Image,
	RefreshControl,
	ScrollView,
	Text,
	TextInput,
	ToolbarAndroid,
	TouchableHighlight,
	TouchableNativeFeedback,
	TouchableOpacity,
	View
} from 'react-native';

/** Internal Module Dependencies **/
import ChoosePosition from './choose-position';
import ChoosePrimary from './choose-primary';
import ChooseSecondary from './choose-secondary';
import bStyles from './../styles/builder-styles';

type BuilderPropTypes = {
	builder: Immutable.Map<string, any>;
	profile: Immutable.Map<string, any>;
};

type BuilderStateTypes = {
	step: number;
};

class Builder extends React.PureComponent <any, BuilderPropTypes, BuilderStateTypes> {
	props: BuilderPropTypes;
	state: BuilderStateTypes;

	constructor(props: BuilderPropTypes): void {
		super(props);
	}

	componentDidMount() {
		this.props.startBuilder();
	}

	componentDidUpdate(prevProps) {
		if (this.props.step === 4) {
			this.props.saveCurrentBuild();
		}
	}

	render(): React.Element {
		return (
			<View style={bStyles.container}>
				{ this.props.step === 1 && (
					<ChoosePosition {...this.props} />
				)}
				{ this.props.step === 2 && (
					<ChoosePrimary {...this.props} />
				)}
				{ this.props.step === 3 && (
					<ChooseSecondary {...this.props} />
				)}
			</View>
		);
	}
}

Builder.propTypes = {
	builder: PropTypes.object.isRequired,
};

export default Builder;
