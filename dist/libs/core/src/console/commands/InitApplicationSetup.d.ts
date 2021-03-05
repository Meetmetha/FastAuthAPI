import { BaseCommand, OptionInterface } from '../BaseCommand';
export declare class InitApplicationSetup extends BaseCommand {
    handle(): Promise<void>;
    options(): Record<string, OptionInterface>;
}
