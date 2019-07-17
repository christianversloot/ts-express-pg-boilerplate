import express = require("express");
import AppStatusController from "../controllers/AppStatusController";
import { IConnectedDatabaseClients } from "../interfaces/DatabaseInterfaces";
import RouteHandler from "./RouteHandler";

/**
 *    CRUD HTTP endpoints for Status routes.
 */
export default (backend: express.Application, connectedDbClients: IConnectedDatabaseClients) => {

  /**
   * @route /app-status
   * Retrieve current status of the application.
   * Can be used for polling whether the application is online.
   */
  backend.get(
    "/app-status",
    (req: express.Request, res: express.Response) =>
      RouteHandler(AppStatusController.checkIfAppIsOnline, req, res, true, connectedDbClients),
  );

};
