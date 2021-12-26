/* eslint-disable no-console */

type ObserverCallback<T> = (value: T) => unknown;

function factory<T>(cb?: ObserverCallback<T>): PropertyDecorator {
    return (target: object, propertyKey: string | symbol) => {
        let value: T;
        const { name } = target.constructor;
        Object.defineProperty(target, propertyKey, {
            set(newValue: T) {
                value = newValue;
                if (cb) {
                    cb(newValue);
                } else {
                    console.log(`setting property ${name}#${String(propertyKey)} = ${newValue}`);
                }
            },
            get() {
                return value;
            },
        });
    };
}

/**
 * Observe all changes of a property. All assignments will be logged to the console.
 */
export function Observe(target: object, propertyKey: string | symbol): void;

/**
 * Observe all changes of a property and invoke a provided callback on each assignment.
 * @param cb callback to execute on assignment of observed variable
 */
export function Observe<T>(cb: ObserverCallback<T>): PropertyDecorator;

export function Observe<T>(targetOrCb: object | ObserverCallback<T>, propertyKey?: string | symbol) {
    if (propertyKey && typeof targetOrCb !== "function") {
        const decorator = factory();
        return decorator(targetOrCb, propertyKey);
    }
    if (typeof targetOrCb === "function") {
        return factory(targetOrCb as ObserverCallback<T>);
    }
    throw new TypeError("@Observe not used with correct paramters!");
}
