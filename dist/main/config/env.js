"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
exports.env = {
    mongoUrl: (_a = process.env.MONGO_URL) !== null && _a !== void 0 ? _a : 'mongodb://localhost:27017/url-shortener',
    baseUrl: (_b = process.env.BASE_URL) !== null && _b !== void 0 ? _b : 'http://localhost:3333',
    port: (_c = process.env.PORT) !== null && _c !== void 0 ? _c : '3333',
    urlExpiresAtInHours: (_d = process.env.URL_EXPIRES_AT_IN_HOURS) !== null && _d !== void 0 ? _d : '24'
};
//# sourceMappingURL=env.js.map