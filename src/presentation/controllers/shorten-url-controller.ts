import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http";
import { badRequest, ok, serverError } from "../helpers/http-helper";
import { ShortenUrl } from "../../domain/usecases/shorten-url";
import { MissingParamError } from "../errors/missing-param-error";
import { UrlValidator } from "../../validation/protocols/url-validator";
import { InvalidParamError } from "../errors/invalid-param-error";

export class ShortenUrlController implements Controller {
  constructor (
    private readonly shortenUrl: ShortenUrl,
    private readonly urlValidator: UrlValidator
  ) {}

  async handle (request: ShortenUrlController.Request): Promise<HttpResponse> {
    try {
      const { originalUrl } = request;
      if (!originalUrl) {
        return badRequest(new MissingParamError('originalUrl'));
      }
      if (!this.urlValidator.validate(originalUrl)) {
        return badRequest(new InvalidParamError('originalUrl'));
      }
      const shortUrl = await this.shortenUrl.shorten(request.originalUrl);
      return ok(shortUrl);
    } catch (error) {
      return serverError(error);
    }
  };
}

export namespace ShortenUrlController {
  export type Request = {
    originalUrl: string;
  }
}