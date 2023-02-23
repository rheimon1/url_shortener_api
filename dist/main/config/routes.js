"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const url_routes_1 = __importDefault(require("../routes/url-routes"));
exports.default = (app) => {
    const router = (0, express_1.Router)();
    app.use('/', router);
    (0, url_routes_1.default)(router);
};
//# sourceMappingURL=routes.js.map