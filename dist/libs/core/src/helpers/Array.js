"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Helpers_1 = require("./Helpers");
if (!Array.prototype.remove) {
    const func = function (elem) {
        return this.filter(e => e !== elem);
    };
    Object.defineProperty(Array.prototype, 'remove', {
        value: func,
        enumerable: false,
    });
}
if (!Array.prototype.fillWith) {
    const func = function (value) {
        const length = this.length;
        for (let i = 0; i < length; i++) {
            this[i] = Helpers_1.runIfFunction(value, value);
        }
        return this;
    };
    Object.defineProperty(Array.prototype, 'fillWith', {
        value: func,
        enumerable: false,
    });
}
if (!Array.prototype.init) {
    const func = function (length) {
        for (let i = 0; i < +length; i++)
            this.push(undefined);
        return this;
    };
    Object.defineProperty(Array.prototype, 'init', {
        value: func,
        enumerable: false,
    });
}
if (!Array.prototype.first) {
    const func = function () {
        return this[0];
    };
    Object.defineProperty(Array.prototype, 'first', {
        value: func,
        enumerable: false,
    });
}
if (!Array.prototype.last) {
    const func = function () {
        return this[this.length - 1];
    };
    Object.defineProperty(Array.prototype, 'last', {
        value: func,
        enumerable: false,
    });
}
if (!Array.prototype.pluck) {
    const func = function (key) {
        const values = [];
        if (Helpers_1.isObject(this[0])) {
            this.forEach(element => {
                values.push(element[key]);
            });
        }
        return values;
    };
    Object.defineProperty(Array.prototype, 'pluck', {
        value: func,
        enumerable: false,
    });
}
if (!Array.prototype.isNotEmpty) {
    const func = function () {
        return this.length > 0;
    };
    Object.defineProperty(Array.prototype, 'isNotEmpty', {
        value: func,
        enumerable: false,
    });
}
if (!Array.prototype.isEmpty) {
    const func = function () {
        return this.length == 0;
    };
    Object.defineProperty(Array.prototype, 'isEmpty', {
        value: func,
        enumerable: false,
    });
}
if (!Array.prototype.toObject) {
    const func = function (key) {
        const obj = {};
        if (Helpers_1.isObject(this[0])) {
            for (const k of this) {
                obj[k[key]] = k;
            }
            return obj;
        }
        this.array.forEach((element, i) => {
            obj[i] = element;
        });
        return obj;
    };
    Object.defineProperty(Array.prototype, 'toObject', {
        value: func,
        enumerable: false,
    });
}
//# sourceMappingURL=Array.js.map