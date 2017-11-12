/* settings-provider.js */

/** External Module Dependencies **/
import { connect } from 'react-redux';

/** Sibling Module Dependencies **/
import { logout } from './../../login/actions/login-actions';

/** Internal Module Dependencies **/
import Settings from './../elements/settings';

const mapStateToProps = (state) => {
	return {
		synching: state.settings.get('synching'),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => {
			dispatch(logout());
		},
	};
};

const SettingsProvider = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Settings);

export default SettingsProvider;
