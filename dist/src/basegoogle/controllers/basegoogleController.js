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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.basegoogleController = void 0;
const core_1 = require("../../../libs/core/src");
const common_1 = require("@nestjs/common");
const services_1 = require("../services");
let basegoogleController = class basegoogleController extends core_1.ApiController {
    constructor(basegoogle) {
        super();
        this.basegoogle = basegoogle;
    }
    async intro(req, res) {
        return res.success("Hey! please visit https://github.com/Meetmetha/fastauth for details");
    }
    async registeuser(req, res) {
        try {
            const registration = await this.basegoogle.register(req.all());
            return res.success(registration);
        }
        catch (_a) {
            throw new common_1.HttpException('Invalid Format', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async loginuser(req, res) {
        try {
            const loggeduser = await this.basegoogle.login(req.all());
            return res.success(loggeduser);
        }
        catch (_a) {
            throw new common_1.HttpException('User Exists', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async userinfo(req, res) {
        try {
            const userinfo = await this.basegoogle.usergetinfo(req.all());
            return res.success(userinfo);
        }
        catch (_a) {
            throw new common_1.HttpException('Bad Request', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async synctoken(req, res) {
        try {
            const usersync = await this.basegoogle.syncuser(req.all());
            return res.success(usersync);
        }
        catch (_a) {
            throw new common_1.HttpException('Unauthorized', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async emailverify(req, res) {
        try {
            const mailveri = await this.basegoogle.mailverify(req.all());
            return res.success(mailveri);
        }
        catch (_a) {
            throw new common_1.HttpException('Bad Request', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
__decorate([
    common_1.Get(''),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], basegoogleController.prototype, "intro", null);
__decorate([
    common_1.Post('register'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], basegoogleController.prototype, "registeuser", null);
__decorate([
    common_1.Post('login'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], basegoogleController.prototype, "loginuser", null);
__decorate([
    common_1.Post('userinfo'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], basegoogleController.prototype, "userinfo", null);
__decorate([
    common_1.Post('sync'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], basegoogleController.prototype, "synctoken", null);
__decorate([
    common_1.Post('emailverify'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], basegoogleController.prototype, "emailverify", null);
basegoogleController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [services_1.basegoogleService])
], basegoogleController);
exports.basegoogleController = basegoogleController;
//# sourceMappingURL=basegoogleController.js.map