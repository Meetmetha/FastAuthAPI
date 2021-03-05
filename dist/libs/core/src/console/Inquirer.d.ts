export declare class Inquirer {
    static ask(question: string): Promise<string>;
    static confirm(message: string): Promise<boolean>;
    static select(message: string, choices: string[], multiple?: boolean): Promise<string | string[]>;
    static password(message: string, mask?: string): Promise<string>;
}
