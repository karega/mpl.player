/* admob-provider.js */

/** External Module Dependencies **/
import { connect } from 'react-redux';

/** Internal Module Dependencies **/
import Admob from './../elements/admob';
import {
	addRewards,
} from './../actions/admob-actions';
import {
	saveCurrentBuild,
} from './../../builder/actions/builder-actions';

const mapStateToProps = (state) => {
	return {
		session: state.session,
		admob: state.admob,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		saveCurrentBuild: () => {
			dispatch(saveCurrentBuild());
		},
		addRewards: (amount) => {
			dispatch(addRewards(amount));
		}
	};
};

const AdmobProvider = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Admob);

export default AdmobProvider;
