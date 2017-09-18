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

class Compare extends React.PureComponent <any, ComparePropTypes, CompareStateTypes> {
	props: ComparePropTypes;
	state: CompareStateTypes;

	constructor(props: ComparePropTypes): void {
		super(props);

		this.state = {
			step: 1,
			drawer: !(props.builds) && !(props.builds && props.builds.length > 0)
		}

		this.browseTo = this.browseTo.bind(this);
		this.checkBuilds = this.checkBuilds.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	componentDidMount() {
		this.checkBuilds();
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

	checkBuilds() {
		if (this.props.builds.size === 0) {
			this.toggleMenu(!this.state.drawer)
		}
	}

	toggleMenu(menuState) {
		this.setState({
			drawer: menuState
		})
	}

	render(): React.Element {
		const SKILLS = this.props.current ? this.props.current.archetype : null;

		var navigationView = (
			this.props.profile && (
				<View style={[cStyles.sidebar]}>
					<View style={cStyles.sbProfileName}>
						<Avatar size={48} image={
							<Image
								style={cStyles.sbProfileImage}
								source={{ uri: this.props.profile.picture.data.url }}/> }/>
						<Text style={cStyles.sbProfileText}>{this.props.profile.name}</Text>
					</View>
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
			)
		);

		const mplIcon = require('./../../../assets/mplplayer.png');

		return (
			<SideMenu
				menu={navigationView}
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
					{
						(this.props.builds.size > 0) && (
							<View style={cStyles.headerContainer}>
								<Text style={cStyles.primaryText}>{'COMPARE'}</Text>
								<Text style={cStyles.secondaryText}>{'BUILDS'}</Text>
							</View>
						)
					}
					{
						(this.props.builds.size > 0) && (
							<View style={cStyles.contentContainer}>
								<TouchableNativeFeedback
									onPress={() => { }}>
									<View style={cStyles.addArchetype}>
										<Image source={mplIcon} style={[cStyles.addArchetypeIcon, { height: 36, width: 36 }]}/>
										<Text
											style={cStyles.addArchetypeText}>
											{'ADD ARCHETYPE'}
										</Text>
									</View>
								</TouchableNativeFeedback>
							</View>
						)
					}
				</View>
			</SideMenu>
		);
	}
}

Compare.propTypes = { };

export default Compare;
