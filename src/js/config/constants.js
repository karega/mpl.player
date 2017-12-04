/* constants.js */
import React, {PropTypes} from 'react';
import {
	Image,
	Share,
	Text,
	TouchableWithoutFeedback,
	View
} from 'react-native';
import {
	CustomTabs,
	ANIMATIONS_FADE,
	ANIMATIONS_SLIDE
} from 'react-native-custom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';
import {Avatar} from './../lib/react-native-material-design';

var FontAwesome = require('react-native-vector-icons/FontAwesome');

const badgeBronze = require('./../assets/badge-bronze.png');
const badgeSilver = require('./../assets/badge-silver.png');
const badgeGold = require('./../assets/badge-gold.png');
const badgeHof = require('./../assets/badge-hof.png');

export const badgeMap = {
	'bronze': badgeBronze,
	'silver': badgeSilver,
	'gold': badgeGold,
	'hof': badgeHof,
}

const icnDefense = require('./../assets/icn-def.png');
const icnDnf = require('./../assets/icn-dnf.png');
const icnGc = require('./../assets/icn-gc.png');
const icnPnBh = require('./../assets/icn-pnbh.png');
const icnSs = require('./../assets/icn-ss.png');

const skillDef = require('./../assets/skill-def.png');
const skillDnf = require('./../assets/skill-dnf.png');
const skillGc = require('./../assets/skill-gc.png');
const skillPnBh = require('./../assets/skill-pnbh.png');
const skillSc = require('./../assets/skill-sc.png');
const skillSs = require('./../assets/skill-ss.png');
const skillPs = require('./../assets/skill-ps.png');

export const skillMap = {
	'Passing & Ball Handling': skillPnBh,
	'Rebounding': skillGc,
	'Shot Creating': skillSc,
	'3 Point Shooting': skillSs,
	'Driving & Finishing': skillDnf,
	'Defending': skillDef,
	'Post Scoring': skillPs,
}

const skillDefP = require('./../assets/skill-def-p.png');
const skillDnfP = require('./../assets/skill-dnf-p.png');
const skillGcP = require('./../assets/skill-gc-p.png');
const skillPnBhP = require('./../assets/skill-pnbh-p.png');
const skillScP = require('./../assets/skill-sc-p.png');
const skillSsP = require('./../assets/skill-ss-p.png');
const skillPsP = require('./../assets/skill-ps-p.png');

export const primarySkillMap = {
	'Passing & Ball Handling': skillPnBhP,
	'Shot Creating': skillScP,
	'Rebounding': skillGcP,
	'3 Point Shooting': skillSsP,
	'Driving & Finishing': skillDnfP,
	'Defending': skillDefP,
	'Post Scoring': skillPsP,
}

const skillDefS = require('./../assets/skill-def-s.png');
const skillDnfS = require('./../assets/skill-dnf-s.png');
const skillGcS = require('./../assets/skill-gc-s.png');
const skillPnBhS = require('./../assets/skill-pnbh-s.png');
const skillScS = require('./../assets/skill-sc-s.png');
const skillSsS = require('./../assets/skill-ss-s.png');
const skillPsS = require('./../assets/skill-ps-s.png');

export const secondarySkillMap = {
	'Passing & Ball Handling': skillPnBhS,
	'Shot Creating': skillScS,
	'Rebounding': skillGcS,
	'3 Point Shooting': skillSsS,
	'Driving & Finishing': skillDnfS,
	'Defending': skillDefS,
	'Post Scoring': skillPsS,
}

