import { Express, Router } from "express"
import urlRoute from '../routes/url-routes';

export default (app: Express): void => {
  const router = Router();
  app.use('/', router);
  urlRoute(router);
}