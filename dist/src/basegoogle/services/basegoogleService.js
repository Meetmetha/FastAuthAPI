"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.basegoogleService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const qs = require('querystring');
let basegoogleService = class basegoogleService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    async register(inputs) {
        const apikey = this.config.get('google.googleapikey');
        const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + apikey;
        const signedup = this.http.post(url, { "email": inputs.email, "password": inputs.password, "returnSecureToken": true }).toPromise()
            .then(res => res.data);
        return signedup;
    }
    async login(inputs) {
        const apikey = this.config.get('google.googleapikey');
        const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + apikey;
        const loggedin = this.http.post(url, { "email": inputs.email, "password": inputs.password, "returnSecureToken": true }).toPromise()
            .then(res => res.data);
        return loggedin;
    }
    async usergetinfo(inputs) {
        const apikey = this.config.get('google.googleapikey');
        const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=' + apikey;
        const userinfo = this.http.post(url, { "idToken": inputs.idToken }).toPromise()
            .then(res => res.data);
        return userinfo;
    }
    async mailverify(inputs) {
        const apikey = this.config.get('google.googleapikey');
        const authdomain = this.config.get('google.authdomain');
        const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/getOobConfirmationCode?key=' + apikey;
        const mailsent = this.http.post(url, { "requestType": "VERIFY_EMAIL", "idToken": inputs.idToken, "continueUrl": authdomain, "canHandleCodeInApp": false }).toPromise()
            .then(res => res.data);
        return mailsent;
    }
    async syncuser(inputs) {
        const data = {
            "grant_type": "refresh_token",
            "refresh_token": inputs.refresh_token
        };
        const confiuration = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        const apikey = this.config.get('google.googleapikey');
        const url = 'https://securetoken.googleapis.com/v1/token?key=' + apikey;
        const user = this.http.post(url, qs.stringify(data), confiuration).toPromise()
            .then(res => res.data);
        return user;
    }
};
basegoogleService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService, config_1.ConfigService])
], basegoogleService);
exports.basegoogleService = basegoogleService;
//# sourceMappingURL=basegoogleService.js.map