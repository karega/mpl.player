/* login.js */

/** External Module Dependencies **/
import Immutable from 'immutable';
import React, {PropTypes} from 'react';
import {Image, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import {FBLogin} from 'react-native-facebook-login';

var {FBLoginManager} = require('react-native-facebook-login');

/** Global Module Dependencies **/
import {RECONNECT_ENABLED, SESSION_KEY} from './../../../config/constants';

/** Internal Component Dependencies **/
import lStyles from './../styles/login-styles';
import FBLoginView from './login-button';

type LoginPropTypes = {
	session: Immutable.Map<string, any>;
	login: (id: string) => void;
	register: (profile: Object) => void;
	logout: () => void;
};

type LoginStateTypes = {
	id: string;
};

class Login extends React.PureComponent<any, LoginPropTypes, LoginStateTypes> {
	props: LoginPropTypes;
	state: LoginStateTypes;

	constructor(props: LoginPropTypes): void {
		super(props);

		this.mplPlayerLogo = require('./../../../assets/mplplayer-splash.png');

		this.state = {
			idCorrect: false,
			id: '',
			verified: false,
		};

		this.verify = this.verify.bind(this);
		this.register = this.register.bind(this);
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}

	verify(): void {
		this.setState({verified: true});
	}

	register(profile: Object): void {
		if (profile) {
			this.props.register(profile);
		}
	}

	login(): void {
		this.props.login();
	}

	logout(): void {
		this.props.logout();
	}

	render(): React.Element {
		return (
			<View style={ lStyles.container }>
				<View style={ lStyles.loginSplashBackground }>
					<View style={ lStyles.loginLogo }>
						<Image key={'mplPlayerLogo'} source={this.mplPlayerLogo} style={lStyles.mplPlayerLogo}  />
					</View>
					{ this.props.session.get('authorized') && this.state.verified &&
						<View style={lStyles.facebookLoginButton}>
							<TouchableWithoutFeedback
								onPress={() => {
									this.props.login();
								}}
								style={lStyles.facebookLoginButton}>
								<View style={[lStyles.connectContainer, lStyles.continueContainer]}>
									<Text style={lStyles.text}>CONTINUE AS {this.props.session.get('username').toUpperCase()}</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
					}
					{
						<FBLogin
							buttonView={ <FBLoginView verified={this.state.verified} style={lStyles.facebookRegisterButton} session={ this.props.session } /> }
							ref={(fbLogin) => { this.fbLogin = fbLogin }}
							permissions={['email', 'user_friends']}
							loginBehavior={FBLoginManager.LoginBehaviors.Web}
							onLogin={(data) => {
								console.log('debug', 'Logged in successful.');
								this.register(data);
							}}
							onLogout={() => {
								console.log('debug', 'Logged out.');
								this.logout();
							}}
							onLoginFound={(data) => {
								console.log('debug', 'Login found.', data);
								setTimeout(() => { this.verify(); }, 500);
							}}
							onLoginNotFound={() => {
								console.log('debug', 'No user logged in.');
								setTimeout(() => { this.verify(); }, 500);
							}}
							onError={(data) => {
								console.log('error', data);
							}}
							onCancel={() => {
								console.log('debug', 'User cancelled.');
							}}
							onPermissionsMissing={(data) => {
								console.log('debug', 'Check permissions!', data);
							}} />
					}
				</View>
			</View>
		);
	}
}

Login.propTypes = {
	session: PropTypes.object.isRequired,
	login: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
};

export default Login;

// https://mypark-legends-player-lab.firebaseapp.com/__/auth/handler