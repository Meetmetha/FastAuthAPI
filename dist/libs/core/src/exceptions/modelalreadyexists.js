"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelAlreadyExists = void 0;
const common_1 = require("@nestjs/common");
class ModelAlreadyExists extends common_1.HttpException {
    constructor(model) {
        super(model + ' already exists', 403);
    }
}
exports.ModelAlreadyExists = ModelAlreadyExists;
//# sourceMappingURL=modelalreadyexists.js.map