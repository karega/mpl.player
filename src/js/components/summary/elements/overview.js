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
		const BIO = Object.assign({ }, (this.props.current && this.props.current.skills) ? this.props.current.skills : null, (this.props.current && this.props.current.bio) ? this.props.current.bio : null)
		const SKILLS = (this.props.current && this.props.badges[0]) ? this.props.badges[0] : null;
		const COMPARE = !this.props.comparator;

		const buildAvatar = require('./../../../assets/mplb-avatar.png');
		const adjHeight = height - 160;
		const pbcHeight = COMPARE ? adjHeight : this.props.height;
		const pbcWidth = this.props.width;
		const badgeWidth = { width: pbcWidth / 4, height: 64, maxWidth: pbcWidth, maxHeight: 64 };

		return (
			<View style={[sStyles.playerBuildContainer, { maxWidth: pbcWidth, maxHeight: pbcHeight , flexDirection: !COMPARE ? 'column' : 'row' }]}>
				{ BIO && (
					<View style={[sStyles.skillContainer, { maxWidth: pbcWidth }]}>
						<View style={[sStyles.skillItem]}>
							{ COMPARE && <Text style={sStyles.itemHeader}>POSITION</Text> }
							<Text style={sStyles.positionText}>{BIO['position'].toUpperCase()}</Text>
						</View>
						<View style={[sStyles.skillItem]}>
							{ COMPARE && <Text style={sStyles.itemHeader}>PRIMARY</Text> }
							<Image key={'summary_skill_primary'} source={badgeImages.skillMap[BIO['primary']]} style={[sStyles.skillImage, { width: 39, height: 64, maxWidth: 39, maxHeight: 64, opacity: 1 }]}/>
							<Text style={[sStyles.skillText, { paddingLeft: 4, paddingRight: 4 }]}>{BIO['primary']}</Text>
						</View>
						<View style={[sStyles.skillItem]}>
							{ COMPARE && <Text style={sStyles.itemHeader}>SECONDARY</Text> }
							<Image key={'summary_skill_secondary'} source={badgeImages.skillMap[BIO['secondary']]} style={[sStyles.skillImage, { width: 39, height: 64, maxWidth: 39, maxHeight: 64, opacity: 1 }]}/>
							<Text style={[sStyles.skillText, { paddingLeft: 4, paddingRight: 4 }]}>{BIO['secondary']}</Text>
						</View>
					</View>
				)}
				{ COMPARE && BIO && (
					<View style={[sStyles.playerContainer, { maxWidth: (pbcWidth / 2), height: pbcHeight }]}>
						<Image key={'summary_pbc'} source={buildAvatar} style={[sStyles.buildAvatar, { maxWidth: pbcWidth / 2, maxHeight: pbcHeight - 60 }]}/>
						<Image key={'summary_pbc_primary'} source={badgeImages.primarySkillMap[BIO['primary']]} style={[sStyles.buildAvatar, { maxWidth: pbcWidth / 3.75, maxHeight: (pbcHeight) / 2.75, position: 'absolute', left: (pbcWidth / 2) * 0.5, top: 50, opacity: 0.5, marginLeft: -(((pbcWidth / 3.75) * 0.5) - 5) }]}/>
						<Image key={'summary_pbc_secondary'} source={badgeImages.secondarySkillMap[BIO['secondary']]} style={[sStyles.buildAvatar, { maxWidth: pbcWidth / 3.75, maxHeight: (pbcHeight) / 2.75, position: 'absolute', left: (pbcWidth / 2) * 0.5, top: 50, opacity: 0.5, marginLeft: -(((pbcWidth / 3.75) * 0.5) - 5) }]}/>
					</View>
				)}
				{ SKILLS && (
					<View style={[sStyles.badgeContainer, { maxWidth: pbcWidth / 4 }]}>
						<View style={[sStyles.badgePanel, { height: adjHeight }]}>
							{ COMPARE && (
								<View style={[sStyles.badgeItem, { marginBottom: 10, height: 80 }]}>
									<Text style={sStyles.itemHeader}>TOTAL{'\n'}BADGES</Text>
									<Text style={[sStyles.badgeText, { paddingTop: 0 }]}>{((+SKILLS['H']) + (+SKILLS['G']) + (+SKILLS['S']) + (SKILLS['B']))}</Text>
								</View>
							)}
							{ COMPARE && (
								<View style={[{ marginBottom: 10 }]}>
									<Text style={sStyles.itemHeader}>KEY{'\n'}BADGES</Text>
								</View>
							)}
							<View style={sStyles.badgeItem}>
								<View style={sStyles.badgeImageContainer}>
									<Image key={'overview_badge_h'} source={badgeImages.badgeMap['hof']} style={[sStyles.badgeImage, badgeWidth]} />
								</View>
								<Text style={[sStyles.badgeText, badgeWidth]}>{SKILLS['H']}</Text>
							</View>
							<View style={sStyles.badgeItem}>
								<View style={sStyles.badgeImageContainer}>
									<Image key={'overview_badge_g'} source={badgeImages.badgeMap['gold']} style={[sStyles.badgeImage, badgeWidth]} />
								</View>
								<Text style={[sStyles.badgeText, badgeWidth]}>{SKILLS['G']}</Text>
							</View>
							<View style={sStyles.badgeItem}>
								<View style={sStyles.badgeImageContainer}>
									<Image key={'overview_badge_s'} source={badgeImages.badgeMap['silver']} style={[sStyles.badgeImage, badgeWidth]} />
								</View>
								<Text style={[sStyles.badgeText, badgeWidth]}>{SKILLS['S']}</Text>
							</View>
							<View style={sStyles.badgeItem}>
								<View style={sStyles.badgeImageContainer}>
									<Image key={'overview_badge_b'} source={badgeImages.badgeMap['bronze']} style={[sStyles.badgeImage, badgeWidth]} />
								</View>
								<Text style={[sStyles.badgeText, badgeWidth]}>{SKILLS['B']}</Text>
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