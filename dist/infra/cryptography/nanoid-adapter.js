"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NanoidAdapter = void 0;
const nanoid_1 = require("nanoid");
class NanoidAdapter {
    constructor(size) {
        this.size = size;
    }
    generate() {
        return (0, nanoid_1.nanoid)(this.size);
    }
}
exports.NanoidAdapter = NanoidAdapter;
//# sourceMappingURL=nanoid-adapter.js.map