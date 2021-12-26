export const Readonly: PropertyDecorator = (target, propertyKey) => {
    Object.defineProperty(target, propertyKey, {
        configurable: true,
        set(v: unknown) {
            Object.defineProperty(target, propertyKey, {
                writable: false,
                configurable: false,
                value: v,
            });
        },
    });
};
