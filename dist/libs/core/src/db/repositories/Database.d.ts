import { RepositoryContract } from './Contract';
import { BaseModel } from '../BaseModel';
import { CustomQueryBuilder } from '../QueryBuilder';
export declare class DatabaseRepository implements RepositoryContract {
    model: any;
    setModel(model: BaseModel): this;
    all(): Promise<Array<Record<string, any>>>;
    firstWhere(inputs?: Record<string, any>, error?: boolean): Promise<Record<string, any> | null>;
    getWhere(inputs: Record<string, any>, error?: boolean): Promise<Array<Record<string, any>> | []>;
    create(inputs: Record<string, any>): Promise<Record<string, any>>;
    createOrUpdate(conditions: Record<string, any>, values: Record<string, any>): Promise<Record<string, any>>;
    firstOrNew(conditions: Record<string, any>, values: Record<string, any>): Promise<Record<string, any>>;
    update(model: Record<string, any>, setValues: Record<string, any>): Promise<number | null>;
    updateWhere(where: Record<string, any>, setValues: Record<string, any>): Promise<number | null>;
    exists(params: Record<string, any>): Promise<boolean>;
    count(params: any): Promise<number>;
    delete(model: any): Promise<boolean>;
    deleteWhere(params: Record<string, any>): Promise<boolean>;
    refresh(model: any): Promise<Record<string, any> | null>;
    attach(model: any, relation: string, payload: any): Promise<void>;
    sync(model: any, relation: string, payload: any): Promise<void>;
    chunk(where: Record<string, any>, size: number, cb: Function): Promise<void>;
    raiseError(): void;
    query(): CustomQueryBuilder<any, any>;
    getEntityName(): string;
}
