"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = config_1.registerAs('app', () => ({
    name: process.env.APP_NAME || 'NestJS App',
    env: process.env.APP_ENV || 'local',
    debug: +process.env.APP_DEBUG || 1,
    url: process.env.APP_URL || 'localhost',
    port: +process.env.APP_PORT || 80,
}));
//# sourceMappingURL=app.js.map