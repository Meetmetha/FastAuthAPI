"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCommand = void 0;
const Inquirer_1 = require("./Inquirer");
const Logger_1 = require("./Logger");
class BaseCommand {
    constructor() {
        this.receivedOptions = {};
    }
    async work() {
        if (!this.validate()) {
            return;
        }
        await this.handle();
        return;
    }
    validate() {
        const requiredOptions = this.getRequiredOptions();
        const noInputFound = [];
        for (const option of requiredOptions) {
            if (!this.value(option))
                noInputFound.push(option);
        }
        if (noInputFound.length) {
            this.error(` Missing arguments: ${noInputFound.join(', ')} `);
            return false;
        }
        return true;
    }
    getRequiredOptions() {
        const options = this.options();
        const req = [];
        for (const key in options) {
            if (options[key].req)
                req.push(key);
        }
        return req;
    }
    setReceivedOptions(options) {
        this.receivedOptions = options || {};
        return this;
    }
    value(option) {
        const definedOptions = this.options();
        if (!definedOptions[option]) {
            return undefined;
        }
        return this.receivedOptions[option];
    }
    info(msg, color) {
        Logger_1.Logger.info(msg, color);
    }
    error(msg) {
        Logger_1.Logger.error(msg);
    }
    success(msg) {
        Logger_1.Logger.success(msg);
    }
    line() {
        Logger_1.Logger.line();
    }
    table(rows) {
        Logger_1.Logger.table(rows);
    }
    async ask(question) {
        return await Inquirer_1.Inquirer.ask(question);
    }
    async select(question, choices, multiple = false) {
        return await Inquirer_1.Inquirer.select(question, choices, multiple);
    }
    async confirm(question) {
        return Inquirer_1.Inquirer.confirm(question);
    }
    async password(question, mask = '') {
        return Inquirer_1.Inquirer.password(question, mask);
    }
}
exports.BaseCommand = BaseCommand;
//# sourceMappingURL=BaseCommand.js.map