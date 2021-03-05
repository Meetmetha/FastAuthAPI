import { NotFoundException } from '@nestjs/common';
export declare class ModelNotFoundException extends NotFoundException {
    constructor(message: string);
}
