/* choose-primary.js */

/** External Module Dependencies **/
import React, {PropTypes} from 'react';
import {
	Dimensions,
	Image,
	RefreshControl,
	ScrollView,
	StyleSheet,
	Text,
	TouchableNativeFeedback,
	View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

/** Global Module Dependencies **/
import { skillMap } from './../../../config/constants';

/** Internal Module Dependencies **/
import bStyles from './../styles/builder-styles';

type ChoosePrimaryPropTypes = { };

type ChoosePrimaryStateTypes = { };

const { width, height } = Dimensions.get('window');

class ChoosePrimary extends React.PureComponent<any, ChoosePrimaryPropTypes, ChoosePrimaryStateTypes> {
	props: ChoosePrimaryPropTypes;
	state: ChoosePrimaryStateTypes;

	constructor(props: ChoosePrimaryPropTypes): void {
		super(props);

		this.animating = false;
		this.state = { };
	}

	render() {
		var refreshControl = (
			<RefreshControl
				enabled={false}
				refreshing={this.animating}
				onRefresh={() => { }}
				tintColor='#000000'
				title='Loading...'
				titleColor='#000000'
				colors={['#000000', '#000000', '#000000']}
				progressBackgroundColor='#000000'/>
		);

		return (
			<View style={[bStyles.container, { height: height - 48 }]}>
				<TouchableNativeFeedback
					onPress={() => {
						this.props.choosePage(1);
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
					<Text style={bStyles.secondaryText}>PRIMARY SKILL</Text>
				</View>
				<ScrollView
					contentContainerStyle={[bStyles.scrollContainer, { width: width, paddingBottom: 20 }]}
					refreshControl={refreshControl}>
					{this.props.position && (
						Object.keys(this.props.position).map((key, index) => {
							return (
								<TouchableNativeFeedback
									key={'mpl_pos_' + index}
									onPress={() => {
										this.props.choosePrimary(key)
									}}>
									<View style={[bStyles.skillPanel, { width: 140, height: 190, maxWidth: 140, maxHeight: 190, alignItems: 'center', paddingLeft: 10, paddingRight: 10 }]}>
										<Image key={'cyp_' + index} source={skillMap[key]} style={[bStyles.cypImage, { width: 104, height: 171, maxWidth: 104, maxHeight: 171 }]} />
										<Text style={bStyles.skillText}>
											{key}
										</Text>
									</View>
								</TouchableNativeFeedback>
							)
						})
					)}
				</ScrollView>
			</View>
		)
	}
}

ChoosePrimary.propTypes = { };

export default ChoosePrimary;