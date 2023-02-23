"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbRedirectOriginalUrl = void 0;
const db_redirect_original_url_1 = require("../../../data/usecases/db-redirect-original-url");
const url_mongo_repository_1 = require("../../../infra/db/mongodb/url-mongo-repository");
const makeDbRedirectOriginalUrl = () => {
    const urlMongoRepository = new url_mongo_repository_1.UrlMongoRepository();
    return new db_redirect_original_url_1.DbRedirectOriginalUrl(urlMongoRepository);
};
exports.makeDbRedirectOriginalUrl = makeDbRedirectOriginalUrl;
//# sourceMappingURL=redirect-original-url-factory.js.map