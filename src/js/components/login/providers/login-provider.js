/* login-provider.js */

/** External Module Dependencies **/
import { connect } from 'react-redux';

/** Internal Module Dependencies **/
import { login, register, logout } from './../actions/login-actions';
import Login from './../elements/login';

const mapStateToProps = (state) => {
	return {
		session: state.session,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		register: (profile) => {
			dispatch(register(profile));
		},
		login: (id) => {
			dispatch(login(id))
		},
		logout: () => {
			dispatch(logout());
		},
	};
};

const LoginProvider = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Login);

export default LoginProvider;
