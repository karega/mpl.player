/* app-styles.js */

import { StyleSheet } from 'react-native';

const AppStyles = StyleSheet.create({
	container: {
		backgroundColor : "#ebebeb" ,
		flex : 1 ,
		flexDirection : "column" ,
		justifyContent : "space-between" ,
	},
	thirtySecondthSpacer: {
		flex: 0.03125
	},
	sixteenthSpacer: {
		flex: 0.0625
	},
	eighthSpacer: {
		flex: 0.125
	},
	quarterSpacer: {
		flex: 0.25
	},
	halfSpacer: {
		flex: 0.5
	}
});

export default AppStyles;
