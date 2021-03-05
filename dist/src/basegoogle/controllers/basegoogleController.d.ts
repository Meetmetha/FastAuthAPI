import { ApiController, Request, Response } from '@libs/core';
import { basegoogleService } from '../services';
export declare class basegoogleController extends ApiController {
    private readonly basegoogle;
    constructor(basegoogle: basegoogleService);
    intro(req: Request, res: Response): Promise<Response>;
    registeuser(req: Request, res: Response): Promise<Response>;
    loginuser(req: Request, res: Response): Promise<Response>;
    userinfo(req: Request, res: Response): Promise<Response>;
    synctoken(req: Request, res: Response): Promise<Response>;
    emailverify(req: Request, res: Response): Promise<Response>;
}
