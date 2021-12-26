import { deprecate } from "util";

type DeprecationMessage = string;

function factory(message?: DeprecationMessage): MethodDecorator {
    return (_target: unknown, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        const msg = message ?? `${String(propertyKey)} is deprecated!`;
        // eslint-disable-next-line no-param-reassign
        descriptor.value = deprecate(descriptor.value, msg);
        return descriptor;
    };
}

/**
 * Mark a function as deprecated. This prints deprecation warnings to the console, when the deprecated function is called.
 */
export function Deprecated(
    target: unknown,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
): PropertyDescriptor;

/**
 * Mark a function as deprecated with a custom deprecation message.
 * @param message custom deprecation message
 */
export function Deprecated(message?: DeprecationMessage): MethodDecorator;

export function Deprecated(
    targetOrMessage?: DeprecationMessage | unknown,
    propertyKey?: string | symbol,
    descriptor?: PropertyDescriptor
): PropertyDescriptor | MethodDecorator {
    if (propertyKey && descriptor) {
        const Decorator = factory();
        const desc = Decorator(targetOrMessage as Record<string, unknown>, propertyKey, descriptor);
        return desc as PropertyDescriptor;
    }
    if (typeof targetOrMessage === "string") {
        return factory(targetOrMessage);
    }
    throw new Error("@Deprecated(msg) used with wrong parameter type for message!");
}
