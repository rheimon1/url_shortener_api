export interface RedirectOriginalUrl {
  redirect: (id: RedirectOriginalUrl.Params) => Promise<RedirectOriginalUrl.Result>
}

export namespace RedirectOriginalUrl {
  export type Params = string;
   export type Result = {
    success: boolean,
    originalUrl: string
  };
}