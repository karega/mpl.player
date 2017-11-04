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
	admob: Immutable.Map<string, any>;
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
		// AdMobRewarded.setTestDeviceID('EMULATOR');
		AdMobRewarded.setAdUnitID(this.props.admob.getIn([this.props.admob.get('current'), 'unit', 'builder']));

		AdMobRewarded.addEventListener('rewardedVideoDidRewardUser', (reward) => {
			console.log('rewardedVideoDidRewardUser', reward);

			this.props.addRewards(reward.amount);
			this.props.saveCurrentBuild();

			AdMobRewarded.removeAllListeners();

			this.setState({ loaded: false });
		});

		AdMobRewarded.addEventListener('rewardedVideoDidLoad', () => {
			console.log('rewardedVideoDidLoad');

			this.setState({ loaded: true }, () => console.log('rewardedVideoDidLoad'));
		});

		AdMobRewarded.addEventListener('rewardedVideoDidFailToLoad', (error) => {
			console.log('rewardedVideoDidFailToLoad', error);

			AdMobRewarded.removeAllListeners();

			Actions.summary();
		});

		AdMobRewarded.addEventListener('rewardedVideoDidOpen', () => {
			console.log('rewardedVideoDidOpen');
		});

		AdMobRewarded.addEventListener('rewardedVideoDidClose', () => {
			console.log('rewardedVideoDidClose');

			AdMobRewarded.removeAllListeners();

			Actions.summary();
		});

		AdMobRewarded.addEventListener('rewardedVideoWillLeaveApplication', () => {
			console.log('rewardedVideoWillLeaveApplication');
		});

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