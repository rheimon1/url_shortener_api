import { UrlModel } from "../../../domain/models/url";

export interface AddUrlRepository {
  add: (data: AddUrlRepository.Params) => Promise<AddUrlRepository.Result>;
}

export namespace AddUrlRepository {
  export type Params = {
    originalUrl: string;
    shortUrl: string;
    urlId: string;
    expiresAt: Date;
  }

  export type Result = boolean;
}