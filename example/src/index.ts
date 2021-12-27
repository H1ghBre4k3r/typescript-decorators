import { Deprecated, Observe, Readonly } from "decoratory";

function observeFn(value: unknown): void {
    // eslint-disable-next-line no-console
    console.log(`value = ${value}`);
}

class TestClass {
    private thing = 2;

    @Readonly
    public stuff = 5;

    @Observe(observeFn)
    public foo = 5;

    @Deprecated
    public deprecatedFunction(): void {
        // eslint-disable-next-line no-console
        console.log(`thing: ${this.thing}`);
    }
}

const t = new TestClass();
t.deprecatedFunction();
t.foo = 42;
