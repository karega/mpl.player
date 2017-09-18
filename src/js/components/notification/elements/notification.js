/* notification.js */

/** External Module Dependencies **/
import Immutable from 'immutable';
import React, {PropTypes} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

/** External Module Dependencies **/
import nStyles from './../styles/notification-styles';

type NotificationPropTypes = {
	notification: ?string;
	styles: ?Object;
	textStyles: ?Object;
	removeNotification: () => void;
};

class Notification extends React.PureComponent<any, NotificationPropTypes, void> {

	props: NotificationPropTypes;

	constructor(props: NotificationPropTypes): void {
		super(props);
	}

	setTimer(): void {
		setTimeout(() => {
			this.props.removeNotification();
		}, 3000);
	}

	render(): ?React.Element {

		if (this.props.notification === null) {
			return <View style={nStyles.container}></View>;
		}

		var styles = [nStyles.container];
		var textStyles = [nStyles.text];
		if (this.props.styles) {
			styles.push(this.props.styles);
		}
		if (this.props.textStyles) {
			textStyles.push(this.props.textStyles);
		}

		this.setTimer();

		return (
			<View style={styles}> <Text style={textStyles}>{this.props.notification}</Text>
				<Icon name="report-problem" size={16} style={nStyles.icon}/> </View>
		);
	}
}

Notification.propTypes = {
	notification: PropTypes.string,
	styles: PropTypes.object,
	textStyles: PropTypes.object,
	removeNotification: PropTypes.func
};

export default Notification;
