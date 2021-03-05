import { Request } from '../http';
export declare class Context {
    req: Request;
    setRequest(req: Request): this;
    getRequest(): Request;
}
