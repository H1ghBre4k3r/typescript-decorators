import { Deprecated } from "decoratory";

class TestClass {
    private thing = 2;

    @Deprecated
    deprecatedFunction(): void {
        // eslint-disable-next-line no-console
        console.log(`thing: ${this.thing}`);
    }
}

const t = new TestClass();
t.deprecatedFunction();
t.deprecatedFunction();
