/* home.js */

/** External Module Dependencies **/
import Immutable from 'immutable';
import React, {PropTypes} from 'react';
import {
	BackAndroid,
	Platform,
	Image,
	ListView,
	RefreshControl,
	ScrollView,
	Text,
	TextInput,
	ToolbarAndroid,
	TouchableHighlight,
	TouchableNativeFeedback,
	View
} from 'react-native';
import DrawerLayout from 'react-native-drawer-layout';
import {
	CustomTabs,
	ANIMATIONS_FADE,
	ANIMATIONS_SLIDE
} from 'react-native-custom-tabs';
import DidYouMean from 'didyoumean2';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';

/** Internal Module Dependencies **/
import hStyles from './../styles/home-styles';
import {Avatar, Card} from './../../../lib/react-native-material-design';

type HomePropTypes = {
	terms: Immutable.List<any>;
	searches: Immutable.Map<string, any>;
	posts: Immutable.OrderedMap<string, any>;
	requestHomePosts: () => void;
	requestTodaysWord: (index: number) => void;
	profile: Immutable.Map<string, any>;
};

type HomeStateTypes = {
	searching: boolean;
	searches: Object;
};

class Home extends React.PureComponent <any, HomePropTypes, HomeStateTypes> {
	props: HomePropTypes;
	state: HomeStateTypes;
	animating: boolean;

	constructor(props: HomePropTypes): void {
		super(props);

		this.state = {
			searching: false,
			searches: [],
		};

		this.animating = false;
		this.browseTo = this.browseTo.bind(this);
		this.checkBindBackButton = this.checkBindBackButton.bind(this);
		this.cancelSearch = this.cancelSearch.bind(this);
	}

	componentDidMount() {
		this.props.checkRefreshTerms();
		this.props.requestHomePosts();
		this.props.requestTodaysWord(Math.floor(Math.random() * (15545 - 0)) + 0);
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
		this.checkBindBackButton(true);
	}

	browseTo(url) {
		var option = {
			toolbarColor: '#3e355c',
			enableUrlBarHiding: true,
			showPageTitle: true,
			enableDefaultShare: true,
			animations: ANIMATIONS_FADE
		}

		CustomTabs.openURL(url, option).then((launched: boolean) => {
			console.log(`Launched custom tabs: ${launched}`);
		}).catch(err => {
			console.error(err)
		});
	}

	checkBindBackButton(active) {
		if (Platform.OS == 'android') {
			return active ? BackAndroid.removeEventListener('hardwareBackPress', this.cancelSearch) : BackAndroid.addEventListener('hardwareBackPress', this.cancelSearch);
		}

		return null;
	}

	cancelSearch() {
		console.log('cancelSearch');

		this.setState({ searching:false }, () => {
			if (this.state.searching ==  false) {
				this.checkBindBackButton(true)
			}
		})

		return true;
	}

