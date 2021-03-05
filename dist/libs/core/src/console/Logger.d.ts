export declare class Logger {
    static info(msg: string, color?: string): void;
    static error(msg: string): void;
    static line(): void;
    static success(msg: string): void;
    static table(rows: Record<string, any>[]): void;
    static print(msg: string, color: any): void;
}
