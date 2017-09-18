/* routes-reducers.js */

/** External Module Dependencies **/
import { ActionConst } from 'react-native-router-flux';

const routes = function (scene, action): Object {
	switch (action.type) {
		case ActionConst.FOCUS:
			return action.scene;

		default:
			return scene;
	}
};

export default routes;
