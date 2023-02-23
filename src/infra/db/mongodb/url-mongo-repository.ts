import { GetUrlByUrlIdRepository } from "../../../data/protocols/db/get-url-by-url-id-repository";
import { AddUrlRepository } from "../../../data/protocols/db/add-url-repository";
import { GetUrlByOriginalUrlRepository } from "../../../data/protocols/db/get-url-by-original-url-repository";
import { UrlModel } from "../../../domain/models/url";
import { MongoHelper } from './mongo-helper';

export class UrlMongoRepository implements AddUrlRepository, GetUrlByOriginalUrlRepository, GetUrlByUrlIdRepository {
  async getByUrlId (urlId: string): Promise<UrlModel> {
    const urlCollection = MongoHelper.getInstance().getCollection('urls');
    const url = await urlCollection.findOne({ urlId }, {
      projection: {
        _id: 1,
        originalUrl: 1,
        shortUrl: 1,
        urlId: 1,
        expiresAt: 1
      }
    });
    return url && MongoHelper.getInstance().map(url);
  };

  async getByOriginalUrl (originalUrl: string): Promise<GetUrlByOriginalUrlRepository.Result> {
    const urlCollection = MongoHelper.getInstance().getCollection('urls');
    const url = await urlCollection.findOne({ originalUrl }, {
      projection: {
        _id: 1,
        originalUrl: 1,
        shortUrl: 1,
        urlId: 1,
        expiresAt: 1
      }
    });
    return url && MongoHelper.getInstance().map(url);
  };

  async add (data: AddUrlRepository.Params): Promise<AddUrlRepository.Result> {
    const urlCollection = MongoHelper.getInstance().getCollection('urls')
    const result = await urlCollection.insertOne(data)
    return result.insertedId !== null
  };
}