import { RedirectOriginalUrl } from "../../domain/usecases/redirect-original-url";
import { GetUrlByUrlIdRepository } from "../protocols/db/get-url-by-url-id-repository";

export class DbRedirectOriginalUrl implements RedirectOriginalUrl {
  constructor(
    private readonly getUrlByUrlIdRepository: GetUrlByUrlIdRepository,
  ) {}

  async redirect (id: RedirectOriginalUrl.Params): Promise<RedirectOriginalUrl.Result> {
    const url = await this.getUrlByUrlIdRepository.getByUrlId(id);
    let originalUrl = null;
    let success = false;
    if (url && new Date() <= url.expiresAt) {
      originalUrl = url.originalUrl;
      success = true;
    }
    return {
      originalUrl,
      success
    };
  };
}