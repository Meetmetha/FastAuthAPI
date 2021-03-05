"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestGuard = void 0;
const common_1 = require("@nestjs/common");
const lodash_1 = require("lodash");
let RequestGuard = class RequestGuard {
    canActivate(context) {
        this.bindRequestHelpers(context.switchToHttp().getRequest());
        this.bindResponseHelpers(context.switchToHttp().getResponse());
        return true;
    }
    bindResponseHelpers(response) {
        const success = function (data, status = 200) {
            return response.status(status).json({
                success: true,
                code: status,
                data: data,
            });
        };
        const error = function (error, status = 401) {
            let message = 'Something went wrong!';
            let errors = null;
            if (error instanceof Object) {
                message = error.message;
                errors = error.errors;
            }
            else {
                message = error;
            }
            return response.status(status).json({
                success: false,
                code: status,
                message: message,
                errors: errors,
            });
        };
        const noContent = function () {
            return response.status(204).end();
        };
        const withMeta = function (data, status = 200) {
            return response.status(status).json({
                success: true,
                code: status,
                data: lodash_1.get(data, 'data'),
                meta: lodash_1.omit(data, ['data']),
            });
        };
        response.success = success;
        response.error = error;
        response.noContent = noContent;
        response.withMeta = withMeta;
        return response;
    }
    bindRequestHelpers(request) {
        const all = function () {
            const inputs = Object.assign(Object.assign(Object.assign({}, request.query), request.body), request.params);
            for (const key in inputs) {
                const value = inputs[key];
                if (typeof value === 'string' || value instanceof String) {
                    inputs[key] = value.trim();
                }
            }
            return inputs;
        };
        request.all = all;
        return request;
    }
};
RequestGuard = __decorate([
    common_1.Injectable()
], RequestGuard);
exports.RequestGuard = RequestGuard;
//# sourceMappingURL=request.js.map