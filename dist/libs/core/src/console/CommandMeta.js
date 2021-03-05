"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandMeta = void 0;
class CommandMeta {
    static setCommand(command, target, options) {
        CommandMeta.commands[command] = { target, options };
        return;
    }
    static getAllCommands() {
        return CommandMeta.commands;
    }
    static getTarget(command) {
        const obj = CommandMeta.commands[command];
        return obj ? obj.target : null;
    }
}
exports.CommandMeta = CommandMeta;
CommandMeta.commands = {};
//# sourceMappingURL=CommandMeta.js.map