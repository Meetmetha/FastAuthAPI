import { ValidationOptions } from 'class-validator';
export declare function IsDateInFormat(format: string, validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
