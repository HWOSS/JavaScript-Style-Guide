
# Project Environment

Style guide and best practices for project environment; including node and task runners

## Project Dependencies

### Installing


 
### Running

All project dependencies should be locally installed.

This includes task runners and other modules typically installed globally.

A project should be able to be installed years down the track without some globally installed module with breaking changes causing problems.

- use `package.json`'s `scripts` object to access locally installed modules.

> If you depend on modules that define executable scripts, like test suites, then those executables will be added to the PATH for executing the scripts.

```
{
    "scripts": {
        "gulp": "gulp"
    }
}
```

In this example, Gulp is now run via:

`npm run gulp myTask` rather than simply `gulp myTask`.
