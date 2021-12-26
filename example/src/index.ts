import { Deprecated, Readonly } from "decoratory";

class TestClass {
    private thing = 2;

    @Readonly
    public stuff = 5;

    @Deprecated
    public deprecatedFunction(): void {
        // eslint-disable-next-line no-console
        console.log(`thing: ${this.thing}`);
    }
}

const t = new TestClass();
t.deprecatedFunction();
