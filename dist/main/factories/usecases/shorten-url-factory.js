"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbShortenUrl = void 0;
const db_shorten_url_1 = require("../../../data/usecases/db-shorten-url");
const nanoid_adapter_1 = require("../../../infra/cryptography/nanoid-adapter");
const url_mongo_repository_1 = require("../../../infra/db/mongodb/url-mongo-repository");
const makeDbShortenUrl = () => {
    const size = 11;
    const nanoidAdapter = new nanoid_adapter_1.NanoidAdapter(size);
    const urlMongoRepository = new url_mongo_repository_1.UrlMongoRepository();
    return new db_shorten_url_1.DbShortenUrl(urlMongoRepository, nanoidAdapter, urlMongoRepository);
};
exports.makeDbShortenUrl = makeDbShortenUrl;
//# sourceMappingURL=shorten-url-factory.js.map