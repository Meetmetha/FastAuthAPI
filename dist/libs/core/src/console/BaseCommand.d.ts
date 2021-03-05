export declare abstract class BaseCommand {
    receivedOptions: Record<string, any>;
    work(): Promise<void>;
    private validate;
    getRequiredOptions(): string[];
    setReceivedOptions(options: Record<string, any>): this;
    value<T>(option: string): T;
    info(msg: string, color?: string): void;
    error(msg: string): void;
    success(msg: string): void;
    line(): void;
    table(rows: Record<string, any>[]): void;
    ask(question: string): Promise<string>;
    select(question: string, choices: string[], multiple?: boolean): Promise<string | string[]>;
    confirm(question: string): Promise<boolean>;
    password(question: string, mask?: string): Promise<string>;
    abstract handle(): Promise<void>;
    abstract options(): Record<string, OptionInterface>;
}
export interface OptionInterface {
    desc?: string;
    alias?: string;
    req?: boolean;
}
