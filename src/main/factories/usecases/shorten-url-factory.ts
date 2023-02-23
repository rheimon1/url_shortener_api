import { DbShortenUrl } from "../../../data/usecases/db-shorten-url";
import { ShortenUrl } from "../../../domain/usecases/shorten-url";
import { NanoidAdapter } from "../../../infra/cryptography/nanoid-adapter";
import { UrlMongoRepository } from '../../../infra/db/mongodb/url-mongo-repository';

export const makeDbShortenUrl = (): ShortenUrl => {
  const size = 11;
  const nanoidAdapter = new NanoidAdapter(size);
  const urlMongoRepository = new UrlMongoRepository();
  return new DbShortenUrl(urlMongoRepository, nanoidAdapter, urlMongoRepository, urlMongoRepository);
}
  