/* choose-position.js */

/** External Module Dependencies **/
import React, {PropTypes} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
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
	}

	render() {
		var cypSF = require('./../../../assets/cyp-sf.png');
		var cypPF = require('./../../../assets/cyp-pf.png');
		var cypC = require('./../../../assets/cyp-c.png');
		var cypPG = require('./../../../assets/cyp-pg.png');
		var cypSG = require('./../../../assets/cyp-sg.png');

		return (
			<View style={[bStyles.container, { height: height - 48 }]}>
				<TouchableNativeFeedback
					onPress={() => { }}>
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
								<View>
									<Text
										textShadowColor={'#000'}
										textShadowOffset={{ width: 6, height: 6 }}
										textShadowRadius={4}
										style={[bStyles.positionText, { width: width }]}>POINT GUARD</Text>
									<Image source={cypPG} style={[bStyles.cypImage, { height: (height - 160) }]} />
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={bStyles.cypContainer}>
							<TouchableNativeFeedback
								onPress={() => { this.props.choosePosition('sg') }}>
								<View>
									<Text
										textShadowColor={'#000'}
										textShadowOffset={{ width: 6, height: 6 }}
										textShadowRadius={4}
										style={[bStyles.positionText, { width: width }]}>SHOOTING GUARD</Text>
									<Image source={cypSG} style={[bStyles.cypImage, { height: (height - 160) }]} />
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={bStyles.cypContainer}>
							<TouchableNativeFeedback
								onPress={() => { this.props.choosePosition('sf') }}>
								<View>
									<Text
										textShadowColor={'#000'}
										textShadowOffset={{ width: 6, height: 6 }}
										textShadowRadius={4}
										style={[bStyles.positionText, { width: width }]}>SMALL FORWARD</Text>
									<Image source={cypSF} style={[bStyles.cypImage, { height: (height - 160) }]} />
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={bStyles.cypContainer}>
							<TouchableNativeFeedback
								onPress={() => { this.props.choosePosition('pf') }}>
								<View>
									<Text
										textShadowColor={'#000'}
										textShadowOffset={{ width: 6, height: 6 }}
										textShadowRadius={4}
										style={[bStyles.positionText, { width: width }]}>POWER FORWARD</Text>
									<Image source={cypPF} style={[bStyles.cypImage, { height: (height - 160) }]} />
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={bStyles.cypContainer}>
							<TouchableNativeFeedback
								onPress={() => { this.props.choosePosition('c') }}>
								<View>
									<Text
										textShadowColor={'#000'}
										textShadowOffset={{ width: 6, height: 6 }}
										textShadowRadius={4}
										style={[bStyles.positionText, { width: width }]}>CENTER</Text>
									<Image source={cypC} style={[bStyles.cypImage, { height: (height - 160) }]} />
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