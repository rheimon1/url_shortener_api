"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.badRequest = exports.serverError = exports.ok = void 0;
const server_error_1 = require("../errors/server-error");
const ok = (data) => ({
    statusCode: 200,
    body: data
});
exports.ok = ok;
const serverError = (error) => ({
    statusCode: 500,
    body: new server_error_1.ServerError(error.stack || '')
});
exports.serverError = serverError;
const badRequest = (error) => ({
    statusCode: 400,
    body: error
});
exports.badRequest = badRequest;
//# sourceMappingURL=http-helper.js.map