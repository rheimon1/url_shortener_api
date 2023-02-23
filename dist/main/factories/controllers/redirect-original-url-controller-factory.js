"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRedirectOriginalUrlController = void 0;
const redirect_original_url_controller_1 = require("../../../presentation/controllers/redirect-original-url-controller");
const redirect_original_url_factory_1 = require("../usecases/redirect-original-url-factory");
const makeRedirectOriginalUrlController = () => {
    const controller = new redirect_original_url_controller_1.RedirectOriginalUrlController((0, redirect_original_url_factory_1.makeDbRedirectOriginalUrl)());
    return controller;
};
exports.makeRedirectOriginalUrlController = makeRedirectOriginalUrlController;
//# sourceMappingURL=redirect-original-url-controller-factory.js.map