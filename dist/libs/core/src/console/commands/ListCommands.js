"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCommands = void 0;
const BaseCommand_1 = require("../BaseCommand");
const Decorators_1 = require("../Decorators");
const CommandMeta_1 = require("../CommandMeta");
const common_1 = require("@nestjs/common");
const chalk = require("chalk");
let ListCommands = class ListCommands extends BaseCommand_1.BaseCommand {
    async handle() {
        const commands = CommandMeta_1.CommandMeta.getAllCommands();
        const list = [];
        for (const key in commands) {
            const options = commands[key].options;
            list.push({
                command: chalk.greenBright.bold(key),
                description: options.desc,
            });
        }
        this.table(list);
    }
    options() {
        return {};
    }
};
ListCommands = __decorate([
    common_1.Injectable(),
    Decorators_1.Command('list', { desc: 'Command to list all the commands' })
], ListCommands);
exports.ListCommands = ListCommands;
//# sourceMappingURL=ListCommands.js.map