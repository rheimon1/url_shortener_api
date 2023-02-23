"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbShortenUrl = void 0;
const shorten_url_1 = require("../../domain/usecases/shorten-url");
const env_1 = require("../../main/config/env");
class DbShortenUrl {
    constructor(getUrlByOriginalUrlRepository, hasher, addUrlRepository) {
        this.getUrlByOriginalUrlRepository = getUrlByOriginalUrlRepository;
        this.hasher = hasher;
        this.addUrlRepository = addUrlRepository;
    }
    async shorten(originalUrl) {
        const url = await this.getUrlByOriginalUrlRepository.getByOriginalUrl(originalUrl);
        if (url) {
            if (new Date() <= url.expiresAt) {
                return (0, shorten_url_1.response)(true, url.shortUrl);
            }
            return (0, shorten_url_1.response)(false, null);
        }
        else {
            const urlId = this.hasher.generate();
            // TODO: Encurtar url corretamente
            const shortUrl = `${env_1.env.baseUrl}/${urlId}`;
            const expiresAt = new Date(Date.now() + (3600 * 1000 * parseInt(env_1.env.urlExpiresAtInHours, 10)));
            await this.addUrlRepository.add({ shortUrl, expiresAt, originalUrl, urlId });
            return (0, shorten_url_1.response)(true, shortUrl);
        }
    }
    ;
}
exports.DbShortenUrl = DbShortenUrl;
//# sourceMappingURL=db-shorten-url.js.map