export interface RepositoryContract {
    model: any;
    all(inputs?: Record<string, any>): Promise<Array<Record<string, any>>>;
    firstWhere(inputs: Record<string, any>, error?: boolean): Promise<Record<string, any> | null>;
    getWhere(inputs: Record<string, any>, error?: boolean): Promise<Array<Record<string, any>> | []>;
    create(inputs: Record<string, any>): Promise<Record<string, any>>;
    createOrUpdate(conditions: Record<string, any>, values: Record<string, any>): Promise<Record<string, any>>;
    firstOrNew(conditions: Record<string, any>, values: Record<string, any>): Promise<Record<string, any>>;
    update(model: any, setValues: Record<string, any>): Promise<number | null>;
    updateWhere(where: Record<string, any>, setValues: Record<string, any>): Promise<number | null>;
    exists(params: Record<string, any>): Promise<boolean>;
    count(params: Record<string, any>): Promise<number>;
    refresh(model: any): Promise<Record<string, any> | null>;
    delete(model: any): Promise<boolean>;
    deleteWhere(params: any): Promise<boolean>;
    attach(model: any, relation: any, payload: number | string | Array<number | string> | Record<string, any>): Promise<void>;
    sync(model: any, relation: string, payload: any): Promise<void>;
    chunk(where: Record<string, any>, size: number, cb: Function): Promise<void>;
    raiseError(): void;
    query(): any;
}
