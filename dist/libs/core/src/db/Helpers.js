"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectRepository = exports.InjectModel = void 0;
const core_1 = require("../exceptions/core");
const BaseModel_1 = require("./BaseModel");
const Database_1 = require("./repositories/Database");
function InjectModel(model) {
    if (!(model.prototype instanceof BaseModel_1.BaseModel)) {
        throw new core_1.DbRepositoryException(`Instance of ${BaseModel_1.BaseModel.name} expected, ${typeof model} passed!`);
    }
    return function (target, key) {
        Object.assign(target, {
            [key]: model,
        });
    };
}
exports.InjectModel = InjectModel;
function InjectRepository(model) {
    const repo = new Database_1.DatabaseRepository();
    return function (target, key) {
        Object.assign(target, { [key]: repo.setModel(model) });
    };
}
exports.InjectRepository = InjectRepository;
//# sourceMappingURL=Helpers.js.map