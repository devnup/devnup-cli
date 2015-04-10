devnup-cli
==========

## Install

- Command-line interface:

  ```npm install -g devnup-cli```

- NodeJS Module

  ```sh
  npm install devnup-cli
  ```

  ```javascript
  var devnup = require('devnup-cli');

  console.log(devnup.version());
  ```

## Boilerplate Generator

To generate a new project based on a Devnup Boilerplate use the ```generate``` command.

```sh
devnup generate <type> <name>
```

Params:
- **type**: The boilerplate type. Types available:
  - **nodejs**: Boilerplate for a new NodeJS API
  - **snippet**: Boilerplate for a new Angular Snippet
- **name**: The name of the new project, will be used as directory name. Default: 'boilerplate'.
