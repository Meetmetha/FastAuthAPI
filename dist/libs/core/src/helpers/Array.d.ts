export {};
declare global {
    interface Array<T> {
        first(): T;
        last(): T;
        isNotEmpty(): boolean;
        isEmpty(): boolean;
        remove(elem: T): Array<T>;
        init(length: number): Array<T>;
        pluck(key: string): Array<T>;
        toObject(key: string): Array<T>;
        fillWith(value: Function | string | number | Record<string, any> | Array<any>): Array<T>;
    }
}
