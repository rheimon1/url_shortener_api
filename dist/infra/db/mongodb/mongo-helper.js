"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoHelper = void 0;
const mongodb_1 = require("mongodb");
const errors_1 = require("./errors");
class MongoHelper {
    constructor() { }
    static getInstance() {
        if (MongoHelper.instance === undefined)
            MongoHelper.instance = new MongoHelper();
        return MongoHelper.instance;
    }
    async connect(uri) {
        this.uri = uri;
        this.client = await mongodb_1.MongoClient.connect(uri);
    }
    async disconnect() {
        if (!this.client)
            throw new errors_1.ConnectionNotFoundError();
        await this.client.close();
        this.client = undefined;
    }
    getCollection(name) {
        if (!this.client)
            throw new errors_1.ConnectionNotFoundError();
        return this.client.db().collection(name);
    }
    map(data) {
        const { _id, ...rest } = data;
        return { ...rest, id: _id.toHexString() };
    }
    mapCollection(collection) {
        return collection.map(c => MongoHelper.getInstance().map(c));
    }
}
exports.MongoHelper = MongoHelper;
//# sourceMappingURL=mongo-helper.js.map