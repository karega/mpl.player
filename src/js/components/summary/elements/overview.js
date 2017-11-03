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
		const COMPARE = this.props.comparator;

		const buildAvatar = require('./../../../assets/mplb-avatar.png');
		const pbcHeight = this.props.height;
		const pbcWidth = this.props.width;
		const badgeWidth = { width: pbcWidth / 8, height: 64, maxWidth: pbcWidth / 8, maxHeight: 64 };

		return (
			<View style={[sStyles.playerBuildContainer, { maxWidth: pbcWidth, maxHeight: pbcHeight , flexDirection: COMPARE ? 'column' : 'row' }]}>
				{ BIO && (
					<View style={[sStyles.skillContainer, { width: COMPARE ? pbcWidth : pbcWidth / 4, maxWidth: COMPARE ? pbcWidth : pbcWidth / 4 }]}>
						<View style={[sStyles.skillItem]}>
							{ !COMPARE && <Text style={sStyles.itemHeader}>POSITION</Text> }
							<Text style={sStyles.positionText}>{BIO['position'].toUpperCase()}</Text>
						</View>
						<View style={[sStyles.skillItem]}>
							{ !COMPARE && <Text style={sStyles.itemHeader}>PRIMARY</Text> }
							<Image key={'summary_skill_primary'} source={badgeImages.skillMap[BIO['primary']]} style={[sStyles.skillImage, { width: 45, height: 74, maxWidth: 45, maxHeight: 74  , opacity: 1 }]}/>
							<Text style={[sStyles.skillText, { paddingLeft: 4, paddingRight: 4 }]}>{BIO['primary']}</Text>
						</View>
						<View style={[sStyles.skillItem]}>
							{ !COMPARE && <Text style={sStyles.itemHeader}>SECONDARY</Text> }
							<Image key={'summary_skill_secondary'} source={badgeImages.skillMap[BIO['secondary']]} style={[sStyles.skillImage, { width: 45, height: 74, maxWidth: 45, maxHeight: 74  , opacity: 1 }]}/>
							<Text style={[sStyles.skillText, { paddingLeft: 4, paddingRight: 4 }]}>{BIO['secondary']}</Text>
						</View>
					</View>
				)}
				{ !COMPARE && BIO && (
					<View style={[sStyles.playerContainer, { width: (pbcWidth / 2), maxWidth: (pbcWidth / 2), height: pbcHeight, maxHeight: pbcHeight }]}>
						<Image key={'summary_pbc'} source={buildAvatar} style={[sStyles.buildAvatar, { width: (pbcWidth / 2), maxWidth: (pbcWidth / 2), height: (pbcWidth / 2) * 2, maxHeight: (pbcWidth / 2) * 2 }]}/>
						<Image key={'summary_pbc_primary'} source={badgeImages.primarySkillMap[BIO['primary']]} style={[sStyles.buildAvatar, { maxWidth: pbcWidth / 3.75, maxHeight: (pbcHeight) / 2.75, position: 'absolute', left: (pbcWidth / 2) * 0.5, top: 50, opacity: 0.5, marginLeft: -(((pbcWidth / 3.75) * 0.5) - 5) }]}/>
						<Image key={'summary_pbc_secondary'} source={badgeImages.secondarySkillMap[BIO['secondary']]} style={[sStyles.buildAvatar, { maxWidth: pbcWidth / 3.75, maxHeight: (pbcHeight) / 2.75, position: 'absolute', left: (pbcWidth / 2) * 0.5, top: 50, opacity: 0.5, marginLeft: -(((pbcWidth / 3.75) * 0.5) - 5) }]}/>
					</View>
				)}
				{ SKILLS && (
					<View style={[sStyles.badgeContainer, { width: COMPARE ? pbcWidth : pbcWidth / 4, maxWidth: COMPARE ? pbcWidth : pbcWidth / 4 }]}>
						<View style={[sStyles.badgePanel, { height: pbcHeight }]}>
							{ !COMPARE && (
								<View style={[sStyles.badgeItem, { marginBottom: 10, height: 80 }]}>
									<Text style={sStyles.itemHeader}>TOTAL{'\n'}BADGES</Text>
									<Text style={[sStyles.badgeText, { paddingTop: 0 }]}>{((+SKILLS['H']) + (+SKILLS['G']) + (+SKILLS['S']) + (SKILLS['B']))}</Text>
								</View>
							)}
							{ !COMPARE && (
								<View style={[{ marginBottom: 10 }]}>
									<Text style={sStyles.itemHeader}>KEY{'\n'}BADGES</Text>
								</View>
							)}
							<View style={sStyles.badgeItem}>
								<View style={sStyles.badgeImageContainer}>
									<Image key={'overview_badge_h'} source={badgeImages.badgeMap['hof']} style={{ width: 45, height: 74, maxWidth: 45, maxHeight: 74 }} />
								</View>
								<Text style={[sStyles.badgeText]}>{SKILLS['H']}</Text>
							</View>
							<View style={sStyles.badgeItem}>
								<View style={sStyles.badgeImageContainer}>
									<Image key={'overview_badge_g'} source={badgeImages.badgeMap['gold']} style={{ width: 45, height: 74, maxWidth: 45, maxHeight: 74 }} />
								</View>
								<Text style={[sStyles.badgeText]}>{SKILLS['G']}</Text>
							</View>
							<View style={sStyles.badgeItem}>
								<View style={sStyles.badgeImageContainer}>
									<Image key={'overview_badge_s'} source={badgeImages.badgeMap['silver']} style={{ width: 45, height: 74, maxWidth: 45, maxHeight: 74 }} />
								</View>
								<Text style={[sStyles.badgeText]}>{SKILLS['S']}</Text>
							</View>
							<View style={sStyles.badgeItem}>
								<View style={sStyles.badgeImageContainer}>
									<Image key={'overview_badge_b'} source={badgeImages.badgeMap['bronze']} style={{ width: 45, height: 74, maxWidth: 45, maxHeight: 74 }} />
								</View>
								<Text style={[sStyles.badgeText]}>{SKILLS['B']}</Text>
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