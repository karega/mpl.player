/* badges.js */

/** External Module Dependencies **/
import React, {PropTypes} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';

/** Global Module Dependencies **/
import * as badgeImages from './../../../config/constants';
import maxed from './../../../app-state/builds-maxed';

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
			<View style={[sStyles.badgesContainer, { width: width, height: height - 160 }]}>
				<ScrollView
					contentContainerStyle={sStyles.scrollContainer}>
					{
						this.build && Object.keys(this.build).map((key, index) => {
							if (key.slice(0, 1) == 'K' || key.slice(0, 1) == 'U') {
								let	badge = null;

								if (this.build[key].indexOf('HoF') > -1) {
									badge = (
										<View key={index} style={[sStyles.badgeItem, { width: (width * 0.25), height: 128, alignItems: 'flex-end' }]}>
											<Image source={badgeImages.badgeMap['hof']} style={[sStyles.badgeImage, { width: (width * 0.25), height: 64 }]} />
											<Text style={[sStyles.skillText, sStyles.badgeName]}>{this.build[key].replace('(HoF)', '')}</Text>
										</View>
									)
								}

								if (this.build[key].indexOf('Gold') > -1) {
									badge = (
										<View key={index} style={[sStyles.badgeItem, { width: (width * 0.25), height: 128, alignItems: 'flex-end' }]}>
											<Image source={badgeImages.badgeMap['gold']} style={[sStyles.badgeImage, { width: (width * 0.25), height: 64 }]} />
											<Text style={[sStyles.skillText, sStyles.badgeName]}>{this.build[key].replace('(Gold)', '')}</Text>
										</View>
									)
								}

								if (this.build[key].indexOf('Silver') > -1) {
									badge = (
										<View key={index} style={[sStyles.badgeItem, { width: (width * 0.25), height: 128, alignItems: 'flex-end' }]}>
											<Image source={badgeImages.badgeMap['silver']} style={[sStyles.badgeImage, { width: (width * 0.25), height: 64 }]} />
											<Text style={[sStyles.skillText, sStyles.badgeName]}>{this.build[key].replace('(Silver)', '')}</Text>
										</View>
									)
								}

								if (this.build[key].indexOf('Bronze') > -1) {
									badge = (
										<View key={index} style={[sStyles.badgeItem, { width: (width * 0.25), height: 128, alignItems: 'flex-end' }]}>
											<Image source={badgeImages.badgeMap['bronze']} style={[sStyles.badgeImage, { width: (width * 0.25), height: 64 }]} />
											<Text style={[sStyles.skillText, sStyles.badgeName]}>{this.build[key].replace('(Bronze)', '')}</Text>
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