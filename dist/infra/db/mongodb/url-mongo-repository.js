"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlMongoRepository = void 0;
const mongo_helper_1 = require("./mongo-helper");
class UrlMongoRepository {
    async getByUrlId(urlId) {
        const urlCollection = mongo_helper_1.MongoHelper.getInstance().getCollection('urls');
        const url = await urlCollection.findOne({ urlId }, {
            projection: {
                _id: 1,
                originalUrl: 1,
                shortUrl: 1,
                urlId: 1,
                expiresAt: 1
            }
        });
        return url && mongo_helper_1.MongoHelper.getInstance().map(url);
    }
    ;
    async getByOriginalUrl(originalUrl) {
        const urlCollection = mongo_helper_1.MongoHelper.getInstance().getCollection('urls');
        const url = await urlCollection.findOne({ originalUrl }, {
            projection: {
                _id: 1,
                originalUrl: 1,
                shortUrl: 1,
                urlId: 1,
                expiresAt: 1
            }
        });
        return url && mongo_helper_1.MongoHelper.getInstance().map(url);
    }
    ;
    async add(data) {
        const urlCollection = mongo_helper_1.MongoHelper.getInstance().getCollection('urls');
        const result = await urlCollection.insertOne(data);
        return result.insertedId !== null;
    }
    ;
}
exports.UrlMongoRepository = UrlMongoRepository;
//# sourceMappingURL=url-mongo-repository.js.map