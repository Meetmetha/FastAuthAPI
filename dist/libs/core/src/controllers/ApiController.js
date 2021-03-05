"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiController = void 0;
const lodash_1 = require("lodash");
class ApiController {
    async transform(obj, transformer, options) {
        transformer = this.setTransformerContext(transformer, options);
        return await transformer
            .parseIncludes(this.getIncludes(options === null || options === void 0 ? void 0 : options.req))
            .work(obj);
    }
    async collection(collect, transformer, options) {
        transformer = this.setTransformerContext(transformer, options);
        const collection = [];
        for (const o of collect) {
            collection.push(await transformer.parseIncludes(this.getIncludes(options === null || options === void 0 ? void 0 : options.req)).work(o));
        }
        return collection;
    }
    async paginate(obj, transformer, options) {
        const collection = this.collection(obj.data, transformer, options);
        return {
            data: await collection,
            pagination: obj.pagination,
        };
    }
    setTransformerContext(transformer, options) {
        transformer.ctx.setRequest((options === null || options === void 0 ? void 0 : options.req) || {});
        return transformer;
    }
    getIncludes(req) {
        if (!req)
            return '';
        return lodash_1.get(req.all(), 'include', '');
    }
}
exports.ApiController = ApiController;
//# sourceMappingURL=ApiController.js.map