const sStyles = {
	sidebar: {
		alignItems: 'flex-start',
		backgroundColor: '#dbd8da',
		justifyContent: 'flex-start',
		flex: 1,
		flexDirection: 'column',
	},
	sbProfileName: {
		alignItems: 'flex-start',
		alignSelf: 'stretch',
		backgroundColor: '#262426',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		padding: 8,
		paddingTop: 10,
		paddingBottom: 10,
		flexWrap: 'wrap',
	},
	sbProfileImage: {
		width: 48,
		height: 48,
		maxWidth: 48
	},
	sbProfilePanel: {
		height: 50,
		backgroundColor: '#262426',
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	sbProfileText: {
		color: '#dbd8da',
		fontSize: 16,
		fontWeight: '900',
		marginLeft: 8,
		marginBottom: 4,
		flex: 1,
	},
	sbCurrencyPanel: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	sbCurrencyText: {
		color: '#dbd8da',
		fontSize: 16,
		fontWeight: '900',
		marginLeft: 4,
		justifyContent: 'flex-end',
	},
	menuItems: {
		flex: 6,
		flexDirection: 'column',
	},
	menuItem: {
		width: 284,
		alignSelf: 'stretch',
		padding: 4,
	},
	menuButton: {
		padding: 4,
		paddingLeft: 12,
	},
	menuHeader: {
		color: '#262426',
		fontSize: 28,
		fontWeight: '100',
	},
	menuLabel: {
		color: '#262426',
		fontSize: 18,
		fontWeight: '100',
	},
	sbFooter: {
		alignSelf: 'stretch',
		alignItems: 'flex-end',
		borderTopWidth: 1,
		borderTopColor: '#262426',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 16,
	},
	loginIcon: {
		padding: 8,
	},
	versionText: {
		alignSelf: 'flex-end',
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		bottom: 12,
		right: 12,
		color: '#262426',
		position: 'absolute',
		fontSize: 12,
		opacity: 0.75,
	},
}

const _shareText = () => {
	Share.share({
		message: 'Take your game to the next level.  Download the MyPark Legends: Player Lab app! | http://lab.myparklegends.com',
		url: 'http://lab.myparklegends.com',
		title: 'MyPark Legends - Player Lab',
	}, {
		dialogTitle: 'Share',
		tintColor: '#1673c0'
	})
	.then(_showResult)
	.catch((error) => console.log('error', {result: 'error: ' + error.message}));
}

const _showResult = (result) => {
	if (result.action === Share.sharedAction) {
		if (result.activityType) {
			console.log('info', {result: 'shared with an activityType: ' + result.activityType});
		} else {
			console.log('info', {result: 'shared'});
		}
	} else if (result.action === Share.dismissedAction) {
		console.log('info', {result: 'dismissed'});
	}
}

const browseTo = (url) => {
	var option = {
		toolbarColor: '#3e355c',
		enableUrlBarHiding: true,
		showPageTitle: false,
		enableDefaultShare: true,
		animations: ANIMATIONS_FADE
	}

	CustomTabs.openURL(url, option).then((launched: boolean) => {
		console.log(`Launched custom tabs: ${launched}`);
	}).catch(err => {
		console.error(err)
	});
}

export const navigationView = (profile) => {
	var	legendaryIcon = require('./../assets/legendary.png');

	return (
		<View style={[sStyles.sidebar]}>
			{
				profile && (
					<View style={sStyles.sbProfileName}>
						<Image
							key={'summary_sbProfileImage'}
							style={sStyles.sbProfileImage}
							source={{ uri: profile.picture.data.url }}/>
						<View style={sStyles.sbProfilePanel}>
							<Text style={sStyles.sbProfileText}>{profile.name}</Text>
							<View style={sStyles.sbCurrencyPanel}>
								<Image key={'summary_sbLegendary'} style={{ maxWidth: 32, width: 32, maxHeight: 24, height: 24, marginLeft: 8, }} source={legendaryIcon}/>
								<Text style={sStyles.sbCurrencyText}>{profile.legendary ? profile.legendary : 0.00}</Text>
							</View>
						</View>
					</View>
				)
			}
			<View style={sStyles.menuItems}>
				{[{
					title: 'START',
					subtitle: 'NEW BUILD',
					action: (event) => {
						Actions.builder();
					}
				},{
					title: 'SEARCH',
					subtitle: 'BUILDS',
					action: (event) => {
						Actions.browser({ comparator: false });
					}
				},{
					title: 'COMPARE',
					subtitle: 'BUILDS',
					action: (event) => {
						Actions.compare();
					}
				},{
					title: 'BUILD',
					subtitle: 'ELITE CREW',
					disabled: true,
					action: (event) => { }
				},{
					title: 'TERMS',
					subtitle: 'AND CONDITIONS',
					action: (event) => {
						browseTo('https://app.termly.io/document/terms-of-use-for-website/63873dbc-c8fa-4b79-957e-8322e72c60a8')
					}
				}].map((menu, index) => {
					return (
						<View
							key={'menu_' + index}
							style={sStyles.menuItem}>
							<TouchableWithoutFeedback
								onPress={menu.action}
								disabled={menu.disabled}>
								<View style={sStyles.menuButton}>
									<Text style={[sStyles.menuHeader, { color: menu.disabled ? '#9d9d9d' : '#262426' }]}>{menu.title}</Text>
									<Text style={[sStyles.menuLabel, { color: menu.disabled ? '#9d9d9d' : '#262426' }]}>{menu.subtitle}</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
					);
				})}
			</View>
			<View style={sStyles.sbFooter}>
				<TouchableWithoutFeedback
					onPress={() => _shareText()}>
					<View style={{ alignSelf: 'flex-start' }}>
						<Icon
							color={'#262426'}
							name={'share'}
							size={32}
							style={sStyles.loginIcon} />
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback
					onPress={() => Actions.settings() }>
					<View style={{ alignSelf: 'flex-start' }}>
						<FontAwesome
							color={'#262426'}
							backgroundColor={'#3B5998'}
							borderRadius={0}
							name={'cog'}
							size={32}
							style={sStyles.loginIcon} />
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback
					onPress={() => browseTo('https://www.facebook.com/MyParkLegends/')}>
					<View style={{ alignSelf: 'flex-start' }}>
						<FontAwesome
							color={'#262426'}
							backgroundColor={'#3B5998'}
							borderRadius={0}
							name={'facebook'}
							size={32}
							style={sStyles.loginIcon} />
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback
					onPress={() => browseTo('https://twitter.com/myparklegends')}>
					<View style={{ alignSelf: 'flex-start' }}>
						<FontAwesome
							color={'#262426'}
							backgroundColor={'#3B5998'}
							borderRadius={0}
							name={'twitter'}
							size={32}
							style={sStyles.loginIcon} />
					</View>
				</TouchableWithoutFeedback>
				<Text style={sStyles.versionText}>v0.1-beta</Text>
			</View>
		</View>
	);
}