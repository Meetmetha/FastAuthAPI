"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
require("reflect-metadata");
const CommandMeta_1 = require("./CommandMeta");
const constants_1 = require("./constants");
function Command(command, options) {
    options = options || {};
    return function (target) {
        Reflect.defineMetadata(constants_1.COMMAND_NAME, command, target);
        Reflect.defineMetadata(constants_1.COMMAND_OPTIONS, options, target);
        CommandMeta_1.CommandMeta.setCommand(command, target, options);
    };
}
exports.Command = Command;
//# sourceMappingURL=Decorators.js.map