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
exports.IgController = void 0;
const common_1 = require("@nestjs/common");
const ig_service_1 = require("./ig.service");
let IgController = exports.IgController = class IgController {
    constructor(igService) {
        this.igService = igService;
    }
    async getData(q, limit, type, platform, req) {
        const authkey = req.headers['authkey'];
        return this.igService.getData(q, limit, type, platform);
    }
    async getUserFeed(url, after, req) {
        return this.igService.getFeeds(url, after);
    }
    async getUserContacts(url, platform, req) {
        return this.igService.fetchUserContacts(url, platform);
    }
};
__decorate([
    (0, common_1.Get)('users'),
    __param(0, (0, common_1.Query)('q')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('type')),
    __param(3, (0, common_1.Query)('platform')),
    __param(4, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String, String, Object]),
    __metadata("design:returntype", Promise)
], IgController.prototype, "getData", null);
__decorate([
    (0, common_1.Get)('user/feeds'),
    __param(0, (0, common_1.Query)('url')),
    __param(1, (0, common_1.Query)('after')),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], IgController.prototype, "getUserFeed", null);
__decorate([
    (0, common_1.Get)('user/contacts'),
    __param(0, (0, common_1.Query)('url')),
    __param(1, (0, common_1.Query)('platform')),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], IgController.prototype, "getUserContacts", null);
exports.IgController = IgController = __decorate([
    (0, common_1.Controller)('ig'),
    __metadata("design:paramtypes", [ig_service_1.IgService])
], IgController);
//# sourceMappingURL=ig.controller.js.map