/* notification-provider.js */

/** External Module Dependencies **/
import {connect} from 'react-redux';

/** Internal Module Dependencies **/
import Notification from './../elements/notification';
import {removeNotification} from './../actions/notification-actions';

const mapStateToProps = (state, ownProps) => {
	return {
		notification: state.notification,
		...ownProps
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeNotification: () => {
			dispatch(removeNotification());
		}
	};
};

const NotificationProvider = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Notification);

export default NotificationProvider;
