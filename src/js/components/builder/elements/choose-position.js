/* choose-position.js */

/** External Module Dependencies **/
import React, {PropTypes} from 'react';
import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TouchableNativeFeedback,
	View
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-carousel-view';

/** Internal Module Dependencies **/
import bStyles from './../styles/builder-styles';

type ChoosePositionPropTypes = { };

type ChoosePositionStateTypes = { };

const { width, height } = Dimensions.get('window');

class ChoosePosition extends React.PureComponent<any, ChoosePositionPropTypes, ChoosePositionStateTypes> {
	props: ChoosePositionPropTypes;
	state: ChoosePositionStateTypes;

	constructor(props: ChoosePositionPropTypes): void {
		super(props);

		this.state = { };

		this.cypSF = require('./../../../assets/cyp-sf.png');
		this.cypPF = require('./../../../assets/cyp-pf.png');
		this.cypC = require('./../../../assets/cyp-c.png');
		this.cypPG = require('./../../../assets/cyp-pg.png');
		this.cypSG = require('./../../../assets/cyp-sg.png');
	}

	render() {
		return (
			<View style={[bStyles.container, { height: height - 48 }]}>
				<TouchableNativeFeedback
					onPress={() => {
						Actions.summary();
					}}>
					<View style={bStyles.menuButton}>
						<Icon
							color={'#fff'}
							name={'arrow-back'}
							size={32}/>
					</View>
				</TouchableNativeFeedback>
				<View style={bStyles.headerContainer}>
					<Text style={bStyles.primaryText}>CHOOSE</Text>
					<Text style={bStyles.secondaryText}>POSITION</Text>
				</View>
				<View style={[bStyles.contentContainer, { height: (height - 160) }]}>
					<Carousel
						initialPage={2}
						animate={false}
						width={width}
						height={(height - 160)}
						delay={2000}
						indicatorAtBottom={true}
						indicatorSize={20}
						indicatorColor='#BF1725'>
						<View style={bStyles.cypContainer}>
							<TouchableNativeFeedback
								onPress={() => { this.props.choosePosition('pg') }}>
								<View style={[{ width: width, height: (height - 160) }]}>
									<Text
										textShadowColor={'#000'}
										textShadowOffset={{ width: 6, height: 6 }}
										textShadowRadius={4}
										style={[bStyles.positionText, { width: width }]}>POINT GUARD</Text>
									<Image source={this.cypPG} style={[bStyles.cypImage, { height: (height - 160) }]} />
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={bStyles.cypContainer}>
							<TouchableNativeFeedback
								onPress={() => { this.props.choosePosition('sg') }}>
								<View style={[{ width: width, height: (height - 160) }]}>
									<Text
										textShadowColor={'#000'}
										textShadowOffset={{ width: 6, height: 6 }}
										textShadowRadius={4}
										style={[bStyles.positionText, { width: width }]}>SHOOTING GUARD</Text>
									<Image source={this.cypSG} style={[bStyles.cypImage, { height: (height - 160) }]} />
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={bStyles.cypContainer}>
							<TouchableNativeFeedback
								onPress={() => { this.props.choosePosition('sf') }}>
								<View style={[{ width: width, height: (height - 160) }]}>
									<Text
										textShadowColor={'#000'}
										textShadowOffset={{ width: 6, height: 6 }}
										textShadowRadius={4}
										style={[bStyles.positionText, { width: width }]}>SMALL FORWARD</Text>
									<Image source={this.cypSF} style={[bStyles.cypImage, { height: (height - 160) }]} />
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={bStyles.cypContainer}>
							<TouchableNativeFeedback
								onPress={() => { this.props.choosePosition('pf') }}>
								<View style={[{ width: width, height: (height - 160) }]}>
									<Text
										textShadowColor={'#000'}
										textShadowOffset={{ width: 6, height: 6 }}
										textShadowRadius={4}
										style={[bStyles.positionText, { width: width }]}>POWER FORWARD</Text>
									<Image source={this.cypPF} style={[bStyles.cypImage, { height: (height - 160) }]} />
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={bStyles.cypContainer}>
							<TouchableNativeFeedback
								onPress={() => { this.props.choosePosition('c') }}>
								<View style={[{ width: width, height: (height - 160) }]}>
									<Text
										textShadowColor={'#000'}
										textShadowOffset={{ width: 6, height: 6 }}
										textShadowRadius={4}
										style={[bStyles.positionText, { width: width }]}>CENTER</Text>
									<Image source={this.cypC} style={[bStyles.cypImage, { height: (height - 160) }]} />
								</View>
							</TouchableNativeFeedback>
						</View>
					</Carousel>
				</View>
			</View>
		)
	}
}

ChoosePosition.propTypes = { };

export default ChoosePosition;