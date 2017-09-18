/* login-button.js */

/** External Module Dependencies **/
import React, {PropTypes} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Immutable from 'immutable';

var Icon = require('react-native-vector-icons/FontAwesome');
var {FBLoginManager} = require('react-native-facebook-login');

/** Internal Module Dependencies **/
import lStyles from './../styles/login-styles';

type FBLoginViewPropTypes = {
	session: Immutable.Map<string, any>;
};

type FBLoginViewStateTypes = {
	id: string;
};

class FBLoginView extends React.PureComponent<any, FBLoginViewPropTypes, FBLoginViewStateTypes> {
	props: FBLoginViewPropTypes;
	state: FBLoginViewStateTypes;

	constructor(props: FBLoginViewPropTypes): void {
		super(props);

		this.state = { };
	}

	render() {
		var loginLabel = (this.props.session.get('authorized')) ? 'LOGOUT' : 'CONNECT WITH FACEBOOK';

		return (
			this.props.verified ? (
				<View style={lStyles.connectContainer}>
					<Icon
						color={"#ffffff"}
						backgroundColor={"#3B5998"}
						borderRadius={0}
						name={"facebook"}
						size={25}
						style={lStyles.loginIcon}/>
					<Text style={lStyles.text}>{loginLabel}</Text>
				</View>
			) : null
		)
	}
}

FBLoginView.propTypes = {
	session: PropTypes.object.isRequired,
};

export default FBLoginView;