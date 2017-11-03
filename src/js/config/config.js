/* config.js */

/** External Module Dependencies **/
import * as firebase from 'firebase';

const SERVICE_URL = "https://myparklegends.com:8443";

export const config = {
    serviceURL : SERVICE_URL,
    getRegistrationURL(): string {
        return this.serviceURL + "/register/";
    },
	getMenuURL(): string {
    	return this.serviceURL + "/menus/";
	},
};

const firebaseConfig = {
	apiKey: "AIzaSyDsTzpUNU04CiQsXt1AkrtH_QDtp8Lsl0Y",
	authDomain: "mypark-legends-player-lab.firebaseapp.com",
	databaseURL: "https://mypark-legends-player-lab.firebaseio.com/",
	storageBucket: "gs://mypark-legends-player-lab.appspot.com",
};

export const middleware = firebase.initializeApp(firebaseConfig);