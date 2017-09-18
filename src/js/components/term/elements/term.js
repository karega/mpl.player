/* term.js */

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
import DrawerLayout from 'react-native-drawer-layout';
import {
	Card
} from './../../../lib/react-native-material-design';
import MaterialTabs from './../../../lib/react-native-material-tabs';
import Carousel from 'react-native-looped-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';

/** Internal Module Dependencies **/
import tStyles from './../styles/term-styles';
import {Avatar} from './../../../lib/react-native-material-design';

type TermPropTypes = {
	term: Immutable.Map<string, any>;
	profile: Immutable.Map<string, any>;
};

type TermStateTypes = {
	selectedTab: number;
};

const { width, height } = Dimensions.get('window');

class Term extends React.PureComponent <any, TermPropTypes, TermStateTypes> {
	props: TermPropTypes;
	state: TermStateTypes;

	constructor(props: TermPropTypes): void {
		super(props);

		this.state = {
			selectedTab: 0,
		}

		this.setTab = this.setTab.bind(this);
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	setTab(tab) {
		this.setState({selectedTab: tab})
	}

	render(): React.Element {
		const getTabContent = (index) => {
			return [
				(<View style={tStyles.termDefCardContent}>
					<Text key={'clv_label_0'} style={[tStyles.termDCCText, tStyles.boldLabel]}>What is {this.props.term.get('label')}?</Text>
					{
						this.props.term.getIn(['tabs', 'definitions']).map((definition, index) => {
							return <Text key={'clv_defs_' + index} style={tStyles.termDCCText}>{definition}</Text>
						})
					}
					{/*<FloatingActionButton
					 mini={true}
					 backgroundColor='#073473'
					 style={{position: 'absolute', right: '20px', bottom: '16px'}}>
					 <FontIcon className='material-icons'>share</FontIcon>
					 </FloatingActionButton>*/}
				</View>),
				(<View style={tStyles.termDefCardContent}>
					<Text style={tStyles.termDCCText}> </Text>
					{/*<FloatingActionButton
					 mini={true}
					 backgroundColor='#073473'
					 style={{position: 'absolute', right: '20px', bottom: '16px'}}>
					 <FontIcon className='material-icons'>share</FontIcon>
					 </FloatingActionButton>*/}
				</View>),
				(<View style={tStyles.termDefCardContent}>
					<Text key={'clv_label_0'} style={[tStyles.termDCCText, tStyles.boldLabel]}>Breaking down {this.props.term.get('label')}</Text>
					{
						this.props.term.getIn(['tabs', 'social', 'topics']).map((topic, index) => {
							if (topic.length > 55) {
								return(<Text key={'clv_topics_' + index} style={tStyles.termDCCText}>{topic}</Text>);

							}
							else {
								return(<Text key={'clv_label_' + index} style={[tStyles.termDCCText, tStyles.boldLabel]}>{topic}</Text>);
							}
						})
					}
					{/*<FloatingActionButton
					 mini={true}
					 backgroundColor='#073473'
					 style={{position: 'absolute', right: '20px', bottom: '16px'}}>
					 <FontIcon className='material-icons'>share</FontIcon>
					 </FloatingActionButton>*/}
				</View>),
				(<View style={tStyles.termDefCardContent}>
					<Carousel
						delay={10000}
						style={{ flex: 1, height: 300, width: width }}
						autoplay
						onAnimateNextPage={(p) => console.log(p)}>
						<View style={[tStyles.termProContainer, { width: width }]}>
							<View>
								<Text style={[tStyles.termDCCText, tStyles.termDCCHeader]}>
									Earn Up to $65/hr
								</Text>
								<Text style={[tStyles.termDCCText, tStyles.termDCCHeader]}>
									as a Mplplayer Pro
								</Text>
							</View>
							<Text style={[tStyles.termDCCText, tStyles.termDCCTA]}>
								Become a Mplplayer Pro!
							</Text>
							<View style={tStyles.termProButton}>
								<TouchableOpacity
									style={tStyles.termProClick}
									onPress={this.props.startProflow}>
									<Icon
										color={'#ffffff'}
										backgroundColor={'#3B5998'}
										borderRadius={0}
										name={'create'}
										size={25}
										style={tStyles.termProText} />
								</TouchableOpacity>
							</View>
						</View>
						<View style={[tStyles.termProContainer, { width: width }]}>
							<View>
								<Text style={[tStyles.termDCCText, tStyles.termDCCHeader]}>
									Manage and network
								</Text>
								<Text style={[tStyles.termDCCText, tStyles.termDCCHeader]}>
									your clients
								</Text>
							</View>
							<Text style={[tStyles.termDCCText, tStyles.termDCCTA]}>
								Join Mplplayer Pro!
							</Text>
							<View style={tStyles.termProButton}>
								<TouchableOpacity
									style={tStyles.termProClick}
									onPress={this.props.startProflow}>
									<Icon
										color={'#ffffff'}
										backgroundColor={'#3B5998'}
										borderRadius={0}
										name={'create'}
										size={25}
										style={tStyles.termProText} />
								</TouchableOpacity>
							</View>
						</View>
					</Carousel>
				</View>)
			][index]
		}

		const navigationView = (
			this.props.profile && (
				<View style={[tStyles.sidebar]}>
					<View style={tStyles.sbProfileName}>
						<Avatar size={48} image={
							<Image
								style={tStyles.sbProfileImage}
								source={{ uri: this.props.profile.picture.data.url }}/> }/>
						<Text style={tStyles.sbProfileText}>{this.props.profile.name}</Text>
					</View>
					<TouchableNativeFeedback>
						<View style={tStyles.sbFeaturedContent}>
							<Text style={tStyles.sbHeader}>
								Become a Mplplayer Pro!
							</Text>
							<Text style={tStyles.sbSubHeader}>
								Earn Up to $65/hr as a Mplplayer Pro.
							</Text>
						</View>
					</TouchableNativeFeedback>
					<View style={tStyles.menuItems}>
						{[{
							label: 'Settings',
							action: (event) => {
								Actions.settings();
							}
						}].map((menu, index) => {
							return (
								<View
									key={'menu_' + index} s
									style={tStyles.menuItem}>
									<TouchableNativeFeedback onPress={menu.action}>
										<Text style={tStyles.menuLabel}>{menu.label}</Text>
									</TouchableNativeFeedback>
								</View>
							);
						})}
					</View>
					<View style={tStyles.sbFooter}>
						<Text style={tStyles.versionText}>v0.0.1-alpha</Text>
					</View>
					<TouchableHighlight
						style={tStyles.closeButton}
						onPress={ (event) => this.drawer.closeDrawer() }>
						<Icon
							color={'#fff'}
							name={'close'}
							size={24}/>
					</TouchableHighlight>
				</View>
			)
		);

		return (
			<View style={tStyles.container}>
				<DrawerLayout
					onDrawerSlide={ e => this.setState({drawerSlideOutput: JSON.stringify(e.nativeEvent)}) }
					onDrawerStateChanged={ e => this.setState({drawerStateChangedOutput: JSON.stringify(e)}) }
					drawerBackgroundColor='red'
					drawerWidth={300}
					drawerLockMode={'unlocked'}
					ref={drawer => { return this.drawer = drawer; }}
					keyboardDismissMode='on-drag'
					statusBarBackgroundColor='blue'
					renderNavigationView={ () => navigationView }>
					<ToolbarAndroid
						title='Mplplayer'
						navIcon={require('./../../../assets/menu.png')}
						onIconClicked={() => {
							this.drawer.openDrawer();
						}}
						style={tStyles.homeToolbar}
						titleColor='#fff' />
					<ScrollView contentContainerStyle={tStyles.scrollContainer}>
						<Card style={tStyles.termCard}>
							<Card.Media
								image={<Image style={tStyles.termImage} source={{uri: 'http://www.marketrelevancecorp.com/images/1.jpg'}} />}
								overlay>
								<Text style={tStyles.termLabel}>{this.props.term.get('label')}</Text>
							</Card.Media>
							<Card.Body style={tStyles.termBody}>
								<MaterialTabs
									items={['Definition', 'Play', 'Social', 'Pro']}
									selectedIndex={this.state.selectedTab}
									onChange={this.setTab}
									barColor='#3e355c'
									indicatorColor='#c4b301'
									activeTextColor='white' />
								<ScrollView style={tStyles.termBodyContent}>
									{getTabContent(this.state.selectedTab)}
								</ScrollView>
							</Card.Body>
						</Card>
					</ScrollView>
				</DrawerLayout>
			</View>
		);
	}
}

Term.propTypes = {
	/*term: PropTypes.object.isRequired,*/
};

export default Term;
