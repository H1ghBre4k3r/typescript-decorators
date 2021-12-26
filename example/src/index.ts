import { Deprecated, Nonnull } from "decoratory";

class TestClass {
    private thing = 2;

    @Deprecated
    deprecatedFunction(): void {
        // eslint-disable-next-line no-console
        console.log(`thing: ${this.thing}`);
    }

    otherFunction(@Nonnull toAdd: number) {
        console.log(`toAdd: ${this.thing + toAdd}`);
    }
}

const t = new TestClass();
t.deprecatedFunction();
t.otherFunction(4);
