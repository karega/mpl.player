/* manager-provider.js */

import {connect} from 'react-redux';

import Manager from '../elements/manager';

const mapStateToProps = (state) => {
	return { };
};

const mapDispatchToProps = (dispatch) => {
	return { };
};

const ManagerProvider = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Manager);

export default ManagerProvider;
