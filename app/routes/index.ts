import express = require("express");
import PostgreSQL from "pg";
import StatusRoutes from "./StatusRoutes";

/**
 * Routes available within the back-end.
 */

export default (backend: express.Application, dbClient: PostgreSQL.Client) => {

  // Forward `backend` and `dbClient` instances to all sub routes.
  // Endpoints are caught from top to bottom.
  StatusRoutes(backend, dbClient);

};
