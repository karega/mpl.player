/* reducer.js */

/** Internal Module Dependencies **/
import appInitialState from './../app-state/app-initial-state';
import manager from './../components/manager/reducers/manager-reducers';
import home from './../components/home/reducers/home-reducers';
import term from './../components/term/reducers/term-reducers';
import summary from './../components/summary/reducers/summary-reducers';
import builder from './../components/builder/reducers/builder-reducers';
import compare from './../components/compare/reducers/compare-reducers';
import browser from './../components/browser/reducers/browser-reducers';
import modals from './../components/modal/reducers/modal-reducers';
import notification from './../components/notification/reducers/notification-reducers';
import routes from './../components/route/reducers/routes-reducers';
import session from './../components/session/reducers/session-reducers';

export default function reducer(state: Object = appInitialState, action: Object): Object {
	return {
		archetypes: state.archetypes,
		attributes: state.attributes,
		manager: manager(state.manager, action),
		buttons: state.buttons,
		definitions: state.definitions,
		home: home(state.home, action),
		term: term(state.term, action),
		summary: summary(state.summary, action),
		builder: builder(state.builder, action),
		compare: compare(state.compare, action),
		browser: browser(state.browser, action),
		modal: modals(state.modal, action),
		notification: notification(state.notification, action),
		scene: routes(state.scene, action),
		session: session(state.session, action)
	};
}