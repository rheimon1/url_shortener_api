"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeMongoDbConnection = void 0;
const mongo_helper_1 = require("../../../../../../infra/db/mongodb/mongo-helper");
const makeMongoDbConnection = () => {
    return mongo_helper_1.MongoHelper.getInstance();
};
exports.makeMongoDbConnection = makeMongoDbConnection;
//# sourceMappingURL=connection.js.map