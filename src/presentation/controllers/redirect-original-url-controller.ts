import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http";
import { serverError } from "../helpers/http-helper";
import { RedirectOriginalUrl } from "../../domain/usecases/redirect-original-url";

export class RedirectOriginalUrlController implements Controller {
  constructor (private readonly redirectOriginalUrl: RedirectOriginalUrl) {}

  async handle (request: RedirectOriginalUrlController.Request): Promise<HttpResponse> {
    try {
      const result = await this.redirectOriginalUrl.redirect(request.urlId);
      if (result.success === true) {
        return {
          body: result.originalUrl,
          statusCode: 403
        }
      }
      return {
        body: 'Not found',
        statusCode: 404
      }
    } catch (error) {
      return serverError(error);
    }
  };
}

export namespace RedirectOriginalUrlController {
  export type Request = {
    urlId: string;
  }
}