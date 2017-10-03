/* admob.js */

/** External Module Dependencies **/
import Immutable from 'immutable';
import React, {PropTypes} from 'react';
import {Image, Text, TextInput, TouchableHighlight, View} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AdMobRewarded } from 'react-native-admob';

/** Internal Component Dependencies **/
import aStyles from './../styles/admob-styles';

type AdmobPropTypes = {
	session: Immutable.Map<string, any>;
};

type AdmobStateTypes = {
	id: string;
};

class Admob extends React.PureComponent<any, AdmobPropTypes, AdmobStateTypes> {
	props: AdmobPropTypes;
	state: AdmobStateTypes;

	constructor(props: AdmobPropTypes): void {
		super(props);

		this.state = {
			id: '',
		};

		this.showRewarded = this.showRewarded.bind(this);
	}

	componentDidMount() {
		AdMobRewarded.setTestDeviceID('EMULATOR');

		AdMobRewarded.setAdUnitID('ca-app-pub-0366816116578381/2249963599');

		AdMobRewarded.addEventListener('rewardedVideoDidRewardUser', () => {
			this.setState({ loaded: false });
		});

		AdMobRewarded.addEventListener('rewardedVideoDidLoad', () => {
			this.setState({ loaded: true }, () => console.log('rewardedVideoDidLoad'));
		});

		AdMobRewarded.addEventListener('rewardedVideoDidFailToLoad', (error) => console.log('rewardedVideoDidFailToLoad', error));

		AdMobRewarded.addEventListener('rewardedVideoDidOpen', () => console.log('rewardedVideoDidOpen'));

		AdMobRewarded.addEventListener('rewardedVideoDidClose', () => {
			Actions.summary();
		});

		AdMobRewarded.addEventListener('rewardedVideoWillLeaveApplication', () => console.log('rewardedVideoWillLeaveApplication'));

		AdMobRewarded.requestAd((error) => error && console.log(error));
	}

	componentDidUpdate(prevProps) {
		if (this.state.loaded) {
			this.showRewarded();
		}
	}

	componentWillUnmount() {
		AdMobRewarded.removeAllListeners();
	}

	showRewarded() {
		AdMobRewarded.showAd((error) => error && console.log(error));
	}

	render(): React.Element {
		return (
			<View style={ aStyles.container }>
				<View style={{ flex: 1 }} />
			</View>
		);
	}
}

Admob.propTypes = {
	session: PropTypes.object.isRequired,
};

export default Admob;