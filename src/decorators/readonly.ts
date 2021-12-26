/**
 * Make a property readonly. This means, that it can only be assigned once. Attempts to reassign this property will lead to a TypeError at runtime.
 */
export const Readonly: PropertyDecorator = (target, propertyKey) => {
    // define property on target
    Object.defineProperty(target, propertyKey, {
        configurable: true,
        set(v: unknown) {
            // in setter, redefine property, but this time non-writable
            Object.defineProperty(target, propertyKey, {
                writable: false,
                configurable: false,
                value: v,
            });
        },
    });
};
