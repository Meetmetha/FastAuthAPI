import { registerAs } from '@nestjs/config';

export default registerAs('google', () => ({
    googleapikey: process.env.googleapikey || 'AIzaSyARh999xf1IB1eVDaL.......', //AIZa....
    authdomain: process.env.authdomain || 'https://fastauth-miteshmetha.firebaseapp.com'
  }));