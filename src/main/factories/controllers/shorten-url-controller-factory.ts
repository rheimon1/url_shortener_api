import { ShortenUrlController } from '../../../presentation/controllers/shorten-url-controller';
import { Controller } from "../../../presentation/protocols/controller";
import { UrlValidation } from '../../../validation/validators/url-validation';
import { makeDbShortenUrl } from '../usecases/shorten-url-factory';

export const makeShortenUrlController = (): Controller => {
  const controller = new ShortenUrlController(makeDbShortenUrl(), new UrlValidation());
  return controller;
}