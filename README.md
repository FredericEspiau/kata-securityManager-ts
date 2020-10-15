# Security Manager Kata

The goal here is to refactor this codebase

# What is refactoring ?

It means `changing the codebase without impacting the observable behaviours`

For example:

- if the execution crashes for one input, after refactoring the execution should still crash for this input
- if the execution write something in the console, the formatting should still be the same in the console
- if someone imports my project in another project, his or her project should still work after the refactoring

# What are the issues ?

- Tests

There are no tests, maybe we could do something about this

Note that as there are no tests, you can't be sure you introduce a regression, so how could you make sure you don't introduce a regression ?

- Dependencies

The method have two implicit dependencies, this could be useful to get rid of them

- Security

The password security is not really strong enough, could you make it more secure ?

- TypeScript

This codebase is not really idiomatic TypeScript, do you think you could make it more idiomatic ?

This means that usually, a codebase written in TypeScript shouldn't look like this

## What is an implicit dependency ?

```ts
function updateUser(string newName) {
    this.name = newName; // explicit dependency
    this.modificationDate = Date.now(); // implicit dependency
}
``` 

An explicit dependency is a dependency passed as argument in a function or a class
An implicit dependency is not passed as argument, thus you can't know your function or class has this dependency only by looking at it's signature

```ts
import { tokenGenerator } from '@myCompany/token-generator';

class UserUpdater {

    constructor(
        private repository: UserRepository, // explicit dependency
    ) {
        this.token = tokenGenerator(); // implicit dependency
    }

}
```

# Source

https://www.devjoy.com/blog/legacy-code-katas/