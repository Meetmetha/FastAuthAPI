import { Request as BaseRequest } from 'express';
export interface Request extends BaseRequest {
    all(): Record<string, any>;
    user: Record<string, any>;
}
