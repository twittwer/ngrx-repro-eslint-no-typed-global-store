# NgRX Repro

ESLint Rule `@ngrx/no-typed-global-store` fails with the following error since `16.1.0`
```
> nx run app:lint

Linting "app"...

 >  NX   Cannot read properties of undefined (reading 'typeAnnotation')

   Occurred while linting C:\Users\tw\git\org\apps\app\src\app\app.component.ts:1
   Rule: "@ngrx/no-typed-global-store"
   Pass --verbose to see the stacktrace.
```

## How to reproduce

1. Run `npm i`
1. Run `npm run lint`
    - Fails with `Cannot read properties of undefined (reading 'typeAnnotation')`
1. Run `npm run downgrade` (`@ngrx/eslint-plugin@16.0.1`)
1. Run `npm run lint`
    - Succeeds without error

> Run `npm run upgrade` (`@ngrx/eslint-plugin@16.1.0`) to restore the broken version