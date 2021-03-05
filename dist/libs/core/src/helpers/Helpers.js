"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = exports.invertObj = exports.throwIf = exports.runIfFunction = exports.isFunction = exports.groupBy = exports.clone = exports.except = exports.pick = exports.isNotEmpty = exports.isEmpty = exports.isArray = exports.isObject = exports.strBefore = exports.strAfter = exports.isEmail = exports.randomToken = exports.basePath = exports.stringifyQueryParams = exports.httpBuildQuery = exports.renameObjectKeys = exports.randomString = exports.randomNumber = exports.uuid = void 0;
const uuid_1 = require("uuid");
const queryString = require("query-string");
const path = require("path");
const http_1 = require("../http");
function uuid() {
    return uuid_1.v4();
}
exports.uuid = uuid;
function randomNumber(n) {
    const add = 1;
    let max = 12 - add;
    if (n > max) {
        return randomNumber(max) + randomNumber(n - max);
    }
    max = Math.pow(10, n + add);
    const min = max / 10;
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return ('' + num).substring(add);
}
exports.randomNumber = randomNumber;
function randomString(length = 0) {
    if (!length)
        return Math.random().toString(36).substr(2);
    let str = '';
    while (length > 0) {
        const tempStr = randomString().substring(0, length);
        length -= length >= tempStr.length ? tempStr.length : 0;
        str = str + tempStr;
    }
    return str;
}
exports.randomString = randomString;
function renameObjectKeys(delimiter, replace, object) {
    const objectClone = {};
    const regex = delimiter === '.' ? /\./g : new RegExp(delimiter, 'g');
    for (const key in object) {
        const newKey = key.replace(regex, replace);
        objectClone[newKey] = object[key];
    }
    return objectClone;
}
exports.renameObjectKeys = renameObjectKeys;
function httpBuildQuery(url, params = {}) {
    return url + '?' + queryString.stringify(params, { arrayFormat: 'bracket' });
}
exports.httpBuildQuery = httpBuildQuery;
function stringifyQueryParams(params = {}) {
    return queryString.stringify(params, { arrayFormat: 'bracket' });
}
exports.stringifyQueryParams = stringifyQueryParams;
function basePath() {
    return path.join(__dirname, '../../../../');
}
exports.basePath = basePath;
function randomToken() {
    return randomString() + randomString();
}
exports.randomToken = randomToken;
function isEmail(email) {
    const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    return !!emailRegex.test(email);
}
exports.isEmail = isEmail;
function strAfter(str, substr) {
    return str.split(substr)[1];
}
exports.strAfter = strAfter;
function strBefore(str, substr) {
    return str.split(substr)[0];
}
exports.strBefore = strBefore;
function isObject(value) {
    if (typeof value === 'object' && value !== null) {
        return true;
    }
    return false;
}
exports.isObject = isObject;
function isArray(value) {
    return Array.isArray(value);
}
exports.isArray = isArray;
function isEmpty(value) {
    if (Array.isArray(value) && value.length < 1)
        return true;
    if (isObject(value) && Object.keys(value).length < 1)
        return true;
    if (!value)
        return true;
    return false;
}
exports.isEmpty = isEmpty;
function isNotEmpty(value) {
    return !isEmpty(value);
}
exports.isNotEmpty = isNotEmpty;
function pick(obj, keys) {
    const _obj = {};
    for (const key of keys) {
        if (obj.hasOwnProperty(key)) {
            _obj[key] = obj[key];
        }
    }
    return _obj;
}
exports.pick = pick;
function except(obj, keys) {
    const _obj = {};
    for (const key of Object.keys(obj)) {
        if (keys.includes(key))
            continue;
        _obj[key] = obj[key];
    }
    return _obj;
}
exports.except = except;
function clone(instance) {
    const copy = new instance.constructor();
    Object.assign(copy, instance);
    return copy;
}
exports.clone = clone;
function groupBy(arr, key) {
    const obj = {};
    arr.forEach((o) => {
        obj[o[key]] = o;
    });
    return obj;
}
exports.groupBy = groupBy;
function isFunction(value) {
    return typeof value === 'function';
}
exports.isFunction = isFunction;
function runIfFunction(value, defaultVal) {
    if (isFunction(value))
        return value();
    return defaultVal || null;
}
exports.runIfFunction = runIfFunction;
function throwIf(expression, exception) {
    if (expression) {
        throw exception;
    }
}
exports.throwIf = throwIf;
function invertObj(obj) {
    const newObj = {};
    for (const prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            newObj[obj[prop]] = prop;
        }
    }
    return newObj;
}
exports.invertObj = invertObj;
function route(name, params) {
    return http_1.HttpMetadata.getRoute(name, params);
}
exports.route = route;
//# sourceMappingURL=Helpers.js.map