#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const app_1 = require("./app");
const core_1 = require("@nestjs/core");
const core_2 = require("../libs/core/src");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(app_1.AppModule, {
        logger: false,
    });
    const argv = yargs.argv;
    const c = argv._[0];
    argv.command = c;
    if (typeof argv.command != 'string') {
        core_2.Logger.error(' PLEASE ADD A COMMAND ');
        return process.exit();
    }
    const target = core_2.CommandMeta.getTarget(argv.command);
    if (!target) {
        core_2.Logger.error(` ${argv.command} : command not found `);
        return process.exit();
    }
    const command = app.get(target, { strict: false });
    command.setReceivedOptions(argv);
    if (argv.options) {
        const options = command.options();
        const commandOptions = [];
        for (const key in options) {
            commandOptions.push({
                name: key,
                description: options[key].desc,
                required: options[key].req ? 'Y' : '',
            });
        }
        if (commandOptions.length) {
            core_2.Logger.table(commandOptions);
        }
        else {
            core_2.Logger.info('No option found for specified command');
        }
        return process.exit();
    }
    await command.work();
    return process.exit();
}
bootstrap();
//# sourceMappingURL=cli.js.map