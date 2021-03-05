import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
const qs = require('querystring')


@Injectable()
export class basegoogleService {
    constructor(private http: HttpService,private config:ConfigService){}

    async register(inputs: Record<string, any>): Promise<any> {
        const apikey=this.config.get('google.googleapikey')
        const url='https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key='+apikey
        const signedup = this.http.post(url,{"email":inputs.email,"password":inputs.password,"returnSecureToken":true}).toPromise()
        .then(res => res.data)
        return signedup;
    }

    async login(inputs: Record<string, any>): Promise<any> {
        const apikey=this.config.get('google.googleapikey')
        const url='https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key='+apikey
        const loggedin = this.http.post(url,{"email":inputs.email,"password":inputs.password,"returnSecureToken":true}).toPromise()
        .then(res => res.data)
        return loggedin;
    }

    async usergetinfo(inputs: Record<string, any>): Promise<any> {
        const apikey=this.config.get('google.googleapikey')
        const url='https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key='+apikey
        const userinfo = this.http.post(url,{"idToken":inputs.idToken}).toPromise()
        .then(res => res.data)
        return userinfo;
    }

    async mailverify(inputs: Record<string, any>): Promise<any> {
        const apikey=this.config.get('google.googleapikey')
        const authdomain=this.config.get('google.authdomain')
        const url='https://www.googleapis.com/identitytoolkit/v3/relyingparty/getOobConfirmationCode?key='+apikey
        const mailsent = this.http.post(url,{"requestType":"VERIFY_EMAIL","idToken":inputs.idToken,"continueUrl":authdomain,"canHandleCodeInApp":false}).toPromise()
        .then(res => res.data)
        return mailsent;
    }

    async syncuser(inputs: Record<string, any>): Promise<any> {
        const data = {
            "grant_type":"refresh_token",
            "refresh_token":inputs.refresh_token
        }
        const confiuration = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        const apikey=this.config.get('google.googleapikey')
        const url='https://securetoken.googleapis.com/v1/token?key='+apikey
        const user = this.http.post(url,qs.stringify(data),confiuration).toPromise()
        .then(res => res.data)
        return user;
    }
}
