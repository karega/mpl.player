/* manager.js */

import React, {PropTypes} from 'react';

type ManagerPropTypes = { }

class Manager extends React.PureComponent<any, ManagerPropTypes, void> {
	props: ManagerPropTypes

	constructor(props: ManagerPropTypes): void {
		super(props);
	}

	render(): ?React.Element {
		return null;
	}
}

Manager.propTypes = { };

export default Manager;
