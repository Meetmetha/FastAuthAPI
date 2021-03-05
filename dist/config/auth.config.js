"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = config_1.registerAs('auth', () => ({
    jwt: {
        secret: process.env.JWT_SECRET || 'iloveyouyesyou',
        ttl: process.env.JWT_TTL || '60h',
    }
}));
//# sourceMappingURL=auth.config.js.map