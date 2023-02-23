import { UrlModel } from '../../../domain/models/url';

export interface GetUrlByUrlIdRepository {
  getByUrlId: (urlId: GetUrlByUrlIdRepository.Param) => Promise<GetUrlByUrlIdRepository.Result>
}

export namespace GetUrlByUrlIdRepository {
  export type Param = string;
  export type Result = UrlModel;
}
