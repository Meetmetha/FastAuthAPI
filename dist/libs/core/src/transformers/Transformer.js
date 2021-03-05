"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transformer = void 0;
const lodash_1 = require("lodash");
const Context_1 = require("../utils/Context");
class Transformer {
    constructor() {
        this.availableIncludes = [];
        this.defaultIncludes = [];
        this.includes = [];
        this.ctx = new Context_1.Context();
    }
    primitive(obj) {
        return obj;
    }
    async item(obj, transformer, options) {
        options = options || {};
        if (!obj)
            return null;
        return await transformer.parseIncludes(options.include).work(obj);
    }
    async collection(arr, transformer, options) {
        if (!arr || arr.length === 0)
            return [];
        options = options || {};
        const result = [];
        for (let data of arr) {
            data = await transformer.parseIncludes(options.includes).work(data);
            result.push(data);
        }
        return result;
    }
    parseIncludes(include = '') {
        let includes = include.split(/,(?=(((?!\]).)*\[)|[^\[\]]*$)/);
        includes = lodash_1.compact(includes);
        const allIncludes = this.availableIncludes.concat(this.defaultIncludes);
        let processedIncludes = [];
        for (const include of includes) {
            const processed = lodash_1.uniq(lodash_1.compact(include.split(/[.,-_]/)));
            if (lodash_1.difference(processed, allIncludes).length === 0 &&
                processed.length != 0) {
                processedIncludes.push(include);
            }
        }
        processedIncludes = lodash_1.uniq(processedIncludes.concat(this.defaultIncludes));
        this.includes = processedIncludes;
        return this;
    }
    async work(data) {
        let result = {};
        if (data instanceof Object) {
            result = await this.transform(data);
        }
        for (const include of this.includes) {
            const map = await this.handleInclude(data, include);
            if (!map)
                continue;
            for (const key in map) {
                lodash_1.set(result, key, map[key]);
            }
        }
        return result;
    }
    async handleInclude(data, include) {
        const includeMap = {};
        const toInclude = include.split(/\.(?![^[]*\])/);
        await this.computeNestedInclude(toInclude, 0, includeMap, data, include);
        for (let i = 0; i < toInclude.length; i++) {
            if (toInclude[i].charAt(0) === '[') {
                toInclude[i] = toInclude[i].slice(1, -1);
                const sameLvl = toInclude[i].split(',');
                for (let j = 0; j < sameLvl.length; j++) {
                    if (sameLvl[j].split('.').length != 1) {
                        const nestMap = {};
                        const newArray = sameLvl[j].split('.');
                        await this.computeNestedInclude(newArray, 0, nestMap, data, include);
                        for (const key in nestMap) {
                            includeMap[toInclude.slice(0, i).join('.') + '.' + key] =
                                nestMap[key];
                        }
                        continue;
                    }
                    includeMap[toInclude.slice(0, i).join('.') + '.' + sameLvl[j]] = await this.fetchData(sameLvl[j], data, include);
                }
            }
        }
        return includeMap;
    }
    async computeNestedInclude(toInclude, i, includeMap, data, include) {
        if (i === toInclude.length)
            return;
        if (toInclude[i].charAt(0) != '[') {
            includeMap[toInclude.slice(0, i + 1).join('.')] = await this.fetchData(toInclude[i], data, include);
            return this.computeNestedInclude(toInclude, i + 1, includeMap, data, include);
        }
    }
    async fetchData(name, data, include) {
        const handler = lodash_1.camelCase('include ' + name);
        let includeFunc;
        if (this[handler]) {
            includeFunc = this[handler](data, {
                includes: include.substr(include.indexOf('.')).replace(/./g, ','),
            });
        }
        return await includeFunc;
    }
}
exports.Transformer = Transformer;
//# sourceMappingURL=Transformer.js.map