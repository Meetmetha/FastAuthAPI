import { Context } from '../utils/Context';
export declare abstract class Transformer {
    availableIncludes: any[];
    defaultIncludes: any[];
    protected includes: any[];
    ctx: Context;
    abstract transform(object: any): Promise<Record<string, any> | null>;
    primitive(obj?: Record<string, any>): Record<string, any>;
    item(obj: Record<string, any>, transformer: Transformer, options?: Record<string, any>): Promise<Record<string, any> | null>;
    collection(arr: Array<Record<string, any> | string>, transformer: Transformer, options?: Record<string, any>): Promise<Array<any>>;
    parseIncludes(include?: string): this;
    work(data: any): Promise<Record<string, any> | Array<Record<string, any>>>;
    handleInclude(data: Record<string, any>, include: string): Promise<Record<string, any>>;
    private computeNestedInclude;
    private fetchData;
}
