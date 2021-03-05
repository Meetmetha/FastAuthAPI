"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitApplicationSetup = void 0;
const BaseCommand_1 = require("../BaseCommand");
const Decorators_1 = require("../Decorators");
const common_1 = require("@nestjs/common");
const helpers_1 = require("../../helpers");
const { exec } = require('child_process');
const rimraf = require('rimraf');
const rootPath = helpers_1.basePath();
const commands = [
    {
        title: 'Removing github templates',
        cmd: `rm -rf .github`,
    },
    {
        title: 'Removing other files',
        cmd: `cd ${rootPath} && rm CODE_OF_CONDUCT.md CONTRIBUTING.md cover.jpg LICENSE.md README.md`,
    },
    {
        title: 'Cleaning git commits for you',
        cmd: `cd ${rootPath} && rm -rf .git`,
    },
    {
        title: 'Copying .env.example to .env',
        cmd: `cd ${rootPath} && cp .env.example .env`,
    },
    {
        title: 'Initializing Git Repo',
        cmd: `cd ${rootPath} && git init`,
    },
];
let InitApplicationSetup = class InitApplicationSetup extends BaseCommand_1.BaseCommand {
    async handle() {
        this.info('🚀 Starting Setup... \n');
        for (const command of commands) {
            this.info(`✅ ${command.title}`, 'white');
            exec(command.cmd);
        }
        this.info('\n🥳 Setup Finish!\n');
        this.success('⚡ You are all set now! Do amazing things!');
    }
    options() {
        return {};
    }
};
InitApplicationSetup = __decorate([
    common_1.Injectable(),
    Decorators_1.Command('init', {
        desc: 'Command to setup the project. Compatible for linux and mac only!',
    })
], InitApplicationSetup);
exports.InitApplicationSetup = InitApplicationSetup;
//# sourceMappingURL=InitApplicationSetup.js.map