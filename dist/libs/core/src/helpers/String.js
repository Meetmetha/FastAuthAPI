"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Helpers_1 = require("./Helpers");
if (!String.prototype.before) {
    const func = function (needle) {
        if (Helpers_1.isEmpty(this))
            return null;
        return this.split(needle)[0];
    };
    Object.defineProperty(String.prototype, 'before', {
        value: func,
        enumerable: false,
    });
}
if (!String.prototype.after) {
    const func = function (needle) {
        if (Helpers_1.isEmpty(this))
            return null;
        return this.split(needle)[1];
    };
    Object.defineProperty(String.prototype, 'after', {
        value: func,
        enumerable: false,
    });
}
if (!String.prototype.truncate) {
    const func = function (len) {
        return this.length > len ? this.substr(0, len - 1) + '...' : this;
    };
    Object.defineProperty(String.prototype, 'truncate', {
        value: func,
        enumerable: false,
    });
}
//# sourceMappingURL=String.js.map