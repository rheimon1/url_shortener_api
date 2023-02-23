import { MongoHelper } from '../../../../../../infra/db/mongodb/mongo-helper';

export const makeMongoDbConnection = (): MongoHelper => {
  return MongoHelper.getInstance()
}
