import { DbRedirectOriginalUrl } from "../../../data/usecases/db-redirect-original-url";
import { RedirectOriginalUrl } from "../../../domain/usecases/redirect-original-url";
import { UrlMongoRepository } from '../../../infra/db/mongodb/url-mongo-repository';

export const makeDbRedirectOriginalUrl = (): RedirectOriginalUrl => {
  const urlMongoRepository = new UrlMongoRepository();
  return new DbRedirectOriginalUrl(urlMongoRepository);
}
  