# mc-monorepo

## Yarn Workspaces

- Any subfolder under `/packages` is an independent package/library
- All packages contain a src folder. This helps us generate one script like `eslint src ...` and use it for all.

## Scoped Packages

### mc-web

Mission Control Web App

### mc-utils

Utility functions for Mission Control

## Yarn & Node Versions

Volta pins the node and yarn versions for the project.

**note:** Package versions does not match root version...

`volta pin node yarn`

```js
// starting versions
// ./package.json
"volta": {
  "node": "14.15.4",
  "yarn": "1.22.10"
},
```

---

TODO:

- https://github.com/browserslist/browserslist#browserslistrc
