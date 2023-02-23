import { RedirectOriginalUrlController } from '../../../presentation/controllers/redirect-original-url-controller';
import { Controller } from "../../../presentation/protocols/controller";
import { makeDbRedirectOriginalUrl } from '../usecases/redirect-original-url-factory';

export const makeRedirectOriginalUrlController = (): Controller => {
  const controller = new RedirectOriginalUrlController(makeDbRedirectOriginalUrl());
  return controller;
}