"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_1 = require("./app");
const class_validator_1 = require("class-validator");
const bodyParser = require("body-parser");
const helmet = require("helmet");
var favicon = require('serve-favicon');
const rateLimit = require("express-rate-limit");
const core_2 = require("../libs/core/src");
const config_1 = require("@nestjs/config");
const path = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_1.AppModule);
    class_validator_1.useContainer(app.select(app_1.AppModule), { fallbackOnErrors: true });
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    app.use(helmet());
    app.use(rateLimit({ windowMs: 60, max: 50 }));
    app.useGlobalGuards(new core_2.RequestGuard());
    const { httpAdapter } = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new core_2.ExceptionFilter(httpAdapter));
    app.useGlobalInterceptors(new core_2.TimeoutInterceptor());
    app.enableCors();
    app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    const config = app.get(config_1.ConfigService);
    await app.listen(8000, '0.0.0.0');
}
bootstrap();
//# sourceMappingURL=main.js.map