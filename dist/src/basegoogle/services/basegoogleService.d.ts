import { HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
export declare class basegoogleService {
    private http;
    private config;
    constructor(http: HttpService, config: ConfigService);
    register(inputs: Record<string, any>): Promise<any>;
    login(inputs: Record<string, any>): Promise<any>;
    usergetinfo(inputs: Record<string, any>): Promise<any>;
    mailverify(inputs: Record<string, any>): Promise<any>;
    syncuser(inputs: Record<string, any>): Promise<any>;
}
