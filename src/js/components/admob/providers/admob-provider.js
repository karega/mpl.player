/* admob-provider.js */

/** External Module Dependencies **/
import { connect } from 'react-redux';

/** Internal Module Dependencies **/
import Admob from './../elements/admob';

const mapStateToProps = (state) => {
	return {
		session: state.session,
		admob: state.admob,
	};
};

const mapDispatchToProps = (dispatch) => {
	return { };
};

const AdmobProvider = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Admob);

export default AdmobProvider;
