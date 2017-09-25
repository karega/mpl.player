/* summary.js */

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
import Overview from './overview';
import Attributes from './attributes';
import sStyles from './../styles/summary-styles';
import {Avatar} from './../../../lib/react-native-material-design';

type SummaryPropTypes = {
	summary: Immutable.Map<string, any>;
	profile: Immutable.Map<string, any>;
};

type SummaryStateTypes = {
	step: number;
};

const { width, height } = Dimensions.get('window');

class Summary extends React.PureComponent <any, SummaryPropTypes, SummaryStateTypes> {
	props: SummaryPropTypes;
	state: SummaryStateTypes;

	constructor(props: SummaryPropTypes): void {
		super(props);

		this.state = {
			step: 1,
			drawer: !(props.builds) && !(props.builds && props.builds.length > 0)
		}

		this.browseTo = this.browseTo.bind(this);
		this.checkBuilds = this.checkBuilds.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	componentWillMount() {

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
		const SKILLS = (this.props.current && this.props.current.archetype) ? this.props.current.archetype : null;

		var navigationView = (
			this.props.profile && (
				<View style={[sStyles.sidebar]}>
					<View style={sStyles.sbProfileName}>
						<Avatar
							size={48}
							image={
								<Image
									style={sStyles.sbProfileImage}
									source={{ uri: this.props.profile.picture.data.url }}/>
							}/>
						<Text style={sStyles.sbProfileText}>{this.props.profile.name}</Text>
					</View>
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
									style={sStyles.menuItem}>
									<TouchableNativeFeedback onPress={menu.action}>
										<View>
											<Text style={sStyles.menuHeader}>{menu.title}</Text>
											<Text style={sStyles.menuLabel}>{menu.subtitle}</Text>
										</View>
									</TouchableNativeFeedback>
								</View>
							);
						})}
					</View>
					<View style={sStyles.sbFooter}>
						<Text style={sStyles.versionText}>v0.0.1-alpha</Text>
					</View>
				</View>
			)
		);

		return (
			<SideMenu
				menu={navigationView}
				isOpen={this.state.drawer}
				onChange={this.toggleMenu}
				openMenuOffset={width * 0.8}
				disableGestures={true}
				autoClosing={false}>
				<View style={[sStyles.container, { height: height }]}>
					<TouchableNativeFeedback
						onPress={() => this.toggleMenu(!this.state.drawer)}>
						<View style={sStyles.menuButton}>
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
						(this.props.builds.size > 0 && SKILLS) && (
							<View style={sStyles.headerContainer}>
								<Text style={sStyles.secondaryText}>{SKILLS['Archetype'][0]}</Text>
								<Text style={sStyles.primaryText}>{SKILLS['Archetype'][1]}</Text>
							</View>
						)
					}
					{
						(this.props.builds.size > 0) && (
							<Carousel
								initialPage={0}
								animate={false}
								width={width}
								height={(height - 128)}
								delay={2000}
								indicatorAtBottom={true}
								indicatorSize={20}
								indicatorColor='#BF1725'>
								<View style={[sStyles.summaryContainer, { height: height }]}>
									<Overview {...this.props} />
								</View>
								<View style={[sStyles.summaryContainer, { height: height }]}>
									<Attributes {...this.props} />
								</View>
							</Carousel>
						)
					}
					{
						(this.props.builds.size < 1) && (
							<View style={sStyles.headerContainer}>
								<Text style={sStyles.secondaryText}>ARE YOU READY?</Text>
								<Text style={sStyles.primaryText}>START A BUILD</Text>
							</View>
						)
					}
				</View>
			</SideMenu>
		);
	}
}

Summary.propTypes = { };

export default Summary;
