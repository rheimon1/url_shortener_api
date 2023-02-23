export interface ShortenUrl {
  shorten: (originalUrl: ShortenUrl.Params) => Promise<ShortenUrl.Result>
}

export namespace ShortenUrl {
  export type Params = string;

  export type Result = {
    success: boolean;
    data: any
  };
}

export const response = (success: boolean, data: any): ShortenUrl.Result => ({
  success,
  data
});