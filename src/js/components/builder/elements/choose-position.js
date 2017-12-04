/* choose-position.js */

/** External Module Dependencies **/
import React, {PropTypes} from 'react';
import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
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
		const posW = width * 1.25;
		const posH = width * 1.25;
		const imgW = posW;
		const imgH = posH;

		return (
			<View style={[bStyles.container, { height: height - 48 }]}>
				<TouchableWithoutFeedback
					onPress={() => {
						Actions.summary();
					}}>
					<View style={bStyles.menuButton}>
						<Icon
							color={'#fff'}
							name={'arrow-back'}
							size={32}/>
					</View>
				</TouchableWithoutFeedback>
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
							<TouchableWithoutFeedback
								onPress={() => { this.props.choosePosition('pg') }}>
								<View style={[{ width: posW, maxWidth: posW, height: posH, maxHeight: posH }]}>
									<Text
										textShadowColor={'#000'}
										textShadowOffset={{ width: 6, height: 6 }}
										textShadowRadius={4}
										style={[bStyles.positionText, { width: posW }]}>POINT GUARD</Text>
									<Image key={'cyp_pg'} source={this.cypPG} style={[bStyles.cypImage, { width: imgW, maxWidth: imgW, height: imgH, maxHeight: imgH }]} />
								</View>
							</TouchableWithoutFeedback>
						</View>
						<View style={bStyles.cypContainer}>
							<TouchableWithoutFeedback
								onPress={() => { this.props.choosePosition('sg') }}>
								<View style={[{ width: posW, maxWidth: posW, height: posH, maxHeight: posH }]}>
									<Text
										textShadowColor={'#000'}
										textShadowOffset={{ width: 6, height: 6 }}
										textShadowRadius={4}
										style={[bStyles.positionText, { width: posW }]}>SHOOTING GUARD</Text>
									<Image key={'cyp_sg'} source={this.cypSG} style={[bStyles.cypImage, { width: imgW, maxWidth: imgW, height: imgH, maxHeight: imgH }]} />
								</View>
							</TouchableWithoutFeedback>
						</View>
						<View style={bStyles.cypContainer}>
							<TouchableWithoutFeedback
								onPress={() => { this.props.choosePosition('sf') }}>
								<View style={[{ width: posW, maxWidth: posW, height: posH, maxHeight: posH }]}>
									<Text
										textShadowColor={'#000'}
										textShadowOffset={{ width: 6, height: 6 }}
										textShadowRadius={4}
										style={[bStyles.positionText, { width: posW }]}>SMALL FORWARD</Text>
									<Image key={'cyp_sf'} source={this.cypSF} style={[bStyles.cypImage, { width: imgW, maxWidth: imgW, height: imgH, maxHeight: imgH }]} />
								</View>
							</TouchableWithoutFeedback>
						</View>
						<View style={bStyles.cypContainer}>
							<TouchableWithoutFeedback
								onPress={() => { this.props.choosePosition('pf') }}>
								<View style={[{ width: posW, maxWidth: posW, height: posH, maxHeight: posH }]}>
									<Text
										textShadowColor={'#000'}
										textShadowOffset={{ width: 6, height: 6 }}
										textShadowRadius={4}
										style={[bStyles.positionText, { width: posW }]}>POWER FORWARD</Text>
									<Image key={'cyp_pf'} source={this.cypPF} style={[bStyles.cypImage, { width: imgW, maxWidth: imgW, height: imgH, maxHeight: imgH }]} />
								</View>
							</TouchableWithoutFeedback>
						</View>
						<View style={bStyles.cypContainer}>
							<TouchableWithoutFeedback
								onPress={() => { this.props.choosePosition('c') }}>
								<View style={[{ width: posW, maxWidth: posW, height: posH, maxHeight: posH }]}>
									<Text
										textShadowColor={'#000'}
										textShadowOffset={{ width: 6, height: 6 }}
										textShadowRadius={4}
										style={[bStyles.positionText, { width: posW }]}>CENTER</Text>
									<Image key={'cyp_c'} source={this.cypC} style={[bStyles.cypImage, { width: imgW, maxWidth: imgW, height: imgH, maxHeight: imgH }]} />
								</View>
							</TouchableWithoutFeedback>
						</View>
					</Carousel>
				</View>
			</View>
		)
	}
}

ChoosePosition.propTypes = { };

export default ChoosePosition;