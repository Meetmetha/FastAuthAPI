"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreModule = void 0;
const common_1 = require("@nestjs/common");
const validator_1 = require("./validator");
const providers_1 = require("./providers");
const core_1 = require("@nestjs/core");
let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [core_1.DiscoveryModule],
        providers: [
            ...providers_1.getProviders(),
        ],
        exports: [validator_1.BaseValidator],
    })
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=module.js.map