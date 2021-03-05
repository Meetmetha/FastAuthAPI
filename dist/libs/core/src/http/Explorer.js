"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExplorer = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const constants_1 = require("./constants");
const Metadata_1 = require("./Metadata");
const constants_2 = require("@nestjs/common/constants");
const config_1 = require("@nestjs/config");
const path_1 = require("path");
let HttpExplorer = class HttpExplorer {
    constructor(config, discovery, metadataScanner) {
        this.config = config;
        this.discovery = discovery;
        this.metadataScanner = metadataScanner;
    }
    onModuleInit() {
        Metadata_1.HttpMetadata.setBaseUrl(this.config.get('app.url'));
        const wrappers = this.discovery.getControllers();
        wrappers.forEach((w) => {
            const { instance, metatype } = w;
            if (!instance ||
                typeof instance === 'string' ||
                !Object.getPrototypeOf(instance)) {
                return;
            }
            this.metadataScanner.scanFromPrototype(instance, Object.getPrototypeOf(instance), (key) => this.lookupListeners(instance, key, Reflect.getMetadata(constants_2.PATH_METADATA, w.metatype)));
        });
    }
    lookupListeners(instance, key, baseRoute) {
        baseRoute = baseRoute || '';
        const hasRouteName = Reflect.hasMetadata(constants_1.ROUTE_NAME, instance, key);
        if (!hasRouteName)
            return;
        const routeName = Reflect.getMetadata(constants_1.ROUTE_NAME, instance, key);
        Metadata_1.HttpMetadata.addNamedRoute(routeName, path_1.join(baseRoute, Reflect.getMetadata(constants_2.PATH_METADATA, instance[key])));
    }
};
HttpExplorer = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        core_1.DiscoveryService,
        core_1.MetadataScanner])
], HttpExplorer);
exports.HttpExplorer = HttpExplorer;
//# sourceMappingURL=Explorer.js.map