
module.exports = {
  "globals": {
    "console": true
  },
  // http://eslint.org/docs/rules/[rule_name]
  "rules": {
    // Possible Errors
    // These rules relate to possible syntax or logic errors in JavaScript code:
    "no-cond-assign": "error", // disallow assignment operators in conditional expressions
    "no-console": "warn", // disallow the use of console
    "no-constant-condition": "error", // disallow constant expressions in conditions
    "no-control-regex": "error", // disallow control characters in regular expressions
    "no-debugger": "error", // disallow the use of debugger
    "no-dupe-keys": "error", // disallow duplicate keys in object literals
    "no-dupe-args": "error", // disallow duplicate arguments in function definitions
    "no-duplicate-case": "error", // disallow duplicate case labels
    "no-empty": "error", // disallow empty block statements
    "no-empty-character-class": "error", // disallow empty character classes in regular expressions
    "no-ex-assign": "error", // disallow reassigning exceptions in catch clauses
    "no-extra-boolean-cast": "error", // disallow unnecessary boolean casts
    "no-extra-parens": "off", // disallow unnecessary parentheses
    "no-extra-semi": "error", // disallow unnecessary semicolons
    "no-func-assign": "error", // disallow reassigning function declarations
    "no-inner-declarations": "error", // disallow function or var declarations in nested blocks
    "no-invalid-regexp": "error", // disallow invalid regular expression strings in RegExp constructors
    "no-irregular-whitespace": "error", // disallow irregular whitespace outside of strings and comments
    "no-negated-in-lhs": "error", // disallow negating the left operand in in expressions
    "no-obj-calls": "error", // disallow calling global object properties as functions
    "no-regex-spaces": "error", // disallow multiple spaces in regular expression literals
    "no-sparse-arrays": "error", // disallow sparse arrays
    "no-unexpected-multiline": "error", // disallow confusing multiline expressions
    "no-unreachable": "error", // disallow unreachable code after return, throw, continue, and break statements
    "no-unsafe-finally": "off", // disallow control flow statements in finally blocks
    "comma-dangle": "error", // require or disallow trailing commas
    "use-isnan": "error", // require calls to isNaN() when checking for NaN
    "valid-jsdoc": "off", // enforce valid JSDoc comments
    "valid-typeof": "error", // enforce comparing typeof expressions against valid strings

    // Best Practices
    // These rules relate to better ways of doing things to help you avoid problems:
    "no-alert": "error", // disallow the use of alert, confirm, and prompt
    "no-caller": "warn", // disallow the use of arguments.caller or arguments.callee
    "no-case-declarations": "error", // disallow lexical declarations in case clauses
    "no-div-regex": "off", // disallow division operators explicitly at the beginning of regular expressions
    "no-else-return": "warn", // disallow else blocks after return statements in if statements
    "no-empty-function": "warn", // disallow empty functions
    "no-empty-pattern": "error", // disallow empty destructuring patterns
    "no-eq-null": "error", // disallow null comparisons without type-checking operators
    "no-eval": "error", // disallow the use of eval()
    "no-extend-native": "off", // disallow extending native types
    "no-extra-bind": "off", // disallow unnecessary calls to .bind()
    "no-extra-label": "warn", // disallow unnecessary labels
    "no-fallthrough": "error", // disallow fallthrough of case statements
    "no-floating-decimal": "error", // disallow leading or trailing decimal points in numeric literals
    "no-implicit-coercion": "warn", // disallow shorthand type conversions
    "no-implicit-globals": "error", // disallow var and named function declarations in the global scope
    "no-implied-eval": "error", // disallow the use of eval()-like methods
    "no-invalid-this": "error", // disallow this keywords outside of classes or class-like objects
    "no-iterator": "warn", // disallow the use of the __iterator__ property
    "no-labels": "off", // disallow labeled statements
    "no-lone-blocks": "off", // disallow unnecessary nested blocks
    "no-loop-func": "error", // disallow function declarations and expressions inside loop statements
    "no-multi-spaces": ["error", {
      "exceptions": {
        "VariableDeclarator": true,
        "ImportDeclaration": true
      }
    }], // disallow multiple spaces
    "no-multi-str": "error", // disallow multiline strings
    "no-native-reassign": "error", // disallow reassigning native objects
    "no-new": "error", // disallow new operators outside of assignments or comparisons
    "no-new-func": "error", // disallow new operators with the Function object
    "no-new-wrappers": "error", // disallow new operators with the String, Number, and Boolean objects
    "no-octal": "error", // disallow octal literals
    "no-octal-escape": "error", // disallow octal escape sequences in string literals
    "no-param-reassign": "error", // disallow reassigning function parameters
    "no-proto": "off", // disallow the use of the __proto__ property
    "no-redeclare": "error", // disallow var redeclaration
    "no-return-assign": "off", // disallow assignment operators in return statements
    "no-script-url": "error", // disallow javascript: urls
    "no-self-assign": "error", // disallow assignments where both sides are exactly the same
    "no-self-compare": "warn", // disallow comparisons where both sides are exactly the same
    "no-sequences": "warn", // disallow comma operators
    "no-throw-literal": "warn", // disallow throwing literals as exceptions
    "no-unmodified-loop-condition": "error", // disallow unmodified loop conditions
    "no-unused-expressions": "warn", // disallow unused expressions
    "no-unused-labels": "error", // disallow unused labels
    "no-useless-call": "error", // disallow unnecessary calls to .call() and .apply()
    "no-useless-concat": "warn", // disallow unnecessary concatenation of literals or template literals
    "no-useless-escape": "warn", // disallow unnecessary escape characters
    "no-void": "error", // disallow void operators
    "no-warning-comments": "off", // disallow specified warning terms in comments
    "no-with": "error", // disallow with statements
    "no-magic-numbers": ["warn", {
      "ignoreArrayIndexes": true
    }], // disallow magic numbers
    "array-callback-return": "warn", // enforce return statements in callbacks of array methods
    "accessor-pairs": "warn", // enforce getter and setter pairs in objects
    "block-scoped-var": "warn", // enforce the use of variables within the scope they are defined
    "complexity": ["off", 11], // enforce a maximum cyclomatic complexity allowed in a program
    "consistent-return": "warn", // require return statements to either always or never specify values
    "curly": "error", // enforce consistent brace style for all control statements
    "default-case": "warn", // require default cases in switch statements
    "dot-location": ["error", "property"], // enforce consistent newlines before and after dots
    "dot-notation": "warn", // enforce dot notation whenever possible
    "eqeqeq": "error", // require the use of === and !==
    "guard-for-in": "warn", // require for-in loops to include an if statement
    "radix": "error", // enforce the consistent use of the radix argument when using parseInt()
    "vars-on-top": "error", // require var declarations be placed at the top of their containing scope
    "wrap-iife": ["error", "inside"], // require parentheses around immediate function invocations
    "yoda": "error", // require or disallow “Yoda” conditions

    // Strict Mode
    // These rules relate to strict mode directives:
    "strict": ["error", "global"], // require or disallow strict mode directives

    // Variables
    // These rules relate to variable declarations:
    "init-declarations": "off", // require or disallow initialization in var declarations
    "no-catch-shadow": "off", // disallow catch clause parameters from shadowing variables in the outer scope - only relevant to < IE8
    "no-delete-var": "error", // disallow deleting variables
    "no-label-var": "error", // disallow labels that share a name with a variable
    "no-restricted-globals": "off", // disallow specified global variables
    "no-shadow": "warn", // disallow var declarations from shadowing variables in the outer scope
    "no-shadow-restricted-names": "off", // disallow identifiers from shadowing restricted names
    "no-undef": "error", // disallow the use of undeclared variables unless mentioned in /* global */ comments
    "no-undef-init": "error", // disallow initializing variables to undefined
    "no-undefined": "error", // disallow the use of undefined as an identifier
    "no-unused-vars": "error", // disallow unused variables
    "no-use-before-define": "warn", // disallow the use of variables before they are defined

    // Node.js and CommonJS
    // These rules relate to code running in Node.js, or in browsers with CommonJS:
    "no-mixed-requires": "off", // disallow require calls to be mixed with regular var declarations
    "no-new-require": "off", // disallow new operators with calls to require
    "no-path-concat": "off", // disallow string concatenation with __dirname and __filename
    "no-process-env": "off", // disallow the use of process.env
    "no-process-exit": "off", // disallow the use of process.exit()
    "no-restricted-modules": "off", // disallow specified modules when loaded by require
    "no-sync": "off", // disallow synchronous methods
    "callback-return": "off", // require return statements after callbacks
    "global-require": "error", // require require() calls to be placed at top-level module scope
    "handle-callback-err": "off", // require error handling in callbacks

    // Stylistic Issues
    // These rules relate to style guidelines, and are therefore quite subjective:
    "no-array-constructor": "error", // disallow Array constructors
    "no-bitwise": "off", // disallow bitwise operators
    "no-continue": "error", // disallow continue statements
    "no-inline-comments": "off", // disallow inline comments after code
    "no-lonely-if": "warn", // disallow if statements as the only statement in else blocks
    "no-mixed-spaces-and-tabs": "error", // disallow mixed spaces and tabs for indentation
    "linebreak-style": "off", // enforce consistent linebreak style
    "no-multiple-empty-lines": ["error", {
      "max": 2
    }], // disallow multiple empty lines
    "no-negated-condition": "warn", // disallow negated conditions
    "no-nested-ternary": "error", // disallow nested ternary expressions
    "no-new-object": "error", // disallow Object constructors
    "no-plusplus": "off", // disallow the unary operators ++ and --
    "no-restricted-syntax": "off", //disallow specified syntax // TODO: https://github.com/eslint/espree/blob/master/lib/ast-node-types.js
    "no-whitespace-before-property": "error", // disallow whitespace before properties
    "no-spaced-func": "error", // disallow spacing between function identifiers and their applications
    "no-ternary": "off", // disallow ternary operators
    "no-trailing-spaces": "off", // disallow trailing whitespace at the end of lines
    "no-underscore-dangle": "off", // disallow dangling underscores in identifiers
    "no-unneeded-ternary": "error", // disallow ternary operators when simpler alternatives exist
    "array-bracket-spacing": ["error", "never"], // enforce consistent spacing inside array brackets
    "block-spacing": ["error", "always"], // enforce consistent spacing inside single-line blocks
    "brace-style": ["error", "1tbs", {
      "allowSingleLine": false
    }], // enforce consistent brace style for blocks
    "camelcase": "error", // enforce camelcase naming convention
    "comma-spacing": ["error", {
      "before": false, "after": true
    }], // enforce consistent spacing before and after commas
    "comma-style": ["error", "last"], // enforce consistent comma style
    "computed-property-spacing": ["error", "never"], // enforce consistent spacing inside computed property brackets
    "consistent-this": "off", // enforce consistent naming when capturing the current execution context
    "eol-last": "error", // enforce at least one newline at the end of files
    "func-names": "off", // enforce named function expressions
    "func-style": "off", // enforce the consistent use of either function declarations or expressions
    "id-length": "off", // enforce minimum and maximum identifier lengths
    "indent": ["error", 2, {
      "VariableDeclarator": {
        "var": 2,
        "let": 2,
        "const": 3
      }, "SwitchCase": 1
    }], // enforce consistent indentation
    "jsx-quotes": "off", // enforce the consistent use of either double or single quotes in JSX attributes
    "key-spacing": ["error", {
      "beforeColon": false,
      "afterColon": true
    }], // enforce consistent spacing between keys and values in object literal properties
    "keyword-spacing": ["error", {
      "before": true, "after": false,
      "overrides": {
        "case": { "after": true },
        "else": { "after": true },
        "return": { "after": true },
        "from": { "after": true },
        "throw": { "after": true }
      }
    }], // enforce consistent spacing before and after keywords
    "lines-around-comment": "off", // require empty lines around comments
    "max-depth": ["warn", {
      "max": 4
    }], // enforce a maximum depth that blocks can be nested
    "max-len": ["warn", {
      "code": 120
    }], // enforce a maximum line length
    "max-nested-callbacks": ["warn", {
      "max": 4
    }], // enforce a maximum depth that callbacks can be nested
    "max-params": ["warn", {
      "max": 4
    }], // enforce a maximum number of parameters in function definitions
    "max-statements": "off", // enforce a maximum number of statements allowed in function blocks
    "max-statements-per-line": ["error", {
      "max": 1
    }], // enforce a maximum number of statements allowed per line
    "new-cap": "error", // require constructor function names to begin with a capital letter
    "new-parens": "error", // require parentheses when invoking a constructor with no arguments
    "newline-after-var": ["error", "always"], // require or disallow an empty line after var declarations
    "newline-before-return": "error", // require an empty line before return statements
    "newline-per-chained-call": "error", // require a newline after each call in a method chain
    "object-curly-spacing": ["error", "never"], // enforce consistent spacing inside braces
    "one-var": "off", // enforce variables to be declared either together or separately in functions
    "one-var-declaration-per-line": ["error", "always"], // require or disallow newlines around var declarations
    "operator-assignment": "off", // require or disallow assignment operator shorthand where possible
    "operator-linebreak": "off", // enforce consistent linebreak style for operators
    "padded-blocks": "off", // require or disallow padding within blocks
    "quote-props": ["error", "always"], // require quotes around object literal property names
    "quotes": ["error", "single", {
      "avoidEscape": true,
      "allowTemplateLiterals": true
    }], // enforce the consistent use of either backticks, double, or single quotes
    "id-match": "off", // require identifiers to match a specified regular expression
    "id-blacklist": "off", // disallow specified identifiers
    "require-jsdoc": "off", // require JSDoc comments
    "semi": ["error", "always"], // require or disallow semicolons instead of ASI
    "semi-spacing": ["error", {
      "before": false, "after": true
    }], // enforce consistent spacing before and after semicolons
    "sort-vars": "off", // require variables within the same declaration block to be sorted
    "space-before-blocks": "error", // enforce consistent spacing before blocks
    "space-before-function-paren": ["error", "never"], // enforce consistent spacing before function definition opening parenthesis
    "space-in-parens": ["error", "never"], // enforce consistent spacing inside parentheses
    "space-infix-ops": "error", // require spacing around operators
    "space-unary-ops": "off", // enforce consistent spacing before or after unary operators
    "spaced-comment": ["error", "always", {
      "exceptions": ["*"]
    }], // enforce consistent spacing after the // or /* in a comment
    "wrap-regex": "error", // require parenthesis around regex literals

    // ECMAScript 6
    // These rules relate to ES6, also known as ES2015:
    "no-class-assign": "error", // disallow reassigning class members
    "no-confusing-arrow": "off", // disallow arrow functions where they could be confused with comparisons
    "no-const-assign": "error", // disallow reassigning const variables
    "no-dupe-class-members": "error", // disallow duplicate class members
    "no-duplicate-imports": "off", // disallow duplicate module imports
    "no-new-symbol": "error", // disallow new operators with the Symbol object
    "no-restricted-imports": "off", // disallow specified modules when loaded by import
    "no-this-before-super": "error", // disallow this/super before calling super() in constructors
    "no-useless-computed-key": "off", // disallow unnecessary computed property keys in object literals
    "no-useless-constructor": "off", // disallow unnecessary constructors
    "no-var": "off", // require let or const instead of var
    "arrow-body-style": "off", // require braces around arrow function bodies
    "arrow-parens": "off", // require parentheses around arrow function arguments
    "arrow-spacing": "off", // enforce consistent spacing before and after the arrow in arrow functions
    "constructor-super": "error", // require super() calls in constructors
    "generator-star-spacing": "off", // enforce consistent spacing around * operators in generator functions
    "object-shorthand": "off", // require or disallow method and property shorthand syntax for object literals
    "prefer-arrow-callback": "off", // require arrow functions as callbacks
    "prefer-const": "off", // require const declarations for variables that are never reassigned after declared
    "prefer-reflect": "off", // require Reflect methods where applicable
    "prefer-rest-params": "off", // require rest parameters instead of arguments
    "prefer-spread": "off", // require spread operators instead of .apply()
    "prefer-template": "off", // require template literals instead of string concatenation
    "require-yield": "off", // require generator functions to contain yield
    "sort-imports": "off", // enforce sorted import declarations within modules
    "template-curly-spacing": "off", // require or disallow spacing around embedded expressions of template strings
    "yield-star-spacing": "off" // require or disallow spacing around the * in yield* expressions
  }
};
