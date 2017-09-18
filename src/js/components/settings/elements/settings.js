/* settings.js */

/** External Module Dependencies **/
import React, {PropTypes} from 'react';
import {Image, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';

/** Internal Component Dependencies **/
import sStyles from './../styles/settings-styles';

type SettingsPropTypes = { };

type SettingsStateTypes = { };

class Settings extends React.PureComponent<any, SettingsPropTypes, SettingsStateTypes> {
	props: SettingsPropTypes;
	state: SettingsStateTypes;

	constructor(props: SettingsPropTypes): void {
		super(props);
	}

	render(): React.Element {
		return (
			<View style={ sStyles.container }>

			</View>
		);
	}
}

Settings.propTypes = { };

export default Settings;