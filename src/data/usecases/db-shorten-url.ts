import { ShortenUrl, response } from "../../domain/usecases/shorten-url";
import { Hasher } from "../protocols/criptography/hasher";
import { GetUrlByOriginalUrlRepository } from "../protocols/db/get-url-by-original-url-repository";
import { env } from '../../main/config/env';
import { AddUrlRepository } from "../protocols/db/add-url-repository";
import { RemoveUrlByIdRepository } from "data/protocols/db/remove-url-by-id-repository";

export class DbShortenUrl implements ShortenUrl {
  constructor(
    private readonly getUrlByOriginalUrlRepository: GetUrlByOriginalUrlRepository,
    private readonly hasher: Hasher,
    private readonly addUrlRepository: AddUrlRepository,
    private readonly removeUrlByIdRepository: RemoveUrlByIdRepository
  ) {}

  async shorten (originalUrl: ShortenUrl.Params): Promise<ShortenUrl.Result> {
    const url = await this.getUrlByOriginalUrlRepository.getByOriginalUrl(originalUrl);
    if (url) {
      if (new Date() <= url.expiresAt) {
        return response(true, url.shortUrl);
      }
      await this.removeUrlByIdRepository.removeById(url.id);
    }
    const urlId = this.hasher.generate();
    const shortUrl = `${env.baseUrl}/${urlId}`
    const expiresAt = new Date(Date.now() + (3600 * 1000 * parseInt(env.urlExpiresAtInHours, 10)));
    await this.addUrlRepository.add({ shortUrl, expiresAt, originalUrl, urlId });
    return response(true, shortUrl);
  };
}