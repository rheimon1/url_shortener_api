"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedirectOriginalUrlController = void 0;
const http_helper_1 = require("../helpers/http-helper");
class RedirectOriginalUrlController {
    constructor(redirectOriginalUrl) {
        this.redirectOriginalUrl = redirectOriginalUrl;
    }
    async handle(request) {
        try {
            const result = await this.redirectOriginalUrl.redirect(request.urlId);
            if (result.success === true) {
                return {
                    body: result.originalUrl,
                    statusCode: 403
                };
            }
            return {
                body: 'Not found',
                statusCode: 404
            };
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
    ;
}
exports.RedirectOriginalUrlController = RedirectOriginalUrlController;
//# sourceMappingURL=redirect-original-url-controller.js.map