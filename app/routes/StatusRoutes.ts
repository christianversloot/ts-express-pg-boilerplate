import express = require("express");
import PostgreSQL from "pg";
import AppStatusController from "../controllers/AppStatusController";
import RouteHandler from "./RouteHandler";

/**
 *    CRUD HTTP endpoints for Status routes.
 */
export default (backend: express.Application, dbClient: PostgreSQL.Client) => {

  /**
   * @route /app-status
   * Retrieve current status of the application.
   * Can be used for polling whether the application is online.
   */
  backend.get(
    "/app-status",
    (req: express.Request, res: express.Response) =>
      RouteHandler(AppStatusController.checkIfAppIsOnline, req, res, true, dbClient),
  );

};
