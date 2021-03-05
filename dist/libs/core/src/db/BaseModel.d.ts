import { Model, RelationExpression } from 'objection';
import { CustomQueryBuilder } from './QueryBuilder';
export declare class BaseModel extends Model {
    readonly id: number;
    QueryBuilderType: CustomQueryBuilder<this>;
    static QueryBuilder: typeof CustomQueryBuilder;
    static useLimitInFirst: boolean;
    static modulePaths: any[];
    static setModulePaths(modules: string[]): void;
    static get modelPaths(): string[];
    fetchRelation(expression: RelationExpression<any>, options?: {}): Promise<this>;
}
