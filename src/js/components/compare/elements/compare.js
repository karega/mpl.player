/* compare.js */

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
	TouchableHighlight,
	TouchableNativeFeedback,
	TouchableOpacity,
	View
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';
import Carousel from 'react-native-carousel-view';

/** Global Module Dependencies **/
import {navigationView} from './../../../config/constants';

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
const adjHeight = height - 115;

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

		this.getComparator = this.getComparator.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	getComparator(ff) {
		const mplIcon = require('./../../../assets/mplplayer.png');
		const _fac = ((100 / (this.props.builds.size === 4 ? 4 : this.props.builds.size === 3 ? 4 : (this.props.builds.size * 2))) / 100);

		switch (ff) {
			case 'large':
				var compareSplash = require('./../../../assets/compare-splash.png');

				return (
					<View style={{ justifyContent: 'space-between', flexDirection: 'column', height: adjHeight, width: adjWidth }}>
						<View style={cStyles.compareSplashContainer}>
							<Image key={'lrg_compareSplash'} source={compareSplash} style={[cStyles.compareSplash, { marginTop: 25, width: adjWidth, height: adjWidth }]} />
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
							<ScrollView contentContainerStyle={[cStyles.scrollContainer, { flexDirection: 'row', width: adjWidth * 0.5 }]} refreshControl={null}>
								{
									this.props.builds.map((build, index) => {
										return (
											<View
												key={'compare_build_' + index}
												style={[cStyles.removeBuildButton]}>
												<TouchableHighlight
													onLongPress={() => {
														Alert.alert(
															'Remove Build',
															'Are you sure?',
															[
																{text: 'Cancel', style: 'cancel'},
																{text: 'Yes', onPress: () => {
																	this.props.compareRemoveBuild(index);
																}},
															],
															{ cancelable: true }
														)
													}}>
													<View
														style={{flex: 1, height: adjHeight * 1.5, alignItems: 'flex-end' }}>
														<Overview
															comparator={true}
															{...this.props}
															height={(adjHeight)}
															width={adjWidth * 0.5}
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
								style={{ justifyContent: 'space-between', flexDirection: 'column', height: adjHeight, width: this.props.builds.size == 2 ? (adjWidth * 0.5) : (adjWidth * _fac) }}>
								<View style={cStyles.compareSplashContainer}>
									<Image key={'med_ovr_compareSplash'} source={compareSplash} style={[cStyles.compareSplash, { marginTop:50, width: 160, height: 284 }]} />
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
							<ScrollView contentContainerStyle={[cStyles.scrollContainer, { flexDirection: 'row', width: adjWidth * 0.5 }]} refreshControl={null}>
								{
									this.props.builds.map((build, index) => {
										return (
											<View
												key={'compare_build_' + index}
												style={cStyles.removeBuildButton}>
												<TouchableHighlight
													onLongPress={() => {
														Alert.alert(
															'Remove Build',
															'Are you sure?',
															[
																{text: 'Cancel', style: 'cancel'},
																{text: 'Yes', onPress: () => {
																	this.props.compareRemoveBuild(index);
																}},
															],
															{ cancelable: false }
														)
													}}>
													<View
														style={{ height: 3160, justifyContent: 'center' }}>
														<View style={[cStyles.skillItem, { width: adjWidth * 0.5 }]}>
															<Text style={cStyles.positionText}>{build.bio.position.toUpperCase()}</Text>
														</View>
														<Caps
															comparator={true}
															{...this.props}
															height={3160}
															width={adjWidth * 0.5}
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
										style={{ justifyContent: 'space-between', flexDirection: 'column', height: adjHeight, width: (adjWidth * 0.5) }}>
										<View style={cStyles.compareSplashContainer}>
											<Image key={'med_cap_compareSplash'} source={compareSplash} style={[cStyles.compareSplash, { marginTop:50, width: 160, height: 284 }]} />
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
				var compareBanner = require('./../../../assets/compare-banner.png');

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
													onLongPress={() => {
														Alert.alert(
															'Remove Build',
															'Are you sure?',
															[
																{text: 'Cancel', style: 'cancel'},
																{text: 'Yes', onPress: () => {
																	console.log('index', index)
																	this.props.compareRemoveBuild(index);
																}},
															],
															{ cancelable: false }
														)
													}}>
													<View
														style={{flex: (this.props.builds.size * 0.5), width: adjWidth * _fac, paddingTop: 20}}>
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
										style={{ justifyContent: 'space-between', flexDirection: 'column', height: adjHeight, width: this.props.builds.size == 2 ? (adjWidth * 0.5) : (adjWidth * _fac) }}>
										<View style={cStyles.compareSplashContainer}>
											{ this.props.builds.size == 2 && <Image key={'sm_ovr_compareSplash'} source={compareSplash} style={[cStyles.compareSplash, { marginTop: 50, height: (adjWidth * 0.5) * 1.77, width: (adjWidth * 0.5) }]} /> }
											{ this.props.builds.size != 2 && <Image key={'sm_ovr_compareSplash-2'} source={compareBanner} style={[cStyles.compareSplash, { marginTop: 50, opacity: 1, alignSelf: 'flex-end', width: 80, height: 160 }]} /> }
											{ this.props.builds.size != 2 && <Image key={'sm_ovr_compareSplash'} source={compareSplash} style={[cStyles.compareSplash, { height: (adjWidth * _fac) * 1.77, width: (adjWidth * _fac) }]} /> }
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
							<ScrollView contentContainerStyle={[cStyles.scrollContainer, {flexDirection: 'row', width: (adjWidth * (this.props.builds.size * _fac))}]} refreshControl={null}>
								{
									this.props.builds.map((build, index) => {
										return (
											<View
												key={'compare_build_' + index}
												style={cStyles.removeBuildButton}>
												<TouchableHighlight
													onLongPress={() => {
														Alert.alert(
															'Remove Build',
															'Are you sure?',
															[
																{text: 'Cancel', style: 'cancel'},
																{text: 'Yes', onPress: () => {
																	console.log('index', index)
																	this.props.compareRemoveBuild(index);
																}},
															],
															{ cancelable: false }
														)
													}}>
													<View
														style={{ width: adjWidth * _fac, height: 3160, justifyContent: 'center' }}>
														<View style={[cStyles.skillItem, { width: adjWidth * _fac }]}>
															<Text style={cStyles.positionText}>{build.bio.position.toUpperCase()}</Text>
														</View>
														<Caps
															comparator={true}
															{...this.props}
															height={3160}
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
										style={{ justifyContent: 'space-between', flexDirection: 'column', height: adjHeight, width: this.props.builds.size == 2 ? (adjWidth * 0.5) : (adjWidth * _fac) }}>
										<View style={cStyles.compareSplashContainer}>
											{ this.props.builds.size == 2 && <Image key={'sm_ovr_compareSplash'} source={compareSplash} style={[cStyles.compareSplash, { marginTop: 50, height: (adjWidth * 0.5) * 1.77, width: (adjWidth * 0.5) }]} /> }
											{ this.props.builds.size != 2 && <Image key={'sm_ovr_compareSplash-2'} source={compareBanner} style={[cStyles.compareSplash, { marginTop: 50, opacity: 1, alignSelf: 'flex-end', width: 80, height: 160 }]} /> }
											{ this.props.builds.size != 2 && <Image key={'sm_ovr_compareSplash'} source={compareSplash} style={[cStyles.compareSplash, { height: (adjWidth * _fac) * 1.77, width: (adjWidth * _fac) }]} /> }
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
		return (
			<SideMenu
				menu={navigationView(this.props.profile)}
				isOpen={this.state.drawer}
				onChange={this.toggleMenu}
				openMenuOffset={width * 0.8}
				disableGestures={true}
				autoClosing={false}>
				<View style={[cStyles.container, { height: height }]}>
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
