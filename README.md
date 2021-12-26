# Decoratory

Simple and easy to use utility decorators for TypeScript projects. Many decorators are inspired by decorators from other languages (e.g., Java).

## Installation

```sh
$ npm i decoratory
```

## Usage

This package provides several decorators for usage in your TypeScript projects:

### Deprecated

If you want to mark a method as deprecated, u can annotate it with `@Deprecated`

```ts
import { Deprecated } from "decoratory";

class MyClass {
    @Deprecated
    public deprecatedMethod() {
        // ...
    }
}

new MyClass().deprecatedMethod(); // This will print a deprecation warning to the console
```

If you want to provide your own deprecation message, you can do that by using `@Deprecated` with an extra argument:

```ts
import { Deprecated } from "decoratory";

class MyClass {
    @Deprecated("Custom Message")
    public deprecatedMethod() {
        // ...
    }
}

new MyClass().deprecatedMethod(); // This will print "Custom Message" to the console
```
