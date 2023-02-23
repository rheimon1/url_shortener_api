import { Router } from "express";
import { makeRedirectOriginalUrlController } from "../factories/controllers/redirect-original-url-controller-factory";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeShortenUrlController } from "../factories/controllers/shorten-url-controller-factory";

export default (router: Router): void => {
  router.post('/shortenUrl', adaptRoute(makeShortenUrlController()));
  router.get('/:urlId', adaptRoute(makeRedirectOriginalUrlController()));
}