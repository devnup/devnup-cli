devnup-cli
==========

## Install

- Command-line interface:

  ```sh
  npm install -g devnup-cli
  devnup help
  ```


- NodeJS Module inside a project

  ```sh
  npm install devnup-cli --save
  ```

  ```javascript
  var devnup = require('devnup-cli');

  console.log(devnup.version());
  ```

## Command Line Interface

#### Commands:

- **Generate**: Create a new project based on a Devnup Boilerplate use the ```generate``` command.

  ```sh
  devnup generate <type> <name>
  ```

  Params:
  - **name**: The name of the new project, will be used as directory name. **Default**: 'boilerplate'.
  - **type**: The boilerplate type. Types available:
    - **nodejs**: Boilerplate for a new NodeJS API
    - **snippet**: Boilerplate for a new Angular Snippet

- **Version**: Gets de library version

  ```sh
  devnup version
  ```
  
## NodeJS Module

#### Submodules:

- **Email**: Interface to the Devnup Email APIs
- **Generate**: Interface to the Devnup Generator and its Boilerplates
- **Manager**: Interface to the Devnup Email APIs
- **Social**: Interface to the Devnup Email APIs
- **WS**: Interface to the Devnup WS APIs
