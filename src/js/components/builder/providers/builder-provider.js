/* builder-provider.js */

/** External Module Dependencies **/
import {connect} from 'react-redux';
import {pathOr} from 'ramda';

/** Global Module Dependencies **/
import pg from './../../../app-state/pg';
import sg from './../../../app-state/sg';
import sf from './../../../app-state/sf';
import pf from './../../../app-state/pf';
import c from './../../../app-state/c';

/** Internal Module Dependencies **/
import {
	choosePosition,
	choosePrimary,
	chooseSecondary,
	saveCurrentBuild,
	startBuilder,
	choosePage,
} from './../actions/builder-actions';
import Builder from './../elements/builder';

const archetypes = { pg, sg, sf, pf, c, }

const mapStateToProps = (state) => {
	const getPosition = (state) => {
		var	build = state.builder.get('current');
		var position = pathOr(null, ['bio', 'position'])(build);

		return position ? archetypes[position] : null
	}

	const getPrimarySkill = (state) => {
		var	build = state.builder.get('current');
		var position = pathOr(null, ['bio', 'position'])(build);

		if (position) {
			var primary = pathOr(null, ['skills', 'primary'])(build);

			return archetypes[position][primary] ? archetypes[position][primary] : null
		}

		return null;
	}

	return {
		builder: state.builder,
		step: +(state.builder.get('step')),

		position: getPosition(state),
		primary: getPrimarySkill(state),

		profile: state.session.get('profile'),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		choosePosition: (position) => {
			dispatch(choosePosition(position));
		},
		choosePrimary: (primary) => {
			dispatch(choosePrimary(primary));
		},
		chooseSecondary: (secondary) => {
			dispatch(chooseSecondary(secondary));
		},
		saveCurrentBuild: () => {
			dispatch(saveCurrentBuild());
		},
		startBuilder: () => {
			dispatch(startBuilder());
		},
		choosePage: (page) => {
			dispatch(choosePage(page));
		},
	};
};

const BuilderProvider = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Builder);

export default BuilderProvider;
