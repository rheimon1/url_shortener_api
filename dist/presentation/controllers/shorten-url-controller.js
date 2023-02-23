"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortenUrlController = void 0;
const http_helper_1 = require("../helpers/http-helper");
const missing_param_error_1 = require("../errors/missing-param-error");
const invalid_param_error_1 = require("../errors/invalid-param-error");
class ShortenUrlController {
    constructor(shortenUrl, urlValidator) {
        this.shortenUrl = shortenUrl;
        this.urlValidator = urlValidator;
    }
    async handle(request) {
        try {
            const { originalUrl } = request;
            if (!originalUrl) {
                return (0, http_helper_1.badRequest)(new missing_param_error_1.MissingParamError('originalUrl'));
            }
            if (!this.urlValidator.validate(originalUrl)) {
                return (0, http_helper_1.badRequest)(new invalid_param_error_1.InvalidParamError('originalUrl'));
            }
            const shortUrl = await this.shortenUrl.shorten(request.originalUrl);
            return (0, http_helper_1.ok)(shortUrl);
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
    ;
}
exports.ShortenUrlController = ShortenUrlController;
//# sourceMappingURL=shorten-url-controller.js.map