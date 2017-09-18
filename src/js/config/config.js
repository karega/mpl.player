/* config.js */

var SERVICE_URL = "https://cloveracademics.com:8443";

const config = {
    serviceURL : SERVICE_URL,
    getRegistrationURL(): string {
        return this.serviceURL + "/register/";
    },
	getMenuURL(): string {
    	return this.serviceURL + "/menus/";
	},
};

export default config;
