"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
const objection_1 = require("objection");
const QueryBuilder_1 = require("./QueryBuilder");
const helpers_1 = require("../helpers");
class BaseModel extends objection_1.Model {
    static setModulePaths(modules) {
        this.modulePaths = modules;
    }
    static get modelPaths() {
        const root = helpers_1.basePath();
        return BaseModel.modulePaths.map(m => `${root}dist/src/${m}/models`);
    }
    async fetchRelation(expression, options = {}) {
        if (this[expression.toString()])
            return this;
        await this.$fetchGraph(expression, options);
        return this;
    }
}
exports.BaseModel = BaseModel;
BaseModel.QueryBuilder = QueryBuilder_1.CustomQueryBuilder;
BaseModel.useLimitInFirst = true;
BaseModel.modulePaths = [];
//# sourceMappingURL=BaseModel.js.map