/* settings-provider.js */

/** External Module Dependencies **/
import { connect } from 'react-redux';

/** Internal Module Dependencies **/
import Settings from './../elements/settings';

const mapStateToProps = (state) => {
	return { };
};

const mapDispatchToProps = (dispatch) => {
	return { };
};

const SettingsProvider = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Settings);

export default SettingsProvider;
