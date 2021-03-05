declare global {
    interface String {
        after(needle: string): string;
        before(needle: string): string;
        truncate(length: number): string;
    }
}
export {};
