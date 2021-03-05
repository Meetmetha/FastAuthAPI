"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inquirer = void 0;
const inquirer = require("inquirer");
class Inquirer {
    static async ask(question) {
        const answers = await inquirer.prompt([
            { name: 'question', message: question },
        ]);
        return answers.question;
    }
    static async confirm(message) {
        const answer = await inquirer.prompt([
            { name: 'confirm_once', message, type: 'confirm' },
        ]);
        return answer.confirm_once;
    }
    static async select(message, choices, multiple = false) {
        const type = multiple ? 'checkbox' : 'list';
        const name = 'command';
        const answers = await inquirer.prompt([{ type, name, message, choices }]);
        return answers.command;
    }
    static async password(message, mask = '') {
        const type = 'password', name = 'command';
        const answers = await inquirer.prompt([{ type, name, message, mask }]);
        return answers[name];
    }
}
exports.Inquirer = Inquirer;
//# sourceMappingURL=Inquirer.js.map