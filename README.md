# mc-monorepo

## Yarn Workspaces

- Any subfolder under `/packages` is an independent package/library
- All packages contain a src folder. This helps us generate one script like `eslint src ...` and use it for all.

## Scoped Packages

### mc-web

Mission Control Web App

### mc-utils

Utility functions for Mission Control

## Package Versioning Strategy

`independent`

```js
// ./lerna.json
  "version": "independent",
```

---

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

## Important Lerna Commands

**lerna add**

Add a single dependency to matched packages

**lerna bootstrap**

Link local packages together and install remaining package dependencies

**lerna exec**

Execute an arbitrary command in each package

**lerna run**

Run an npm script in each package that contains that script

**lerna link**

Symlink together all packages that are dependencies of each other

---

## Scripts

All workspace-wide scripts are located under `./scripts/workspace`

All per package scripts are located under `./scripts/packages`

Yarn scripts are run via `scripty`. All `scripty` scripts should be executable by `chmod +x scripts/greet`

---

## Changelog Policy

Conventional Changelog

---

TODO:

- https://github.com/browserslist/browserslist#browserslistrc
