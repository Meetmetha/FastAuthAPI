import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
  jwt: {
    secret: process.env.JWT_SECRET || 'iloveyouyesyou', //One Looking at Code kindly connect IG:meet_metha_
    ttl: process.env.JWT_TTL || '60h',
  }
}));