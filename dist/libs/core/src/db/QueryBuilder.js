"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomQueryBuilder = void 0;
const objection_1 = require("objection");
const Helpers_1 = require("../helpers/Helpers");
const lodash_1 = require("lodash");
class CustomQueryBuilder extends objection_1.QueryBuilder {
    async paginate(page, perPage) {
        page = +page ? +page : 1;
        perPage = +perPage ? +perPage : 15;
        const result = await this.page(page - 1, perPage);
        return {
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(result.total / perPage),
                perPage,
                total: result.total,
            },
            data: result.results,
        };
    }
    async onlyCount() {
        const result = await this.count({ c: '*' });
        return result[0].c;
    }
    async exists() {
        const result = await this.onlyCount();
        return !!result;
    }
    async chunk(cb, size) {
        let offset = 0;
        let hasMore = true;
        while (!!!offset || hasMore) {
            const query = lodash_1.cloneDeep(this);
            const records = await query.offset(offset).limit(size);
            hasMore = Helpers_1.isNotEmpty(records);
            if (!hasMore)
                return;
            await cb(records);
            offset += size;
        }
    }
}
exports.CustomQueryBuilder = CustomQueryBuilder;
//# sourceMappingURL=QueryBuilder.js.map