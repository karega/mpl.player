/* builder-provider.js */

/** External Module Dependencies **/
import {connect} from 'react-redux';
import {pathOr} from 'ramda';

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

const mapStateToProps = (state) => {
	const getPosition = (state) => {
		var	build = state.builder.get('current');
		var position = pathOr(null, ['bio', 'position'])(build);

		return position ? state.archetypes[position] : null
	}

	const getPrimarySkill = (state) => {
		var	build = state.builder.get('current');
		var position = pathOr(null, ['bio', 'position'])(build);

		if (position) {
			var primary = pathOr(null, ['skills', 'primary'])(build);

			return state.archetypes[position][primary] ? state.archetypes[position][primary] : null
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
