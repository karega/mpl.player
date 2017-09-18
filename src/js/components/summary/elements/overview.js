/* overview.js */

/** External Module Dependencies **/
import React, {PropTypes} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

/** Global Module Dependencies **/
import * as badgeImages from './../../../config/constants';

/** Internal Module Dependencies **/
import sStyles from './../styles/summary-styles';

type OverviewPropTypes = { };

type OverviewStateTypes = { };

const { width, height } = Dimensions.get('window');

class Overview extends React.PureComponent<any, OverviewPropTypes, OverviewStateTypes> {
	props: OverviewPropTypes;
	state: OverviewStateTypes;

	constructor(props: OverviewPropTypes): void {
		super(props);

		this.state = { };
	}

	render() {
		const BIO = this.props.current.skills;
		const SKILLS = this.props.current.archetype;

		const buildAvatar = require('./../../../assets/mplb-avatar.png');

		return (
			<View style={[sStyles.playerBuildContainer, { height: height - 160 }]}>
				<View style={sStyles.skillContainer}>
					<View style={sStyles.skillItem}>
						<Text style={sStyles.itemHeader}>PRIMARY</Text>
						<Image source={badgeImages.skillMap[BIO['primary']]} style={[sStyles.buildAvatar, { width: 39, height: 64, opacity: 1 }]}/>
						<Text style={sStyles.skillText}>{BIO['primary']}</Text>
					</View>
					<View style={sStyles.skillItem}>
						<Text style={sStyles.itemHeader}>SECONDARY</Text>
						<Image source={badgeImages.skillMap[BIO['secondary']]} style={[sStyles.buildAvatar, { width: 39, height: 64, opacity: 1 }]}/>
						<Text style={sStyles.skillText}>{BIO['secondary']}</Text>
					</View>
				</View>
				<View style={sStyles.playerContainer}>
					<Image source={buildAvatar} style={[sStyles.buildAvatar, { height: height - 160 }]}/>
					<Image source={badgeImages.primarySkillMap[BIO['primary']]} style={[sStyles.buildAvatar, { width: (width / 2), height: ((height - 160) / 2), position: 'absolute', left: 7.5, top: 60, opacity: 0.5 }]}/>
					<Image source={badgeImages.secondarySkillMap[BIO['secondary']]} style={[sStyles.buildAvatar, { width: (width / 2), height: ((height - 160) / 2), position: 'absolute', left: 7.5, top: 60, opacity: 0.5 }]}/>
				</View>
				<View style={sStyles.badgeContainer}>
					<View style={sStyles.badgePanel}>
						<View style={[sStyles.badgeItem, {marginBottom: 10}]}>
							<Text style={sStyles.itemHeader}>TOTAL{'\n'}BADGES</Text>
							<Text style={sStyles.badgeText}>{SKILLS['T']}</Text>
						</View>
						<View>
							<Text style={sStyles.itemHeader}>KEY{'\n'}BADGES</Text>
						</View>
						<View style={sStyles.badgeItem}>
							<Image source={badgeImages.badgeMap['hof']} style={[sStyles.badgeImage, { position: 'absolute', marginLeft: -19.5, left: ((width * 0.25) / 2), top: 7, width: 39, height: 64}]} />
							<Text style={sStyles.badgeText}>{SKILLS['H']}</Text>
						</View>
						<View style={sStyles.badgeItem}>
							<Image source={badgeImages.badgeMap['gold']} style={[sStyles.badgeImage, { position: 'absolute', marginLeft: -19.5, left: ((width * 0.25) / 2), top: 7, width: 39, height: 64}]} />
							<Text style={sStyles.badgeText}>{SKILLS['G']}</Text>
						</View>
						<View style={sStyles.badgeItem}>
							<Image source={badgeImages.badgeMap['silver']} style={[sStyles.badgeImage, { position: 'absolute', marginLeft: -19.5, left: ((width * 0.25) / 2), top: 7, width: 39, height: 64}]} />
							<Text style={sStyles.badgeText}>{SKILLS['S']}</Text>
						</View>
						<View style={sStyles.badgeItem}>
							<Image source={badgeImages.badgeMap['bronze']} style={[sStyles.badgeImage, { position: 'absolute', marginLeft: -19.5, left: ((width * 0.25) / 2), top: 7, width: 39, height: 64}]} />
							<Text style={sStyles.badgeText}>{SKILLS['B']}</Text>
						</View>
					</View>
				</View>
			</View>
		)
	}
}

Overview.propTypes = { };

export default Overview;