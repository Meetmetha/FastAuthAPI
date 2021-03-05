export declare class BaseValidator {
    fire(inputs: any, schemaMeta: any): Promise<Record<string, any>>;
    parseError(error: any): {};
}
