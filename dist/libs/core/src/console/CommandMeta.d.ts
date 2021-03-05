import { CommandOptions } from './Decorators';
export declare class CommandMeta {
    private static commands;
    static setCommand(command: string, target: Function, options?: CommandOptions): void;
    static getAllCommands(): Record<string, any>;
    static getTarget(command: string): Function | null;
}
