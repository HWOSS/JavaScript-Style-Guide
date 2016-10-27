# JavaScript Style Guide
JavaScript Style Guide and Linting

## Linting

### Installing & Usage

1. `npm i -D HWOSS/JavaScript-Style-Guide`

1. Create an `.eslintrc` file in base directory

1. Specify project environments. (http://eslint.org/docs/user-guide/configuring#specifying-environments)

1. Specify rule sets to use in order of specificity

*.eslintrc*

```js
{
    "env": {
        "browser": true,
        "commonjs": true,
        "jasmine": true,
        "jest": true,
        "phantomjs": true,
    },
    "extends": [
        "hw-jssg", // is the same as "hw-jssg/ruleset/core"
        "hw-jssg/ruleset/angular"
    ]
}
```

Rules should not be overwritten on a project specific case (by adding `rules` to the projects `.eslintrc` file), unless consulted with a project lead.

### Contributing

If any rules are contentious, an issue or pull request should be made in GitHub with justification of change. This also applies to any new rule-sets deemed required.

Full list of rules can be found at http://eslint.org/docs/rules/


## Docs
