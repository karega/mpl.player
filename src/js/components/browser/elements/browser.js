/* browser.js */

/** External Module Dependencies **/
import Immutable from 'immutable';
import React, {PropTypes} from 'react';
import {
	Alert,
	Dimensions,
	Image,
	RefreshControl,
	ScrollView,
	Text,
	TextInput,
	ToolbarAndroid,
	TouchableWithoutFeedback,
	TouchableOpacity,
	View
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';

/** Global Module Dependencies **/
import * as badgeImages from './../../../config/constants';
import {navigationView} from './../../../config/constants';

/** Internal Module Dependencies **/
import bStyles from './../styles/browser-styles';
import {Avatar} from './../../../lib/react-native-material-design';

type BrowserPropTypes = {
	browser: Immutable.Map<string, any>;
	profile: Immutable.Map<string, any>;
};

type BrowserStateTypes = {
	step: number;
};

const { width, height } = Dimensions.get('window');

class Browser extends React.PureComponent <any, BrowserPropTypes, BrowserStateTypes> {
	props: BrowserPropTypes;
	state: BrowserStateTypes;

	constructor(props: BrowserPropTypes): void {
		super(props);

		this.state = {
			step: 1,
			drawer: !(props.builds) && !(props.builds && props.builds.length > 0)
		}

		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu(menuState) {
		this.setState({
			drawer: menuState
		})
	}

	render(): React.Element {
		const buildIcon = require('./../../../assets/mplplayer.png');

		var builds = [];

		this.props.builds.map((build, index) => {
			let buildItemWidth = ((index % 2 === 0) ? (((width - 10) / 2) - 1) : ((width - 10) / 2));

			builds.push(
				<TouchableWithoutFeedback
					key={'build_' + index}
					onPress={() => {
						if (this.props.comparator) {
							this.props.compareAddBuild(build)
						}
						else {
							this.props.chooseBuild(build);
						}
					}}
					onLongPress={() => {
						if (!this.props.comparator) {
							Alert.alert(
								'Remove Build',
								'Are you sure?',
								[
									{text: 'Cancel', style: 'cancel'},
									{text: 'Yes', onPress: () => this.props.browserDeleteBuild(index)},
								],
								{ cancelable: false }
							)
						}
					}}>
					<View style={[bStyles.buildItem, { width: buildItemWidth, maxWidth: buildItemWidth, minWidth: buildItemWidth, height: 190 }]}>
						<View style={[bStyles.buildPanel, { width: buildItemWidth - 20, maxWidth: buildItemWidth - 20, minWidth: buildItemWidth - 20, height: 190 }]}>
							<View style={bStyles.buildType}>
								<View style={bStyles.buildPosition}>
									<Text style={bStyles.badgeText}>{build.bio['position'].toUpperCase()}</Text>
								</View>
								<View style={bStyles.buildImage}>
									<Image key={'browser_skill_primary_' + index} source={badgeImages.primarySkillMap[build.skills['primary']]} style={[bStyles.buildAvatar, { width: 48, height: 78, position: 'absolute', left: 0, top: 0, opacity: 1 }]}/>
									<Image key={'browser_skill_secondary_' + index} source={badgeImages.secondarySkillMap[build.skills['secondary']]} style={[bStyles.buildAvatar, { width: 48, height: 78, position: 'absolute', left: 0, top: 0, opacity: 1 }]}/>
								</View>
							</View>
							<View style={bStyles.buildInfo}>
								<Text style={bStyles.buildText}>
									{build.archetype[0]}{'\n'}{build.archetype[1]}
								</Text>
								<View style={bStyles.buildBadges}>
									<View style={bStyles.badgeItem}>
										<Image key={'browser_badges_h_' + index} source={badgeImages.badgeMap['hof']} style={[bStyles.badgeImage, { position: 'absolute', width: 29, height: 48}]} />
										<Text style={bStyles.badgeText}>{build.badges['H']}</Text>
									</View>
									<View style={bStyles.badgeItem}>
										<Image key={'browser_badges_g_' + index} source={badgeImages.badgeMap['gold']} style={[bStyles.badgeImage, { position: 'absolute', width: 29, height: 48}]} />
										<Text style={bStyles.badgeText}>{build.badges['G']}</Text>
									</View>
									<View style={bStyles.badgeItem}>
										<Image key={'browser_badges_s_' + index} source={badgeImages.badgeMap['silver']} style={[bStyles.badgeImage, { position: 'absolute', width: 29, height: 48}]} />
										<Text style={bStyles.badgeText}>{build.badges['S']}</Text>
									</View>
									<View style={bStyles.badgeItem}>
										<Image key={'browser_badges_b_' + index} source={badgeImages.badgeMap['bronze']} style={[bStyles.badgeImage, { position: 'absolute', width: 29, height: 48}]} />
										<Text style={bStyles.badgeText}>{build.badges['B']}</Text>
									</View>
								</View>
							</View>
						</View>
						{/*	<View style={[bStyles.buildRule, { width: (width * 0.8) }]} />*/}
					</View>
				</TouchableWithoutFeedback>
			)

			if (index % 2 === 0) {
				builds.push(<View key={'build_sep_' + index} style={[bStyles.buildSeparator, { height: 140 }]}/>)
			}
		})

		return (
			<SideMenu
				menu={navigationView(this.props.profile)}
				isOpen={this.state.drawer}
				onChange={this.toggleMenu}
				openMenuOffset={width * 0.8}
				disableGestures={true}
				autoClosing={false}>
				<View style={[bStyles.container, { height: height, width: width }]}>
					<TouchableWithoutFeedback
						onPress={() => {
							if (this.props.comparator) {
								Actions.compare();
							}
							else {
								this.toggleMenu(!this.state.drawer);
							}
						}}>
						<View style={bStyles.menuButton}>
							{this.state.drawer || this.props.comparator ? (
								<Icon
									color={'#fff'}
									name={'close'}
									size={32}/>
							) : (
								<Icon
									color={'#fff'}
									name={'menu'}
									size={32}/>
							)}
						</View>
					</TouchableWithoutFeedback>
					<View style={bStyles.headerContainer}>
						<Text style={bStyles.primaryText}>SEARCH</Text>
						<Text style={bStyles.secondaryText}>BUILDS</Text>
					</View>
					{this.props.builds.size > 0 && (
						<Text style={bStyles.browserLocalResults}>{this.props.builds.size} {this.props.builds.size > 1 ? 'builds' : 'build' } found on device.</Text>
					)}
					{this.props.builds.size < 1 && (
						<Text style={bStyles.browserLocalResults}>No builds found on device.</Text>
					)}
					<ScrollView contentContainerStyle={bStyles.scrollContainer}>
						{builds}
					</ScrollView>
				</View>
			</SideMenu>
		);
	}
}

Browser.propTypes = { };

export default Browser;
