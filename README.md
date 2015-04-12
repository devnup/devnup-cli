devnup-cli
==========

The official Devnup Command Line Interface and NodeJS Modules.

Full module documentation and references available at http://cli.devnup.com/.

## Install

- Command-line interface:

  ```sh
  $ npm install -g devnup-cli
  $ devnup help
  ```


- NodeJS Module inside a project

  ```sh
  $ npm install devnup-cli --save
  ```

  ```javascript
  var devnup = require('devnup-cli');

  console.log(devnup.version());
  ```

## Command Line Interface

The command line interface is a simple tool for accessing Devnup library and resources using a NodeJS global module. It is publicly available through NPM.

#### Commands:

- **Version**: Gets de library version.

  ```sh
  $ devnup version
  ```

- **Login**: Authenticate a Devnup user and store its token for accessing resources.

  ```sh
  $ devnup login <email>
  ```

- **Generate**: Create a new project based on a Devnup Boilerplate use the ```generate``` command.

  ```sh
  $ devnup generate <type> <name> [-v | --verbose]
  ```

  Params:
  - **name**: The name of the new project, will be used as directory name. **Default**: 'boilerplate'.
  - **type**: The boilerplate type. Types available:
    - **nodejs**: Boilerplate for a new NodeJS API
    - **snippet**: Boilerplate for a new Angular Snippet


## NodeJS Module

#### Submodules:

- **Email**: Interface to the Devnup Email API. [Module documentation](http://cli.devnup.com/com.devnup.cli.lib.emailModule.html)

  ```javascript
  devnup.email();
  ```


- **Generate**: Interface to the Devnup Generator and its Boilerplates. [Module documentation](http://cli.devnup.com/com.devnup.cli.lib.generateModule.html)

  ```javascript
  devnup.generate();
  ```


- **Manager**: Interface to the Devnup Manager API. [Module documentation](http://cli.devnup.com/com.devnup.cli.lib.managerModule.html)

  ```javascript
  devnup.manager();
  ```


- **Social**: Interface to the Devnup Social API. [Module documentation](http://cli.devnup.com/com.devnup.cli.lib.socialModule.html)

  ```javascript
  devnup.social();
  ```


- **WS**: Interface to the Devnup WS APIs. [Module documentation](http://cli.devnup.com/com.devnup.cli.lib.wsModule.html)

  ```javascript
  devnup.ws();
  ```

