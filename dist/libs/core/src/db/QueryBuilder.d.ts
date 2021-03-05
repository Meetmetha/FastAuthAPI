import { QueryBuilder, Model, Page } from 'objection';
export declare class CustomQueryBuilder<M extends Model, R = M[]> extends QueryBuilder<M, R> {
    ArrayQueryBuilderType: CustomQueryBuilder<M, M[]>;
    SingleQueryBuilderType: CustomQueryBuilder<M, M>;
    NumberQueryBuilderType: CustomQueryBuilder<M, number>;
    PageQueryBuilderType: CustomQueryBuilder<M, Page<M>>;
    paginate(page: number, perPage: number): Promise<{
        pagination: {
            currentPage: number;
            totalPages: number;
            perPage: number;
            total: number;
        };
        data: M[];
    }>;
    onlyCount(): Promise<any>;
    exists(): Promise<boolean>;
    chunk(cb: Function, size: number): Promise<void>;
}
