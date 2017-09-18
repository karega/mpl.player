/* sub-header.js */

import Immutable from 'immutable';
import React, {PropTypes} from 'react';
import {
	View,
	Text
} from 'react-native';

import {
	CHECKLIST_KEY,
	CURRENT_STOP_KEY,
	DRIVER_KEY,
	SESSION_KEY
} from './../../config/constants.js';
import shStyles from './../../_delete_a/sub-header-_delete_a';

type SubHeaderPropTypes = {
	scene : Object;
	session : Immutable.Map< string , any >;
	stops : Object;
};

const SubHeader = ({scene, session, stops} : SubHeaderPropTypes) => {
	// id implies driverId...
	if (session.get(SESSION_KEY) === null) {
		return null;
	}
	if (( session.get(SESSION_KEY) !== null )
		&& ( scene !== null )
		&& ( scene.sceneKey == DRIVER_KEY )
	) {
		return null;
	}

	var driverName = "";
	if (stops !== null) {
		stops.map(
			(stop, index) => {
				var driverNameKey = "DRIVER_NAME";
				if (stop.get(driverNameKey)
					&& ( stop.get(driverNameKey) !== null )
					&& ( stop.get(driverNameKey) !== "" )
				) {
					driverName = ( ( stop.get(driverNameKey).length > 15 ) ? stop.get(driverNameKey).substr(0, 12) : stop.get(driverNameKey) );
				}
			}
		).toArray();
	}
	var stopText = null;
	if (( scene !== null ) && ( scene.sceneKey === CHECKLIST_KEY )) {
		stopText = " - Stop " + session.get(CURRENT_STOP_KEY);
	}
	return (
		<View style={ shStyles.container }> <Text style={ shStyles.driver }>{ driverName }</Text>
			<Text style={ shStyles.route }>{ stopText }</Text> </View>
	);
};

SubHeader.propTypes = {
	scene: PropTypes.object,
	session: PropTypes.object.isRequired,
	stops: PropTypes.object.isRequired,
};

export default SubHeader;
