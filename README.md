# ts-express-pg-boilerplate
Out-of-the-box TypeScript ExpressJS PostgreSQL boilerplate code for APIs.

* [Changelog](CHANGELOG.md)

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
Software engineers often need to create REST APIs. Creating the foundation of those is often a manual job, which it doesn't have to be. `ts-express-pg-boilerplate` is boilerplate code that allows you to run a JavaScript based backend out of the box:

* It was created in `TypeScript` instead of `ES6` to benefit from type checking built into TS. Code is transpiled into JavaScript and then run in a NodeJS process.
* It nevertheless harnesses the power of `ExpressJS` for managing your REST API. Adding socket based connections with the `socket.io/Express` integration is easy.
* It utilizes a `controller` based structure that is integrated with routes through a `route handler` which uniformly provides error handling and JWT based authentication. Models are not natively provided, but can be added easily.
* It expects you to use a `PostgreSQL` database out-of-the-box, but replacing it with e.g. MySQL is easy.

## Dependencies
`ts-express-pg-boilerplate` has these dependencies:

* **NodeJS**: https://nodejs.org/en/, we advise LTS.
  * Preferably, install `Yarn` for package management: https://yarnpkg.com/lang/en/docs/install. It is much faster than `npm`.
* **PostgreSQL**: https://www.postgresql.org/
* If you wish to use our Docker based production script:
  * **Docker**: https://docs.docker.com/install/
  * **Docker Compose**: https://docs.docker.com/compose/install/

## Structure
```
project
|   .gitignore
|   CHANGELOG.md
|   docker-compose.yml
|   dockerfile
|   LICENSE
|   package.json
|   tslint.json
|   yarn.lock
│   README.md
│   tsconfig.json
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
### Running in development mode
Clone the repository and install all packages by means of the command `yarn install --production=false`. If you wish to run `ts-express-pg-boilerplate` in development mode, open a command prompt, navigate to the project folder and type `yarn run dev`. [You must possibly first install Yarn.](https://yarnpkg.com/lang/en/docs/install) It will first go through `tslint` to detect possible TS errors (aborting the process if some are found) and will subsequently run the API by means of [pm2](http://pm2.keymetrics.io/docs/usage/environment/).

To do:
* Add file watching that automatically transpiles TypeScript into pm2-watched JavaScript files when changes occur.

### Running in production
#### Harnessing the power of Docker
This repository provides a Docker Compose file which is configured to start the backend at port `80` together with an empty PostgreSQL database that runs on port `5432` and harnesses a `bridge` network to allow the backend to reach it. The API itself runs in [pm2](http://pm2.keymetrics.io/docs/usage/environment/).

(Work in progress)

Database provisioning is not yet provided and must still be done manually.

#### Running it elsewhere

## License
This work is licensed under the [GNU Affero General Public License](./LICENSE). It allows you to use it commercially, modify it, distribute it, and grants permission for patent and private use, under the condition that the limitations and conditions provided by the license are respected.
## Contributors
* Christian Versloot, https://github.com/christianversloot