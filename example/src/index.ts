import { Deprecated } from "typescript-decorators";

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
