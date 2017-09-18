/* choose-secondary.js */

/** External Module Dependencies **/
import React, {PropTypes} from 'react';
import {Dimensions, Image, RefreshControl, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';

/** Global Module Dependencies **/
import { skillMap } from './../../../config/constants';

/** Internal Module Dependencies **/
import bStyles from './../styles/builder-styles';

type ChooseSecondaryPropTypes = { };

type ChooseSecondaryStateTypes = { };

const { width, height } = Dimensions.get('window');

class ChooseSecondary extends React.PureComponent<any, ChooseSecondaryPropTypes, ChooseSecondaryStateTypes> {
	props: ChooseSecondaryPropTypes;
	state: ChooseSecondaryStateTypes;

	constructor(props: ChooseSecondaryPropTypes): void {
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
				<View style={bStyles.headerContainer}>
					<Text style={bStyles.primaryText}>CHOOSE</Text>
					<Text style={bStyles.secondaryText}>SECONDARY</Text>
				</View>
				<ScrollView
					contentContainerStyle={bStyles.scrollContainer}
					refreshControl={refreshControl}>
					<View style={[bStyles.contentContainer, bStyles.skillContainer, { width: width, paddingBottom: 20 }]}>
						{this.props.primary && (
							this.props.primary.map((key, index) => {
								return (
									<TouchableNativeFeedback
										key={'mpl_pos_' + index}
										onPress={() => {
											this.props.chooseSecondary(key)
										}}>
										<View style={[bStyles.skillPanel, { width: (width / 2), height: ((height - 160) / 3) }]}>
											<Image source={skillMap[key['Secondary Skill']]} style={[bStyles.cypImage, { width: (width / 4), height: ((height - 160) / 4) }]}/>
											<Text style={bStyles.skillText}>
												{key['Secondary Skill']}
											</Text>
										</View>
									</TouchableNativeFeedback>
								)
							})
						)}
					</View>
				</ScrollView>
			</View>
		)
	}
}

ChooseSecondary.propTypes = { };

export default ChooseSecondary;