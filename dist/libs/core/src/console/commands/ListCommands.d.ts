import { BaseCommand, OptionInterface } from '../BaseCommand';
export declare class ListCommands extends BaseCommand {
    handle(): Promise<void>;
    options(): Record<string, OptionInterface>;
}
