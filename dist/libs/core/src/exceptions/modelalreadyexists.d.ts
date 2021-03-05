import { HttpException } from '@nestjs/common';
export declare class ModelAlreadyExists extends HttpException {
    constructor(model: string);
}
