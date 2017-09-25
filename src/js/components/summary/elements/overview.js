/* overview.js */

/** External Module Dependencies **/
import React, {PropTypes} from 'react';
import {
	Dimensions,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableNativeFeedback,
	View
} from 'react-native';

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
		const BIO = (this.props.current && this.props.current.skills) ? this.props.current.skills : null;
		const SKILLS = (this.props.current && this.props.current.archetype) ? this.props.current.archetype : null;
		const COMPARE = !this.props.comparator;

		const buildAvatar = require('./../../../assets/mplb-avatar.png');

		const pbcHeight = this.props.comparator ? height - 160 : height - 160;

		return (
			<View style={[sStyles.playerBuildContainer, { height: pbcHeight , flexDirection: !COMPARE ? 'column' : 'row' }]}>
				{ BIO && (
					<View style={sStyles.skillContainer}>
						<View style={sStyles.skillItem}>
							{ COMPARE && <Text style={sStyles.itemHeader}>PRIMARY</Text> }
							<Image source={badgeImages.skillMap[BIO['primary']]} style={[sStyles.skillImage, { width: 39, height: 64, opacity: 1 }]}/>
							<Text style={sStyles.skillText}>{BIO['primary']}</Text>
						</View>
						<View style={sStyles.skillItem}>
							{ COMPARE && <Text style={sStyles.itemHeader}>SECONDARY</Text> }
							<Image source={badgeImages.skillMap[BIO['secondary']]} style={[sStyles.skillImage, { width: 39, height: 64, opacity: 1 }]}/>
							<Text style={sStyles.skillText}>{BIO['secondary']}</Text>
						</View>
					</View>
				)}
				{ COMPARE && BIO && (
					<View style={sStyles.playerContainer}>
						<Image source={buildAvatar} style={[sStyles.buildAvatar, { height: pbcHeight }]}/>
						<Image source={badgeImages.primarySkillMap[BIO['primary']]} style={[sStyles.buildAvatar, { width: (width / 2), height: ((pbcHeight) / 2), position: 'absolute', left: 7.5, top: 60, opacity: 0.5 }]}/>
						<Image source={badgeImages.secondarySkillMap[BIO['secondary']]} style={[sStyles.buildAvatar, { width: (width / 2), height: ((pbcHeight) / 2), position: 'absolute', left: 7.5, top: 60, opacity: 0.5 }]}/>
					</View>
				)}
				{ SKILLS && (
					<View style={sStyles.badgeContainer}>
						<View style={sStyles.badgePanel}>
							{ COMPARE && (
								<View style={[sStyles.badgeItem, { marginBottom: 10, height: 80 }]}>
									<Text style={sStyles.itemHeader}>TOTAL{'\n'}BADGES</Text>
									<Text style={sStyles.badgeText}>{SKILLS['T']}</Text>
								</View>
							)}
							{ COMPARE && (
								<View style={[{ marginBottom: 10 }]}>
									<Text style={sStyles.itemHeader}>KEY{'\n'}BADGES</Text>
								</View>
							)}
							<View style={sStyles.badgeItem}>
								<Image source={badgeImages.badgeMap['hof']} style={[sStyles.badgeImage, { position: 'absolute', left: COMPARE ? 0 : -5, width: (width * 0.25), height: 64}]} />
								<Text style={sStyles.badgeText}>{SKILLS['H']}</Text>
							</View>
							<View style={sStyles.badgeItem}>
								<Image source={badgeImages.badgeMap['gold']} style={[sStyles.badgeImage, { position: 'absolute', left: COMPARE ? 0 : -5, width: (width * 0.25), height: 64}]} />
								<Text style={sStyles.badgeText}>{SKILLS['G']}</Text>
							</View>
							<View style={sStyles.badgeItem}>
								<Image source={badgeImages.badgeMap['silver']} style={[sStyles.badgeImage, { position: 'absolute', left: COMPARE ? 0 : -5, width: (width * 0.25), height: 64}]} />
								<Text style={sStyles.badgeText}>{SKILLS['S']}</Text>
							</View>
							<View style={sStyles.badgeItem}>
								<Image source={badgeImages.badgeMap['bronze']} style={[sStyles.badgeImage, { position: 'absolute', left: COMPARE ? 0 : -5, width: (width * 0.25), height: 64}]} />
								<Text style={sStyles.badgeText}>{SKILLS['B']}</Text>
							</View>
						</View>
					</View>
				)}
			</View>
		)
	}
}

Overview.propTypes = { };

export default Overview;