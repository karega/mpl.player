/* attributes.js */

/** External Module Dependencies **/
import React, {PropTypes} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

var Spinner = require('./rn-spinner');

/** Internal Module Dependencies **/
import sStyles from './../styles/summary-styles';

type AttributesPropTypes = { };

type AttributesStateTypes = { };

const { width, height } = Dimensions.get('window');

class Attributes extends React.PureComponent<any, AttributesPropTypes, AttributesStateTypes> {
	props: AttributesPropTypes;
	state: AttributesStateTypes;

	constructor(props: AttributesPropTypes): void {
		super(props);

		this.state = { };
	}

	render() {
		return (
			<View style={[sStyles.playerAttributeContainer, { height: height - 160 }]}>
				<ScrollView
					contentContainerStyle={sStyles.scrollContainer}>
				{
					this.props.attributes && Object.keys(this.props.attributes).map((attribute, index) => {
						if (index > 0) {
							let attributeName = attribute;
							let attributeValues = this.props.attributes[attribute].split('-');
							let max = attributeValues[1] ? +attributeValues[1] : 25;
							let	min = attributeValues[0] ? +attributeValues[0] : 0;

							return (
								<View
									key={'attr_' + index}
									style={[
										sStyles.attributeItem,
										{ width: (width / 3.177), height: (height / 3.5) }]}>
									<Spinner
										max={max}
										min={min}
										default={min}
										color="#000"
										numColor="#000"
										numLabel={'Level'}
										numLabelStyle={{
											fontSize: 14,
											color: '#fff',
											textAlign: 'center',
											alignSelf: 'center',
											paddingBottom: 0,
											height: 32,
											lineHeight: 15,
											textAlignVertical: 'center'
										}}
										numFooterLabel={attributeName}
										numTextStyle={sStyles.attributeText}
										btnFontSize={18}
										onNumChange={(num)=>{console.log(num)}} />
								</View>
							)
						}
					})
				}
				</ScrollView>
			</View>
		)
	}
}

Attributes.propTypes = { };

export default Attributes;