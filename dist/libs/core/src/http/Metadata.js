"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpMetadata = void 0;
const queryString = require("query-string");
class HttpMetadata {
    static addNamedRoute(routeName, path) {
        HttpMetadata.store.routes[routeName] = path;
    }
    static getRoute(routeName, params) {
        let route = HttpMetadata.store.routes[routeName];
        if (!route)
            return null;
        let notPathParams = null;
        if (params && Object.keys(params).length) {
            notPathParams = {};
            for (const key in params) {
                route.includes(`:${key}`)
                    ? (route = route.replace(`:${key}`, params[key]))
                    : (notPathParams[key] = params[key]);
            }
        }
        const url = new URL(notPathParams
            ? `${route}?${queryString.stringify(notPathParams)}`
            : route, HttpMetadata.store.baseUrl);
        return url.href;
    }
    static setBaseUrl(url) {
        HttpMetadata.store.baseUrl = url;
    }
}
exports.HttpMetadata = HttpMetadata;
HttpMetadata.store = { routes: {}, baseUrl: '' };
//# sourceMappingURL=Metadata.js.map