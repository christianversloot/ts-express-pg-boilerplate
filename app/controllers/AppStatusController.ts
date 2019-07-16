import express = require("express");
import PostgreSQL from "pg";
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
// tslint:disable-next-line: variable-name
  public static checkIfAppIsOnline(_req: express.Request, res: express.Response, _dbClient: PostgreSQL.Client): void {
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
