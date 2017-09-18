/* routes.js */

/** External Module Dependencies **/
import React from 'react';
import { Scene,	Actions } from 'react-native-router-flux';

/** Internal Module Dependencies **/
import LoginProvider from './../../login/providers/login-provider';
import BrowserProvider from './../../browser/providers/browser-provider';
import SettingsProvider from './../../settings/providers/settings-provider';
import HomeProvider from './../../home/providers/home-provider';
import TermProvider from './../../term/providers/term-provider';
import SummaryProvider from './../../summary/providers/summary-provider';
import BuilderProvider from './../../builder/providers/builder-provider';
import CompareProvider from './../../compare/providers/compare-provider';

/** Create it via Actions.create(), or it will be re-created for each render of your Router **/
const scenes = Actions.create(
	<Scene key="root" hideNavBar={ true }>
		<Scene key={ "login" } component={ LoginProvider } title={ "Login" } initial={ true } />
		<Scene key={ "browser" } component={ BrowserProvider } title={ "Browser" } />
		<Scene key={ "settings" } component={ SettingsProvider } title={ "Settings" } />
		<Scene key={ "home" } component={ HomeProvider } title={ "Home" } />
		<Scene key={ "term" } component={ TermProvider } title={ "Term" } />
		<Scene key={ "summary" } component={ SummaryProvider } title={ "Summary" } />
		<Scene key={ "builder" } component={ BuilderProvider } title={ "Builder" } />
		<Scene key={ "compare" } component={ CompareProvider } title={ "Compare" } />
	</Scene>
);

export default scenes;