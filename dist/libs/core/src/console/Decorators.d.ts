import 'reflect-metadata';
export declare function Command(command: string, options?: CommandOptions): (target: Function) => void;
export interface CommandOptions {
    desc: string;
}
