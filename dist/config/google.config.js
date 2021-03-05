"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = config_1.registerAs('google', () => ({
    googleapikey: process.env.googleapikey || 'AIzaSyARh999xf1IB1eVDaLjMnowtb7FttUimAY',
    authdomain: process.env.authdomain || 'https://fastauth-miteshmetha.firebaseapp.com'
}));
//# sourceMappingURL=google.config.js.map