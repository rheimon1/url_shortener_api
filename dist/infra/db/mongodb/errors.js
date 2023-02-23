"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionNotFoundError = void 0;
class ConnectionNotFoundError extends Error {
    constructor() {
        super('No connection was found');
        this.name = 'ConnectionNotFoundError';
    }
}
exports.ConnectionNotFoundError = ConnectionNotFoundError;
//# sourceMappingURL=errors.js.map