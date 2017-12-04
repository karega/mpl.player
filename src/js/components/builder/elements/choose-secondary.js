/* choose-secondary.js */

/** External Module Dependencies **/
import React, {PropTypes} from 'react';
import {
	Dimensions,
	Image,
	RefreshControl,
	ScrollView,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
				<TouchableWithoutFeedback
					onPress={() => {
						this.props.choosePage(2);
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
					<Text style={bStyles.secondaryText}>SECONDARY</Text>
				</View>
				<ScrollView
					contentContainerStyle={[bStyles.scrollContainer, { width: width, paddingBottom: 20 }]}
					refreshControl={refreshControl}>
					{this.props.primary && (
						this.props.primary.map((key, index) => {
							return (
								<TouchableWithoutFeedback
									key={'mpl_pos_' + index}
									onPress={() => {
										this.props.chooseSecondary(key)
									}}>
									<View style={[bStyles.skillPanel, { width: 140, height: 190, maxWidth: 140, maxHeight: 190, alignItems: 'center', paddingLeft: 10, paddingRight: 10 }]}>
										<Image key={'cs_secondary_' + index} source={skillMap[key['Secondary Skill']]} style={[bStyles.cypImage, { width: 104, height: 171, maxWidth: 104, maxHeight: 171 }]} />
										<Text style={bStyles.skillText}>
											{key['Secondary Skill']}
										</Text>
									</View>
								</TouchableWithoutFeedback>
							)
						})
					)}
				</ScrollView>
			</View>
		)
	}
}

ChooseSecondary.propTypes = { };

export default ChooseSecondary;