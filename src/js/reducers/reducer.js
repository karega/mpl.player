/* reducer.js */

/** Internal Module Dependencies **/
import appInitialState from './../app-state/app-initial-state';
import summary from './../components/summary/reducers/summary-reducers';
import compare from './../components/compare/reducers/compare-reducers';
import browser from './../components/browser/reducers/browser-reducers';
import modals from './../components/modal/reducers/modal-reducers';
import routes from './../components/route/reducers/routes-reducers';
import session from './../components/session/reducers/session-reducers';
import builder from './../components/builder/reducers/builder-reducers';
import admob from './../components/admob/reducers/admob-reducers';

export default function reducer(state: Object = appInitialState, action: Object): Object {
	return {
		summary: summary(state.summary, action),
		compare: compare(state.compare, action),
		browser: browser(state.browser, action),
		modal: modals(state.modal, action),
		scene: routes(state.scene, action),
		session: session(state.session, action),
		builder: builder(state.builder, action),
		admob: admob(state.admob, action),
	};
}