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
	TouchableWithoutFeedback,
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
import Carousel from 'react-native-carousel-view';

/** Global Module Dependencies **/
import {navigationView} from './../../../config/constants';

/** Internal Module Dependencies **/
import Overview from './overview';
import Badges from './badges';
import Caps from './caps';
import Attributes from './attributes';
import sStyles from './../styles/summary-styles';

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

		const isBuilds = !props.current || (!props.builds && !(props.builds && props.builds.size > 0));

		this.state = {
			step: 1,
			drawer: isBuilds
		}

		this.checkBuilds = this.checkBuilds.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	componentDidMount() {
		const isBuilds = !this.props.current || (!(this.props.builds) && !(this.props.builds && this.props.builds.size > 0));

		if (this.state.drawer !== isBuilds) {
			this.setState({ drawer: isBuilds });
		}
	}

	componentDidUpdate(prevProps, prevState) {
		this.checkBuilds();
	}

	checkBuilds() {
		if (this.props.builds.size === 0) {
			this.toggleMenu(true)
		}
	}

	toggleMenu(menuState) {
		this.setState({
			drawer: menuState
		})
	}

	render(): React.Element {
		const ARCHETYPE = (this.props.current && this.props.current.archetype) ? this.props.current.archetype : null;
		const sideMenuButton = (drawer) => {
			return (
				<TouchableWithoutFeedback
					onPress={() => this.toggleMenu(!drawer)}>
					<View style={sStyles.menuButton}>
						{drawer ? (
							<Icon
								color={'#fff'}
								name={'close'}
								size={32} />
						) : (
							<Icon
								color={'#fff'}
								name={'menu'}
								size={32} />
						)}
					</View>
				</TouchableWithoutFeedback>
			)
		}

		return (
			<SideMenu
				menu={navigationView(this.props.profile)}
				isOpen={this.state.drawer}
				onChange={this.toggleMenu}
				openMenuOffset={width * 0.8}
				disableGestures={true}
				autoClosing={false}>
				<View style={[sStyles.container, { height: height, width: width }]}>
					{
						(this.props.builds.size > 0 && ARCHETYPE) && (
							<View style={sStyles.headerContainer}>
								<Text style={sStyles.secondaryText}>{ARCHETYPE[0]}</Text>
								<Text style={sStyles.primaryText}>{ARCHETYPE[1]}</Text>
							</View>
						)
					}
					{
						(this.props.builds.size > 0) && (
							<View style={{ flex: 1, height: height - 115, width: width }}>
								<Carousel
									initialPage={0}
									animate={false}
									width={width}
									height={(height - 115)}
									delay={2000}
									indicatorAtBottom={true}
									indicatorSize={20}
									indicatorColor='#BF1725'>
									<View style={[sStyles.summaryContainer, { alignSelf: 'flex-end', height: height }]}>
										<Overview height={height - 115} width={width} {...this.props} comparator={false} />
									</View>
									<View style={[sStyles.summaryContainer, { alignSelf: 'flex-end', height: height }]}>
										<Badges r{...this.props} />
									</View>
									<View style={[sStyles.summaryContainer, { alignSelf: 'flex-end', height: height }]}>
										<Caps {...this.props} />
									</View>
									{/*<View style={[sStyles.summaryContainer, { height: height }]}>
										<Attributes {...this.props} />
									</View>*/}
								</Carousel>
							</View>
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
					{ sideMenuButton(this.state.drawer) }
				</View>
			</SideMenu>
		);
	}
}

Summary.propTypes = { };

export default Summary;
