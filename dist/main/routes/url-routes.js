"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redirect_original_url_controller_factory_1 = require("../factories/controllers/redirect-original-url-controller-factory");
const express_route_adapter_1 = require("../adapters/express-route-adapter");
const shorten_url_controller_factory_1 = require("../factories/controllers/shorten-url-controller-factory");
exports.default = (router) => {
    router.post('/shorten-url', (0, express_route_adapter_1.adaptRoute)((0, shorten_url_controller_factory_1.makeShortenUrlController)()));
    router.get('/:urlId', (0, express_route_adapter_1.adaptRoute)((0, redirect_original_url_controller_factory_1.makeRedirectOriginalUrlController)()));
};
//# sourceMappingURL=url-routes.js.map