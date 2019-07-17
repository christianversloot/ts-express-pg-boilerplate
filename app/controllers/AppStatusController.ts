import express = require("express");
import { IConnectedDatabaseClients } from "../interfaces/DatabaseInterfaces";
import logger from "../utils/logger";

/**
 *    @class AppStatusController
 *    Functionality for checking the status of the backend.
 */
export default class AppStatusController {

  /**
   * @function checkIfAppIsOnline
   * Check if the application is online.
   *
   * @static
   * @param <express.Response> res ExpressJS response object
   * @return <express.Response.json> HTTP 200 JSON Response
   */
  public static checkIfAppIsOnline(
    // tslint:disable-next-line: variable-name
    _req: express.Request,
    res: express.Response,
    // tslint:disable-next-line: variable-name
    _connectedDbClients: IConnectedDatabaseClients,
  ): void {
    // Create Response
    const applicationStatus: IAppOnlineResponse = {
      is_online: true,
    };
    // Perform log
    logger.info("AppStatusController.checkIfAppIsOnline: successfully checked that app is online.");
    // Return response
    res.json(applicationStatus);
  }

}
