/* routes.js */

/** External Module Dependencies **/
import React from 'react';
import { Scene,	Actions } from 'react-native-router-flux';

/** Internal Module Dependencies **/
import AdmobProvider from './../../admob/providers/admob-provider';
import BrowserProvider from './../../browser/providers/browser-provider';
import BuilderProvider from './../../builder/providers/builder-provider';
import CompareProvider from './../../compare/providers/compare-provider';
import LoginProvider from './../../login/providers/login-provider';
import SettingsProvider from './../../settings/providers/settings-provider';
import SummaryProvider from './../../summary/providers/summary-provider';

/** Create it via Actions.create(), or it will be re-created for each render of your Router **/
const scenes = Actions.create(
	<Scene key='root' hideNavBar={ true }>
		<Scene key={ 'admob' } component={ AdmobProvider } title={ 'Admob' } />
		<Scene key={ 'browser' } component={ BrowserProvider } title={ 'Browser' } />
		<Scene key={ 'builder' } component={ BuilderProvider } title={ 'Builder' } />
		<Scene key={ 'compare' } component={ CompareProvider } title={ 'Compare' } />
		<Scene key={ 'login' } component={ LoginProvider } title={ 'Login' } initial={ true } />
		<Scene key={ 'settings' } component={ SettingsProvider } title={ 'Settings' } />
		<Scene key={ 'summary' } component={ SummaryProvider } title={ 'Summary' } />
	</Scene>
);

export default scenes;