import express = require("express");
import Controllers from "../controllers/Controllers";
import { IConnectedDatabaseClients } from "../interfaces/DatabaseInterfaces";

/**
 * Generic route handler.
 * Checks all incoming requests for token presence and validity
 * and provides generic error handling from the Controllers.
 */
export default (
  call: (req: express.Request, res: express.Response, connectedDbClients: IConnectedDatabaseClients) => void,
  req: express.Request,
  res: express.Response,
  omitCheck: boolean = false,
  connectedDbClients: IConnectedDatabaseClients,
) => {
  // Check which object to use
  const rqObj = req.body ? req.body : req.param;
  // Only proceed if the user provides a token
  // or when internally the check is omitted, e.g.
  // when performing a login operation.
  if (rqObj.token || omitCheck) {
    // Now verify a user unless the check is omitted
    try {
      if (!omitCheck) {
        if (Controllers.token.verify()) {
          return call(req, res, connectedDbClients);
        }
        return res.status(500).json({
          error: "Invalid token",
        });
      } else {
        return call(req, res, connectedDbClients);
      }
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }
  // If no token is provided, call off the attempt.
  return res.status(500).json({
    error: "Invalid token",
  });
};
