/* compare.js */

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
import Carousel from 'react-native-carousel-view';

/** Internal Module Dependencies **/
import Overview from './../../summary/elements/overview';
import Caps from './../../summary/elements/caps';
import cStyles from './../styles/compare-styles';
import {Avatar} from './../../../lib/react-native-material-design';

type ComparePropTypes = {
	compare: Immutable.Map<string, any>;
	profile: Immutable.Map<string, any>;
};

type CompareStateTypes = {
	step: number;
};

const { width, height } = Dimensions.get('window');
const adjWidth = width - 40;
const adjHeight = height - 160;

class Compare extends React.PureComponent <any, ComparePropTypes, CompareStateTypes> {
	props: ComparePropTypes;
	state: CompareStateTypes;

	constructor(props: ComparePropTypes): void {
		super(props);

		this.animating = false;

		this.state = {
			step: 1,
			drawer: !(props.builds) && !(props.builds && props.builds.length > 0)
		}

		this.browseTo = this.browseTo.bind(this);
		this.getComparator = this.getComparator.bind(this);
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
		}).catch(error => {
			console.error(error);
		});
	}

	getComparator(ff) {
		const mplIcon = require('./../../../assets/mplplayer.png');
		const _fac = ((100 / (this.props.builds.size === 4 ? 4 : this.props.builds.size === 3 ? 4 : (this.props.builds.size * 2))) / 100);

		switch (ff) {
			case 'large':
				var compareSplash = require('./../../../assets/compare-splash.png');

				return (
					<View style={{ flex: 1, flexDirection: 'column' }}>
						<View style={cStyles.compareSplashContainer}>
							<Image key={'lrg_compareSplash'} source={compareSplash} style={cStyles.compareSplash} />
						</View>
						<View style={cStyles.contentContainer}>
							<TouchableNativeFeedback
								onPress={() => {
									Actions.browser({ comparator: true });
								}}>
								<View style={cStyles.addArchetype}>
									<Image key={'lrg_mplIcon'} source={mplIcon} style={[cStyles.addArchetypeIcon, { height: 36, width: 36 }]}/>
									<Text
										style={cStyles.addArchetypeText}>
										{'ADD ARCHETYPE'}
									</Text>
								</View>
							</TouchableNativeFeedback>
						</View>
					</View>
				);
			case 'medium':
				var compareSplash = require('./../../../assets/compare-splash-medium.png');

				return (
					<Carousel
						initialPage={0}
						animate={false}
						width={adjWidth}
						height={adjHeight}
						delay={2000}
						indicatorAtBottom={true}
						indicatorSize={20}
						indicatorColor='#BF1725'>
						<View style={cStyles.comparatorTable}>
							<ScrollView contentContainerStyle={[cStyles.scrollContainer, {flexDirection: 'row'}]} refreshControl={null}>
								{
									this.props.builds.map((build, index) => {
										return (
											<View
												key={'compare_build_' + index}
												style={[cStyles.removeBuildButton]}>
												<TouchableHighlight
													onLongPress={() => this.props.compareRemoveBuild(index)}>
													<View
														style={{flex: 1}}>
														<Overview
															comparator={true}
															{...this.props}
															height={(adjHeight * 1.5)}
															width={adjWidth * _fac}
															badges={[build.badges]}
															current={build} />
													</View>
												</TouchableHighlight>
											</View>
										)
									})
								}
							</ScrollView>
							<View
								key={'compare_add_build'}
								style={{ flex: 1, flexDirection: 'column', height: adjHeight, width: (adjWidth * _fac)  }}>
								<View style={cStyles.compareSplashContainer}>
									<Image key={'med_ovr_compareSplash'} source={compareSplash} style={[cStyles.compareSplash]} />
								</View>
								<View style={cStyles.contentContainer}>
									<TouchableNativeFeedback
										onPress={() => {
											Actions.browser({ comparator: true });
										}}>
										<View style={cStyles.addArchetype}>
											<Image key={'med_ovr_mplIcon'} source={mplIcon} style={[cStyles.addArchetypeIcon, { height: 36, width: 36, marginRight: 10 }]}/>
											<Text
												style={cStyles.addArchetypeText}>
												{'ADD'}
											</Text>
										</View>
									</TouchableNativeFeedback>
								</View>
							</View>
						</View>
						<View style={cStyles.comparatorTable}>
							<ScrollView contentContainerStyle={[cStyles.scrollContainer, { flexDirection: 'row', justifyContent: 'center' }]} refreshControl={null}>
								{
									this.props.builds.map((build, index) => {
										return (
											<View
												key={'compare_build_' + index}
												style={cStyles.removeBuildButton}>
												<TouchableHighlight
													onLongPress={() => this.props.compareRemoveBuild(index)}>
													<View
														style={{ flex: 1, height: 3060, justifyContent: 'center' }}>
														<View style={[cStyles.skillItem, { width: adjWidth * _fac }]}>
															<Text style={cStyles.positionText}>{build.bio.position.toUpperCase()}</Text>
														</View>
														<Caps
															comparator={true}
															{...this.props}
															height={3060}
															width={adjWidth * _fac}
															current={build} />
													</View>
												</TouchableHighlight>
											</View>
										)
									})
								}
							</ScrollView>
							{
								this.props.builds.size < 4 && (
									<View
										key={'compare_add_build'}
										style={{ flex: 1, flexDirection: 'column', height: adjHeight, width: (adjWidth * _fac) }}>
										<View style={cStyles.compareSplashContainer}>
											<Image key={'med_cap_compareSplash'} source={compareSplash} style={[cStyles.compareSplash, { width: (adjWidth * _fac) }]} />
										</View>
										<View style={cStyles.contentContainer}>
											<TouchableNativeFeedback
												onPress={() => {
													Actions.browser({ comparator: true });
												}}>
												<View style={cStyles.addArchetype}>
													<Image key={'med_cap_mplIcon'} source={mplIcon} style={[cStyles.addArchetypeIcon, { height: 36, width: 36, marginRight: 10 }]}/>
													<Text
														style={cStyles.addArchetypeText}>
														{'ADD'}
													</Text>
												</View>
											</TouchableNativeFeedback>
										</View>
									</View>
								)
							}
						</View>
					</Carousel>
				);
			case 'small':
				var compareSplash = require('./../../../assets/compare-splash-small.png');

				return (
					<Carousel
						initialPage={0}
						animate={false}
						width={adjWidth}
						height={adjHeight}
						delay={2000}
						indicatorAtBottom={true}
						indicatorSize={20}
						indicatorColor='#BF1725'>
						<View style={cStyles.comparatorTable}>
							<ScrollView contentContainerStyle={[cStyles.scrollContainer, {flexDirection: 'row', width: (adjWidth * (this.props.builds.size * _fac))}]} refreshControl={null}>
								{
									this.props.builds.map((build, index) => {
										return (
											<View
												key={'compare_build_' + index}
												style={cStyles.removeBuildButton}>
												<TouchableHighlight
													onLongPress={() => this.props.compareRemoveBuild(index)}>
													<View
														style={{flex: (this.props.builds.size * 0.5), width: adjWidth * _fac}}>
														<Overview
															comparator={true}
															{...this.props}
															height={(adjHeight * 1.5)}
															width={adjWidth * _fac}
															badges={[build.badges]}
															current={build} />
													</View>
												</TouchableHighlight>
											</View>
										)
									})
								}
							</ScrollView>
							{
								this.props.builds.size < 4 && (
									<View
										key={'compare_add_build'}
										style={{ flex: this.props.builds.size === 3 ? 0.5 : 1, flexDirection: 'column', height: adjHeight, width: (adjWidth * _fac), backgroundColor: '#fff' }}>
										<View style={cStyles.compareSplashContainer}>
											<Image key={'sm_ovr_compareSplash'} source={compareSplash} style={[cStyles.compareSplash, { width: (adjWidth * _fac) }]} />
										</View>
										<View style={cStyles.contentContainer}>
											<TouchableNativeFeedback
												onPress={() => {
													Actions.browser({ comparator: true });
												}}>
												<View style={cStyles.addArchetype}>
													<Image key={'sm_ovr_mplIcon'} source={mplIcon} style={[cStyles.addArchetypeIcon, { height: 36, width: 36 }]}/>
												</View>
											</TouchableNativeFeedback>
										</View>
									</View>
								)
							}
						</View>
						<View style={cStyles.comparatorTable}>
							<ScrollView contentContainerStyle={[cStyles.scrollContainer, { flexDirection: 'row' }]} refreshControl={null}>
								{
									this.props.builds.map((build, index) => {
										return (
											<View
												key={'compare_build_' + index}
												style={cStyles.removeBuildButton}>
												<TouchableHighlight
													onLongPress={() => this.props.compareRemoveBuild(index)}>
													<View
														style={{ flex: (this.props.builds.size * 0.5), height: 3060, justifyContent: 'center' }}>
														<View style={[cStyles.skillItem, { width: adjWidth * _fac }]}>
															<Text style={cStyles.positionText}>{build.bio.position.toUpperCase()}</Text>
														</View>
														<Caps
															comparator={true}
															{...this.props}
															height={3060}
															width={adjWidth * _fac}
															current={build} />
													</View>
												</TouchableHighlight>
											</View>
										)
									})
								}
							</ScrollView>
							{
								this.props.builds.size < 4 && (
									<View
										key={'compare_add_build'}
										style={{ flex: this.props.builds.size === 3 ? 0.5 : 1, flexDirection: 'column', height: adjHeight, width: (adjWidth * _fac) }}>
										<View style={cStyles.compareSplashContainer}>
											<Image key={'sm_ovr_compareSplash'} source={compareSplash} style={[cStyles.compareSplash, { width: (adjWidth * _fac) }]} />
										</View>
										<View style={cStyles.contentContainer}>
											<TouchableNativeFeedback
												onPress={() => {
													Actions.browser({ comparator: true });
												}}>
												<View style={cStyles.addArchetype}>
													<Image key={'sm_cap_mplIcon'} source={mplIcon} style={[cStyles.addArchetypeIcon, { height: 36, width: 36 }]}/>
												</View>
											</TouchableNativeFeedback>
										</View>
									</View>
								)
							}
						</View>
					</Carousel>
				);
			default:
				return null;
		}
	}

	toggleMenu(menuState) {
		this.setState({
			drawer: menuState
		})
	}

	render(): React.Element {
		const SKILLS = this.props.current ? this.props.archetype : null;

		var navigationView = (
			<View style={[cStyles.sidebar]}>
				{
					this.props.profile && (
						<View style={cStyles.sbProfileName}>
							<Avatar size={48} image={
								<Image
									key={'cmp_sbProfileImage'}
									style={cStyles.sbProfileImage}
									source={{ uri: this.props.profile.picture.data.url }}/> }/>
							<Text style={cStyles.sbProfileText}>{this.props.profile.name}</Text>
						</View>
					)
				}
				<View style={cStyles.menuItems}>
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
							Actions.browser();
						}
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
								style={cStyles.menuItem}>
								<TouchableNativeFeedback onPress={menu.action}>
									<View>
										<Text style={cStyles.menuHeader}>{menu.title}</Text>
										<Text style={cStyles.menuLabel}>{menu.subtitle}</Text>
									</View>
								</TouchableNativeFeedback>
							</View>
						);
					})}
				</View>
				<View style={cStyles.sbFooter}>
					<Text style={cStyles.versionText}>v0.0.1-alpha</Text>
				</View>
			</View>
		);

		return (
			<SideMenu
				menu={navigationView}
				isOpen={this.state.drawer}
				onChange={this.toggleMenu}
				openMenuOffset={width * 0.8}
				disableGestures={true}
				autoClosing={false}>
				<View style={[cStyles.container, { height: height, paddingBottom: 40 }]}>
					<TouchableNativeFeedback
						onPress={() => this.toggleMenu(!this.state.drawer)}>
						<View style={cStyles.menuButton}>
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
					<View style={cStyles.headerContainer}>
						<Text style={cStyles.primaryText}>{'COMPARE'}</Text>
						<Text style={cStyles.secondaryText}>{'BUILDS'}</Text>
					</View>
					<View style={{ flexDirection: 'column', height: adjHeight }}>
						{ (this.props.builds.size == 0) && this.getComparator('large') }
						{ (this.props.builds.size == 1) && this.getComparator('medium') }
						{ (this.props.builds.size > 1) && this.getComparator('small') }
					</View>
				</View>
			</SideMenu>
		);
	}
}

Compare.propTypes = { };

export default Compare;