	render(): React.Element {
		var refreshControl = (
			<RefreshControl
				refreshing={this.animating}
				onRefresh={() => {
					this.props.checkRefreshTerms();
					this.props.requestHomePosts();
					this.props.requestTodaysWord(Math.floor(Math.random() * (15545 - 0)) + 0);
				}}
				tintColor='#000000'
				title='Loading...'
				titleColor='#00ff00'
				colors={['#ff0000', '#00ff00', '#0000ff']}
				progressBackgroundColor='#f9f9f9'/>
		);

		var searchBarView;
		var mplplayerLogo = require('./../../../assets/mplplayer-mosaic.png');

		searchBarView = (
			<View style={hStyles.searchBarContainer}>
				<Image source={mplplayerLogo} style={hStyles.mplplayerLogo}/>
				<TextInput
					style={hStyles.searchBar}
					placeholder='Search...'
					placeholderTextColor='#c0c0c0'
					underlineColorAndroid='transparent'
					onFocus={() => {
						this.setState({ searching:true }, () => {
							if (this.state.searching) {
								this.checkBindBackButton(false);
							}
						});
					}}
					onChangeText={(text) => {
						if (!this.state.searching) {
							this.setState({ searching:true }, () => {
								if (this.state.searching) {
									this.checkBindBackButton(false);
								}
							});
						}

						var matches = [];
						var searches = [];

						if (text.length > 2) {
							matches = DidYouMean(text, this.props.terms, {
								returnType: 'all-sorted-matches',
							})

							matches.map((match) => {
								this.props.terms.map((term, index) => {
									if (match.toLowerCase() === term.toLowerCase()) {
										searches.push({ label: match, id: 'def' + index, catergory: '' })
									}
								})
							})

							this.setState({ searches: searches }, console.log('searches', searches))
						}
					}}/>
			</View>
		)

		var wotdView;

		if (this.props.wotd) {
			wotdView = (
				<Card key={'clv_word'} style={hStyles.wotdCard}>
					<TouchableNativeFeedback onPress={() => {
						this.cancelSearch();
						this.props.requestTerm(this.props.wotd.get('id'));
					}}>
						<View style={hStyles.wotdBody}>
							{/*<Card.Media
							 image={<Image source={{uri: 'http://www.marketrelevancecorp.com/images/1.jpg'}}/>}
							 style={hStyles.wotdMedia}>
							 </Card.Media>*/}
							<Text style={hStyles.wotdText}>{this.props.wotd.get('label')}</Text>
							<Text style={hStyles.wotdCategory}>category</Text>
						</View>
					</TouchableNativeFeedback>
				</Card>
			)
		}

		var postsView = [];

		if (this.props.posts) {
			this.props.posts.map((post, index) => {
				postsView.push(
					<Card key={'clvr_posts_' + index}>
						<Card.Media
							image={<Image source={{uri: post.get('image')}}/>}
							overlay>
							<TouchableNativeFeedback onPress={() => {
								this.browseTo(post.get('url'));
							}}>
								<Text style={hStyles.postText}>{post.get('text')}</Text>
							</TouchableNativeFeedback>
						</Card.Media>
					</Card>
				);
			});
		}

		var recentView = [];
		var searchesView = [];

		if (this.props.searches) {
			if (this.props.searches.get('recent')) {
				this.props.searches.get('recent').map((search, index) => {
					recentView.push(
						<Card key={'clvr_recent_' + index}>
							<Card.Body style={hStyles.searchesCard}>
								<TouchableNativeFeedback onPress={() => {
									this.cancelSearch();
									this.props.requestTerm(search.get('id'));
								}}>
									<View style={hStyles.searchesBody}>
										<Text style={hStyles.searchesText}>{search.get('label')}</Text>
										<Text style={hStyles.searchesCategory}>category</Text>
									</View>
								</TouchableNativeFeedback>
							</Card.Body>
						</Card>
					);
				});
			}

			this.state.searches.map((search, index) => {
				searchesView.push(
					<Card key={'clvr_search_' + index}>
						<Card.Body style={hStyles.searchesCard}>
							<TouchableNativeFeedback onPress={() => {
								this.cancelSearch();
								this.props.requestTerm(search.id);
							}}>
								<View style={hStyles.searchesBody}>
									<Text style={hStyles.searchesText}>{search.label}</Text>
									<Text style={hStyles.searchesCategory}>category</Text>
								</View>
							</TouchableNativeFeedback>
						</Card.Body>
					</Card>
				)
			});
		}

		const navigationView = (
			this.props.profile && (
				<View style={[hStyles.sidebar]}>
					<View style={hStyles.sbProfileName}>
						<Avatar size={48} image={
							<Image
								style={hStyles.sbProfileImage}
								source={{ uri: this.props.profile.picture.data.url }}/> }/>
						<Text style={hStyles.sbProfileText}>{this.props.profile.name}</Text>
					</View>
					<TouchableNativeFeedback>
						<View style={hStyles.sbFeaturedContent}>
							<Text style={hStyles.sbHeader}>
								Become a Mplplayer Pro!
							</Text>
							<Text style={hStyles.sbSubHeader}>
								Earn Up to $65/hr as a Mplplayer Pro.
							</Text>
						</View>
					</TouchableNativeFeedback>
					<View style={hStyles.menuItems}>
						{[{
							label: 'Settings',
							action: (event) => {
								Actions.settings();
							}
						}].map((menu, index) => {
							return (
								<View
									key={'menu_' + index} s
									style={hStyles.menuItem}>
									<TouchableNativeFeedback onPress={menu.action}>
										<Text style={hStyles.menuLabel}>{menu.label}</Text>
									</TouchableNativeFeedback>
								</View>
							);
						})}
					</View>
					<View style={hStyles.sbFooter}>
						<Text style={hStyles.versionText}>v0.0.1-alpha</Text>
					</View>
					<TouchableHighlight
						style={hStyles.closeButton}
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
			<View style={hStyles.container}>
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
						style={hStyles.homeToolbar}
						titleColor='#fff' />
					<ScrollView
						contentContainerStyle={hStyles.scrollContainer}
						refreshControl={refreshControl}>
						{searchBarView}
						<View style={hStyles.slideContainer}>
							{!this.state.searching &&
								<View style={hStyles.contentContainer}>
									{wotdView}
									{postsView}
								</View>}
							{this.state.searching &&
								<View style={hStyles.contentContainer}>
									{searchesView.length > 0 ? searchesView : recentView}
								</View>}
						</View>
					</ScrollView>
				</DrawerLayout>
			</View>
		);
	}
}

Home.propTypes = {
	requestHomePosts: PropTypes.func.isRequired,
};

export default Home;
