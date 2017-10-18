/* caps.js */

/** External Module Dependencies **/
import React, {PropTypes} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';

var Spinner = require('./rn-spinner');

/** Global Module Dependencies **/
import * as badgeImages from './../../../config/constants';
import attribute_caps from './../../../app-state/attribute-caps';
import badge_icons from './../../../app-state/badge-icons';

/** Internal Module Dependencies **/
import sStyles from './../styles/summary-styles';

type CapsPropTypes = { };

type CapsStateTypes = { };

const { width, height } = Dimensions.get('window');

class Caps extends React.PureComponent<any, CapsPropTypes, CapsStateTypes> {
	props: CapsPropTypes;
	state: CapsStateTypes;

	constructor(props: CapsPropTypes): void {
		super(props);

		this.builds = attribute_caps.filter((build, index) => {
			return (
				build['Position'].toLowerCase() === props.current.bio.position.toLowerCase() &&
				build['Primary Skill'].toLowerCase() === props.current.skills.primary.toLowerCase() &&
				build['Secondary Skill'].toLowerCase() === props.current.skills.secondary.toLowerCase()
			)
		})

		this.heights = this.builds.reduce((accumulator, build) => accumulator.concat(build['Height']), []).sort();
		this.build = this.builds[0];

		this.state = {
			build: this.build
		};
	}

	render() {
		const COMPARE = !this.props.comparator;

		const getCaps = () => {
			var pbcWidth = COMPARE ? width / 3.177 : this.props.width;

			return (
				this.state.build && Object.keys(this.state.build).map((buildKey, index) => {
					if (buildKey === 'Position' ||
						buildKey === 'Primary Skill' ||
						buildKey === 'Passing & Ball Handling' ||
						buildKey === 'Secondary Skill' ||
						buildKey === 'Height' ||
						buildKey === 'Weight' ||
						buildKey === 'Wingspan') {

					}
					else {
						return (
							<View
								key={'cap_Value_' + index}
								style={[
									sStyles.attributeItem,
									{ width: pbcWidth, height: 100 }]}>
								<Text style={sStyles.attributeText}>{this.state.build[buildKey]}</Text>
								<Text style={{
									fontSize: 14,
									color: '#fff',
									textAlign: 'center',
									alignSelf: 'center',
									paddingBottom: 0,
									height: 32,
									lineHeight: 15,
									textAlignVertical: 'center'
								}}>{buildKey}</Text>
							</View>
						)
					}
				})
			)
		}

		return (
			<View style={[sStyles.capsContainer, { width: COMPARE ? width : this.props.width, height: height - 160, paddingTop: COMPARE ? 20 : 0 }]}>
				{ COMPARE && (
					<View style={[sStyles.filterContainer, { width: COMPARE ? width : width - 40, height: 100, alignSelf: 'center', marginTop: -40 }]}>
						<View
							key={'cap_Height'}
							style={[
								sStyles.filterItem,
								{ width: (width / 3.177), height: 100 }]}>
							<Spinner
								max={+(this.heights[this.heights.length - 1])}
								min={+(this.heights[0])}
								default={+(this.heights[0])}
								color='#000'
								numColor='#000'
								format={'feet'}
								numLabelStyle={{
									fontSize: 14,
									color: '#fff',
									textAlign: 'center',
									alignSelf: 'center',
									paddingBottom: 0,
									height: 32,
									lineHeight: 15,
									textAlignVertical: 'center',
									width: 64,
								}}
								numFooterLabel={'Height'}
								numTextStyle={[sStyles.filterText, { paddingLeft: 8 }]}
								btnFontSize={18}
								onNumChange={(num)=> {
									this.build = attribute_caps.filter((build, index) => {
										return (
											build['Position'].toLowerCase() === this.props.current.bio.position.toLowerCase() &&
											build['Primary Skill'].toLowerCase() === this.props.current.skills.primary.toLowerCase() &&
											build['Secondary Skill'].toLowerCase() === this.props.current.skills.secondary.toLowerCase() &&
											build['Height'] == num
										)
									})[0]

									this.setState({
										build: this.build
									})
								}} />
						</View>
						<View
							key={'cap_Wingspan'}
							style={[
								sStyles.filterItem,
								{ width: (width / 3.177), height: 100 }]}>
							<Spinner
								max={0}
								min={0}
								default={0}
								format={['DEFAULT']}
								color='#000'
								numColor='#000'
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
								numFooterLabel={'Wingspan'}
								numTextStyle={[sStyles.filterText, { fontSize: 12, height: 26, textAlignVertical: 'center' }]}
								btnFontSize={18}
								onNumChange={(num)=> {

								}} />
						</View>
						<View
							key={'cap_Weight'}
							style={[
								sStyles.filterItem,
								{ width: (width / 3.177), height: 100 }]}>
							<Spinner
								max={0}
								min={0}
								default={0}
								format={['DEFAULT']}
								color='#000'
								numColor='#000'
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
								numFooterLabel={'Weight'}
								numTextStyle={[sStyles.filterText, { fontSize: 12, height: 26, textAlignVertical: 'center' }]}
								btnFontSize={18}
								onNumChange={(num)=> {

								}} />
						</View>
					</View>
				)}
				{
					COMPARE && (
						<ScrollView contentContainerStyle={sStyles.scrollContainer}>
							{ getCaps() }
						</ScrollView>
					)
				}
				{
					!COMPARE && (
						<View style={[sStyles.scrollContainer, { flexDirection: 'column' }]}>
							{ getCaps() }
						</View>
					)
				}
			</View>
		)
	}
}

Caps.propTypes = { };

export default Caps;