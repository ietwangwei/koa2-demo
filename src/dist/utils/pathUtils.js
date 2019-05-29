"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
exports.default = {
    resolve(name) {
        return path.resolve(__dirname, name);
    },
    join(...names) {
        return path.join(names);
    }
};
//# sourceMappingURL=pathUtils.js.map