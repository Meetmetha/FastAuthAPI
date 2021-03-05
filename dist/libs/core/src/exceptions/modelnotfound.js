"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class ModelNotFoundException extends common_1.NotFoundException {
    constructor(message) {
        super(message);
    }
}
exports.ModelNotFoundException = ModelNotFoundException;
//# sourceMappingURL=modelnotfound.js.map