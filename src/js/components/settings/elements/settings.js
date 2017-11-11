/* settings.js */

import Immutable from 'immutable';
import React, {PropTypes} from 'react';
import {
	RefreshControl,
	ScrollView,
	View,
} from 'react-native';

import sStyles from './../styles/settings-styles';

type SettingsListPropTypes = {};

class SettingsList extends React.PureComponent <any, SettingsListPropTypes, void> {
	props: SettingsListPropTypes;
	animating: boolean;

	constructor(props: SettingsListPropTypes): void {
		super(props);
	}

	render(): React.Element {
		[].map((setting, index) => {
			settings.push(
				<View
					key={'menu_' + index}
					style={sStyles.menuItem}>
					<TouchableNativeFeedback
						onPress={setting.onClick}
						disabled={setting.disabled}>
						<View style={sStyles.menuButton}>
							<Text style={[sStyles.menuHeader, { color: setting.disabled ? '#9d9d9d' : '#262426' }]}>{setting.title}</Text>
							<Text style={[sStyles.menuLabel, { color: setting.disabled ? '#9d9d9d' : '#262426' }]}>{setting.subtitle}</Text>
						</View>
					</TouchableNativeFeedback>
				</View>
			);
		});

		return (
			<View style={sStyles.container}>
				<ScrollView contentContainerStyle={sStyles.scrollContainer} refreshControl={null}>
					{settings}
				</ScrollView>
			</View>
		);
	}
}

SettingsList.propTypes = {
	settings: PropTypes.object.isRequired,
	onRefresh: PropTypes.func.isRequired,
	onSettingPress: PropTypes.func.isRequired,
};

export default SettingsList;