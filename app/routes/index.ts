import express = require("express");
import { IConnectedDatabaseClients } from "../interfaces/DatabaseInterfaces";
import StatusRoutes from "./StatusRoutes";

/**
 * Routes available within the back-end.
 */

export default (backend: express.Application, connectedDbClients: IConnectedDatabaseClients) => {

  // Forward `backend` and `dbClient` instances to all sub routes.
  // Endpoints are caught from top to bottom.
  StatusRoutes(backend, connectedDbClients);

};
