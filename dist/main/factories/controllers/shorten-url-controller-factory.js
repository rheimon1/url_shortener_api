"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShortenUrlController = void 0;
const shorten_url_controller_1 = require("../../../presentation/controllers/shorten-url-controller");
const url_validation_1 = require("../../../validation/validators/url-validation");
const shorten_url_factory_1 = require("../usecases/shorten-url-factory");
const makeShortenUrlController = () => {
    const controller = new shorten_url_controller_1.ShortenUrlController((0, shorten_url_factory_1.makeDbShortenUrl)(), new url_validation_1.UrlValidation());
    return controller;
};
exports.makeShortenUrlController = makeShortenUrlController;
//# sourceMappingURL=shorten-url-controller-factory.js.map