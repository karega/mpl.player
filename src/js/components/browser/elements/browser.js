/* browser.js */

/** External Module Dependencies **/
import Immutable from 'immutable';
import React, {PropTypes} from 'react';
import {
	Dimensions,
	Image,
	RefreshControl,
	ScrollView,
	Text,
	TextInput,
	ToolbarAndroid,
	TouchableHighlight,
	TouchableNativeFeedback,
	TouchableOpacity,
	View
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import {
	CustomTabs,
	ANIMATIONS_FADE,
	ANIMATIONS_SLIDE
} from 'react-native-custom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';

/** Global Module Dependencies **/
import * as badgeImages from './../../../config/constants';

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

		this.browseTo = this.browseTo.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	browseTo(url) {
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

	toggleMenu(menuState) {
		this.setState({
			drawer: menuState
		})
	}

	render(): React.Element {
		var navigationView = (
			this.props.profile && (
				<View style={[bStyles.sidebar]}>
					<View style={bStyles.sbProfileName}>
						<Avatar size={48} image={
							<Image
								style={bStyles.sbProfileImage}
								source={{ uri: this.props.profile.picture.data.url }}/> }/>
						<Text style={bStyles.sbProfileText}>{this.props.profile.name}</Text>
					</View>
					<View style={bStyles.menuItems}>
						{[{
							title: 'START',
							subtitle: 'NEW BUILD',
							action: (event) => {
								Actions.builder();
							}
						},{
							title: 'SEARCH',
							subtitle: 'BUILDS',
							action: (event) => { }
						},{
							title: 'COMPARE',
							subtitle: 'BUILDS',
							action: (event) => {
								Actions.compare();
							}
						},{
							title: 'TERMS',
							subtitle: 'AND CONDITIONS',
							action: (event) => {
								this.browseTo('https://app.termly.io/document/terms-of-use-for-website/63873dbc-c8fa-4b79-957e-8322e72c60a8')
							}
						}].map((menu, index) => {
							return (
								<View
									key={'menu_' + index}
									style={bStyles.menuItem}>
									<TouchableNativeFeedback onPress={menu.action}>
										<View>
											<Text style={bStyles.menuHeader}>{menu.title}</Text>
											<Text style={bStyles.menuLabel}>{menu.subtitle}</Text>
										</View>
									</TouchableNativeFeedback>
								</View>
							);
						})}
					</View>
					<View style={bStyles.sbFooter}>
						<Text style={bStyles.versionText}>v0.0.1-alpha</Text>
					</View>
				</View>
			)
		);

		const buildIcon = require('./../../../assets/mplplayer.png');

		var builds = [];

		this.props.builds.map((build, index) => {
			builds.push(
				<TouchableNativeFeedback
					key={'build_' + index}
					onPress={() => {
						this.props.chooseBuild(build)
					}}>
					<View style={[bStyles.buildItem, { width: width }]}>
							<View style={bStyles.buildPanel}>
								<View style={bStyles.buildType}>
									<Image source={badgeImages.primarySkillMap[build.skills['primary']]} style={[bStyles.buildAvatar, { width: 48, height: 78, position: 'absolute', left: 0, top: 0, opacity: 1 }]}/>
									<Image source={badgeImages.secondarySkillMap[build.skills['secondary']]} style={[bStyles.buildAvatar, { width: 48, height: 78, position: 'absolute', left: 0, top: 0, opacity: 1 }]}/>
								</View>
								<View style={bStyles.buildInfo}>
									<Text style={bStyles.buildText}>
										{build.archetype['Archetype'][0]} {build.archetype['Archetype'][1]}
									</Text>
									<View style={bStyles.buildBadges}>
										<View style={bStyles.badgeItem}>
											<Image source={badgeImages.badgeMap['hof']} style={[bStyles.badgeImage, { position: 'absolute', width: 29, height: 48}]} />
											<Text style={bStyles.badgeText}>{build.archetype['H']}</Text>
										</View>
										<View style={bStyles.badgeItem}>
											<Image source={badgeImages.badgeMap['gold']} style={[bStyles.badgeImage, { position: 'absolute', width: 29, height: 48}]} />
											<Text style={bStyles.badgeText}>{build.archetype['G']}</Text>
										</View>
										<View style={bStyles.badgeItem}>
											<Image source={badgeImages.badgeMap['silver']} style={[bStyles.badgeImage, { position: 'absolute', width: 29, height: 48}]} />
											<Text style={bStyles.badgeText}>{build.archetype['S']}</Text>
										</View>
										<View style={bStyles.badgeItem}>
											<Image source={badgeImages.badgeMap['bronze']} style={[bStyles.badgeImage, { position: 'absolute', width: 29, height: 48}]} />
											<Text style={bStyles.badgeText}>{build.archetype['B']}</Text>
										</View>
									</View>
								</View>
							</View>
							<View style={[bStyles.buildRule, { width: (width * 0.8) }]} />
					</View>
				</TouchableNativeFeedback>
			)
		})

		return (
			<SideMenu
				menu={navigationView}
				isOpen={this.state.drawer}
				onChange={this.toggleMenu}
				openMenuOffset={width * 0.8}
				disableGestures={true}
				autoClosing={false}>
				<View style={[bStyles.container, { height: height }]}>
					<TouchableNativeFeedback
						onPress={() => this.toggleMenu(!this.state.drawer)}>
						<View style={bStyles.menuButton}>
							{this.state.drawer ? (
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
					</TouchableNativeFeedback>
					<View style={bStyles.headerContainer}>
						<Text style={bStyles.primaryText}>SEARCH</Text>
						<Text style={bStyles.secondaryText}>BUILDS</Text>
					</View>
					{builds.length > 0 && (
						<Text style={bStyles.browserLocalResults}>{builds.length} builds found on device.</Text>
					)}
					<ScrollView
						contentContainerStyle={bStyles.scrollContainer}>
						<View style={bStyles.browserContainer}>
							{builds}
						</View>
					</ScrollView>
				</View>
			</SideMenu>
		);
	}
}

Browser.propTypes = { };

export default Browser;
