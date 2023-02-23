import { UrlModel } from '../../../domain/models/url';

export interface GetUrlByOriginalUrlRepository {
  getByOriginalUrl: (originalUrl: GetUrlByOriginalUrlRepository.Param) => Promise<GetUrlByOriginalUrlRepository.Result>
}

export namespace GetUrlByOriginalUrlRepository {
  export type Param = string;
  export type Result = UrlModel;
}
