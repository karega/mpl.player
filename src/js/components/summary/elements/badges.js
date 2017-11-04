/* badges.js */

/** External Module Dependencies **/
import React, {PropTypes} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';

/** Global Module Dependencies **/
import * as badgeImages from './../../../config/constants';
import maxed from './../../../app-state/builds-maxed';
import badge_icons from './../../../app-state/badge-icons';

/** Internal Module Dependencies **/
import sStyles from './../styles/summary-styles';

type BadgesPropTypes = { };

type BadgesStateTypes = { };

const { width, height } = Dimensions.get('window');

class Badges extends React.PureComponent<any, BadgesPropTypes, BadgesStateTypes> {
	props: BadgesPropTypes;
	state: BadgesStateTypes;

	constructor(props: BadgesPropTypes): void {
		super(props);

		this.state = { };

		this.shootingIcon = require('./../../../assets/badge-shooting.png');
		this.athleticismIcon = require('./../../../assets/badge-athleticism.png');
		this.reboundingIcon = require('./../../../assets/badge-reb.png');
		this.defensiveIcon = require('./../../../assets/badge-def.png');
		this.playmakingIcon = require('./../../../assets/badge-pnbh.png');
		this.slashingIcon = require('./../../../assets/badge-dnf.png');

		this.getBadgeIcon = (badgeName) => {
			switch (badge_icons[badgeName]) {
				case 'shooting':
					return this.shootingIcon;
				case 'athleticism':
					return this.athleticismIcon;
				case 'reb':
					return this.reboundingIcon;
				case 'def':
					return this.defensiveIcon;
				case 'pnbh':
					return this.playmakingIcon;
				case 'dnf':
					return this.slashingIcon;
				default:
					return null;
			}

			return null;
		}

		this.build = maxed.filter((build, index) => {
			return (
				build['Position'].toLowerCase() === props.current.bio.position.toLowerCase() &&
				build['Primary Skill'].toLowerCase() === props.current.skills.primary.toLowerCase() &&
				build['Secondary Skill'].toLowerCase() === props.current.skills.secondary.toLowerCase()
			)
		})[0]
	}

	render() {
		return (
			<View style={[sStyles.badgesContainer, { width: width, height: height - 115 }]}>
				<ScrollView
					contentContainerStyle={sStyles.scrollContainer}>
					{
						this.build && Object.keys(this.build).map((buildKey, index) => {
							if (buildKey.slice(0, 1) == 'K' || buildKey.slice(0, 1) == 'U') {
								let	badge = null;
								let badgeName = null;

								if (this.build[buildKey].indexOf('HoF') > -1) {
									badgeName = this.build[buildKey].replace(' (HoF)', '');

									badge = badge_icons[badgeName] && (
										<View key={index} style={[sStyles.badgeItem, { width: (width * 0.25), height: 128, alignItems: 'center' }]}>
											<Image key={'badge_icon_h' + buildKey} source={badgeImages.badgeMap['hof']} style={[sStyles.badgeImage, { width: 50, height: 82, maxWidth: 50, maxHeight: 82 }]} />
											<View style={sStyles.badgeType}>
												<Image key={'badge_cat_h' + buildKey} source={this.getBadgeIcon(badgeName)} style={[sStyles.badgeImage, { marginTop: 10, width: 50, height: 82, maxWidth: 50, maxHeight: 82 }]} />
											</View>
											<Text style={[sStyles.skillText, sStyles.badgeName]}>{badgeName}</Text>
										</View>
									)
								}

								if (this.build[buildKey].indexOf('Gold') > -1) {
									badgeName = this.build[buildKey].replace(' (Gold)', '');

									badge = badge_icons[badgeName] && (
										<View key={index} style={[sStyles.badgeItem, { width: (width * 0.25), height: 128, alignItems: 'center' }]}>
											<Image key={'badge_icon_g' + buildKey} source={badgeImages.badgeMap['gold']} style={[sStyles.badgeImage, { width: 50, height: 82, maxWidth: 50, maxHeight: 82 }]} />
											<View style={sStyles.badgeType}>
												<Image key={'badge_cat_g' + buildKey} source={this.getBadgeIcon(badgeName)} style={[sStyles.badgeImage, { marginTop: 10, width: 50, height: 82, maxWidth: 50, maxHeight: 82 }]} />
											</View>
											<Text style={[sStyles.skillText, sStyles.badgeName]}>{badgeName}</Text>
										</View>
									)
								}

								if (this.build[buildKey].indexOf('Silver') > -1) {
									badgeName = this.build[buildKey].replace(' (Silver)', '');

									badge = badge_icons[badgeName] && (
										<View key={index} style={[sStyles.badgeItem, { width: (width * 0.25), height: 128, alignItems: 'center' }]}>
											<Image key={'badge_icon_s' + buildKey} source={badgeImages.badgeMap['silver']} style={[sStyles.badgeImage, { width: 50, height: 82, maxWidth: 50, maxHeight: 82 }]} />
											<View style={sStyles.badgeType}>
												<Image key={'badge_cat_s' + buildKey} source={this.getBadgeIcon(badgeName)} style={[sStyles.badgeImage, { marginTop: 10, width: 50, height: 82, maxWidth: 50, maxHeight: 82 }]} />
											</View>
											<Text style={[sStyles.skillText, sStyles.badgeName]}>{badgeName}</Text>
										</View>
									)
								}

								if (this.build[buildKey].indexOf('Bronze') > -1) {
									badgeName = this.build[buildKey].replace(' (Bronze)', '');

									badge = badge_icons[badgeName] && (
										<View key={index} style={[sStyles.badgeItem, { width: (width * 0.25), height: 128, alignItems: 'center' }]}>
											<Image key={'badge_icon_b' + buildKey} source={badgeImages.badgeMap['bronze']} style={[sStyles.badgeImage, { width: 50, height: 82, maxWidth: 50, maxHeight: 82 }]} />
											<View style={sStyles.badgeType}>
												<Image key={'badge_cat_b' + buildKey} source={this.getBadgeIcon(badgeName)} style={[sStyles.badgeImage, { marginTop: 10, width: 50, height: 82, maxWidth: 50, maxHeight: 82 }]} />
											</View>
											<Text style={[sStyles.skillText, sStyles.badgeName]}>{badgeName}</Text>
										</View>
									)
								}

								return badge;
							}
						})
					}
				</ScrollView>
			</View>
		)
	}
}

Badges.propTypes = { };

export default Badges;