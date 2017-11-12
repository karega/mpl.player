/* settings.js */

import React, {PropTypes} from 'react';
import {
	RefreshControl,
	ScrollView,
	Switch,
	Text,
	TouchableNativeFeedback,
	View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';

import sStyles from './../styles/settings-styles';

type SettingsListPropTypes = {};

class SettingsList extends React.PureComponent <any, SettingsListPropTypes, void> {
	props: SettingsListPropTypes;
	animating: boolean;

	constructor(props: SettingsListPropTypes): void {
		super(props);
	}

	render(): React.Element {
		var	settings = [];

		[{
			title: (this.props.synching ? 'STOP' : 'START'),
			subtitle: 'SYNCHING',
			action: (value) => {
				if (this.props.synching) {
					this.props.logout();
				}
				else {
					Actions.login();
				}
			},
			type: 'button',
		}].map((setting, index) => {
			settings.push(
				<View
					key={'menu_' + index}
					style={sStyles.menuItem}>
					<TouchableNativeFeedback
						onPress={setting.type === 'button' ? setting.action : null}
						disabled={setting.disabled}>
						<View style={sStyles.menuButton}>
							<Icon
								style={sStyles.menuIcon}
								color={'#262426'}
								name={this.props.synching ? 'sync-disabled' : 'sync'}
								size={32}/>
							<View style={sStyles.menuTitle}>
								<Text style={[sStyles.menuHeader, { color: setting.disabled ? '#9d9d9d' : '#262426' }]}>{setting.title}</Text>
								<Text style={[sStyles.menuLabel, { color: setting.disabled ? '#9d9d9d' : '#262426' }]}>{setting.subtitle}</Text>
							</View>
							{ setting.type === 'switch' && (
								<View style={sStyles.menuSwitch}>
									<Switch
										thumbTintColor={'#3b5998'}
										onValueChange={setting.action}
										disabled={this.props.synching}
										style={{ alignSelf: 'flex-end' }}
										value={this.props.synching} />
								</View>
							)}
						</View>
					</TouchableNativeFeedback>
				</View>
			);
		});

		return (
			<View style={sStyles.container}>
				<TouchableNativeFeedback
					onPress={() => {
						Actions.pop();
					}}>
					<View style={sStyles.closeButton}>
						<Icon
							color={'#262426'}
							name={'close'}
							size={32}/>
					</View>
				</TouchableNativeFeedback>
				<View style={sStyles.headerContainer}>
					<Text style={sStyles.primaryText}>SETTINGS</Text>
				</View>
				<ScrollView contentContainerStyle={sStyles.scrollContainer} refreshControl={null}>
					{settings}
				</ScrollView>
			</View>
		);
	}
}

SettingsList.propTypes = {
};

export default SettingsList;