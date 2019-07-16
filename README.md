# ts-express-pg-boilerplate

## Table of Contents
- [ts-express-pg-boilerplate](#ts-express-pg-boilerplate)
  * [Table of Contents](#table-of-contents)
  * [What is ts-express-pg-boilerplate?](#what-is-ts-express-pg-boilerplate-)
  * [Dependencies](#dependencies)
  * [Structure](#structure)
  * [Running ts-express-pg-boilerplate](#running-ts-express-pg-boilerplate)
    + [Running in development](#running-in-development)
    + [Running in production](#running-in-production)
      - [Harnessing the power of Docker](#harnessing-the-power-of-docker)
      - [Running it elsewhere](#running-it-elsewhere)
  * [License](#license)
  * [Contributors](#contributors)

## What is ts-express-pg-boilerplate?
Software engineers often need to create REST APIs. Creating the foundation of those is often a manual job, which it doesn't have to be. `ts-express-pg-boilerplate` is boilerplate code which allows you to run a JavaScript based backend out of the box:

* It was created in `TypeScript` instead of `ES6` to benefit from type checking built into TS. Code is transpiled into JavaScript and then run in a NodeJS process.
* It nevertheless harnesses the power of `ExpressJS` for managing your REST API. Adding socket based connections with the `socket.io/Express` integration is easy.
* It utilizes a `controller` based structure which is integrated with routes through a `route handler` which uniformly provides error handling and JWT based authentication. Models are not natively provided, but can be added easily.
* It expects you to use a `PostgreSQL` database out-of-the-box, but replacing it with e.g. MySQL is easy.

## Dependencies
`ts-express-pg-boilerplate` has these dependencies:

* **NodeJS**: https://nodejs.org/en/, we advise LTS.
* **PostgreSQL**: https://www.postgresql.org/

## Structure
```
project
│   README.md
│   tsconfig.json
|   tslint.json
|   package.json
|   LICENSE
|   .gitignore
|   .env.example    
│
└───node_modules
└───app
│   │   backend.ts
│   │
│   └───config
│   |   │   GeneralConfig.ts
|   |   |   index.ts
│   └───controllers
│   |   │   AppStatusController.ts
|   |   |   Controllers.ts
|   |   |   TokenController.ts
│   └───interfaces
|   |   |   AppStatusInterfaces.ts
│   └───routes
|   |   |   index.ts
|   |   |   RouteHandler.ts
|   |   |   StatusRoutes.ts
│   └───utils
|   |   |   logger.ts
```
## Running ts-express-pg-boilerplate
### Running in development
### Running in production
#### Harnessing the power of Docker
Docker support for production will be added later.
#### Running it elsewhere

## License
This work is licensed under the [GNU Affero General Public License](./LICENSE.md). It allows you to use it commercially, modify it, distribute it, and grants permission for patent and private use, under the condition that the limitations and conditions provided by the license are respected.
## Contributors
* Christian Versloot, https://github.com/christianversloot