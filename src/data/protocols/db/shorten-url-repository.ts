export interface ShortenUrlRepository {
  add: (data: ShortenUrlRepository.Params) => Promise<ShortenUrlRepository.Result>
}

export namespace ShortenUrlRepository {
  export type Params = {
    originalUrl: string;
    shortUrl: string;
    expiresAt: Date;
  };

  export type Result = boolean;
}