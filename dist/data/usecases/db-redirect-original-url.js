"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbRedirectOriginalUrl = void 0;
class DbRedirectOriginalUrl {
    constructor(getUrlByUrlIdRepository) {
        this.getUrlByUrlIdRepository = getUrlByUrlIdRepository;
    }
    async redirect(id) {
        const url = await this.getUrlByUrlIdRepository.getByUrlId(id);
        let originalUrl = null;
        let success = false;
        if (url) {
            originalUrl = url.originalUrl;
            success = true;
        }
        return {
            originalUrl,
            success
        };
    }
    ;
}
exports.DbRedirectOriginalUrl = DbRedirectOriginalUrl;
//# sourceMappingURL=db-redirect-original-url.js.map