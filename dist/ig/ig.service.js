"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IgService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const BASE_URL = process.env?.BASE_URL;
const HEADERS = {
    authkey: process.env?.AUTH_KEY,
};
let IgService = exports.IgService = class IgService {
    async getData(q, limit, type, platform) {
        const response = await axios_1.default.get(`${BASE_URL}/dict/users`, {
            headers: HEADERS,
            params: {
                q: q || 'adam',
                limit: limit || 10,
                type: type || 'lookalike',
                platform: platform || 'instagram',
            },
        });
        return response.data;
    }
    async getFeeds(url, after) {
        const response = await axios_1.default.get(`${BASE_URL}/raw/ig/user/feed`, {
            headers: HEADERS,
            params: {
                url: url,
                after: after
            }
        });
        return response.data;
    }
    async fetchUserContacts(url, platform) {
        const response = await axios_1.default.get(`${BASE_URL}/exports/contacts`, {
            headers: HEADERS,
            params: {
                url: url,
                platform: platform || 'instagram',
            },
        });
        return response.data;
    }
};
exports.IgService = IgService = __decorate([
    (0, common_1.Injectable)()
], IgService);
//# sourceMappingURL=ig.service.js.map