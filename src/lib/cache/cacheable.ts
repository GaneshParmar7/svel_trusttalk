interface ICacheable {
    id: number;
    isModified: boolean;
}

class Cacheable implements ICacheable {
    id: number;
    isModified: boolean;
    // set(propertyName: string, value: unknown): void {
    //     // eslint-disable-next-line no-prototype-builtins
    //     if (this.hasOwnProperty(propertyName)) {
    //         this[propertyName] = value;
    //         this.isModified = true;
    //     } else {
    //         throw new Error(`Property '${propertyName}' does not exist in the class.`);
    //     }
    // }
}

export type { ICacheable };
export { Cacheable };