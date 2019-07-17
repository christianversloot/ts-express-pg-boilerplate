# ts-express-pg-boilerplate
Changelog for the `ts-express-pg-boilerplate` project.

## Version 0.0.7
* Added default `PORT` and `POSTGRES_CLIENTS` variables for when they are not provided.

## Version 0.0.6
* Added PostgreSQL support with bridge network to Docker compose file for production.

## Version 0.0.5
* Added multi database support.

## Version 0.0.4
* Corrected `.gitignore` file.

## Version 0.0.3
* Moved environment variables to `/app/pm2.config.ts`; provided example file with variables used by the backend.

## Version 0.0.2
* Replaced `nodemon` for development use with `pm2`.
* Added Docker and Docker Compose files for running in production with `pm2`.
* Moved environment variables to `backend.config.ts`.

## Version 0.0.1
* Initial version of the work.
* Runs a basic backend but does not yet support running in production.