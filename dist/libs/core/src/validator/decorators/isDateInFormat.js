"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDateInFormat = void 0;
const class_validator_1 = require("class-validator");
const moment = require("moment");
let IsDateInFormatConstraint = class IsDateInFormatConstraint {
    async validate(value, args) {
        const [format] = args.constraints;
        return moment(value, format, true).isValid();
    }
    defaultMessage(args) {
        const property = args.property;
        const [format] = args.constraints;
        return `${property} should be in ${format} format.`;
    }
};
IsDateInFormatConstraint = __decorate([
    class_validator_1.ValidatorConstraint({ async: true })
], IsDateInFormatConstraint);
function IsDateInFormat(format, validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [format],
            validator: IsDateInFormatConstraint,
        });
    };
}
exports.IsDateInFormat = IsDateInFormat;
//# sourceMappingURL=isDateInFormat.js.map