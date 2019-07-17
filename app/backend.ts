/**
 *    @name ts-express-pg-boilerplate
 *    Boilerplate code for TypeScript based ExpressJS backends with PostgreSQL.
 */

import BodyParser from "body-parser";
import cors from "cors";
import express = require("express");
import PostgreSQL from "pg";
import { IConnectedDatabaseClients, IProvidedDatabaseClients } from "./interfaces/DatabaseInterfaces";
import Routes from "./routes";
import logger from "./utils/logger";

// Initialize PostgreSQL clients
const allDbClientsString: (string | undefined) = process.env.POSTGRES_CLIENTS;
const connectedDbClients: IConnectedDatabaseClients = {};
const connectionPromises: Array<Promise<object>> = [];
logger.info("INITIALIZING DATABASE");
if (!allDbClientsString) {
  logger.info("No database clients provided in environment variables.");
} else {
  // Set up database connections
  const allDbClients: IProvidedDatabaseClients = JSON.parse(allDbClientsString);
  logger.info(`Found ${Object.keys(allDbClients).length} database client(s) in environment variables.`);
  for (const clientName of Object.keys(allDbClients)) {
    if (allDbClients.hasOwnProperty(clientName)) {
      const connectionString: string = allDbClients[clientName];
      logger.info(`Connecting with database client ${clientName} at ${connectionString}.`);
      const dbClient = new PostgreSQL.Client({ connectionString });
      connectionPromises.push(new Promise((resolve) => {
        return dbClient.connect().then(() => {
          logger.info("Successfully connected to database.");
          connectedDbClients[clientName] = dbClient;
          resolve();
        })
          .catch((e: Error): void => {
            logger.error(`Database Connection ${e}.`);
            resolve();
          });
      }));
    } else {
      logger.info(`Database client key ${clientName} is a corrupt key.`);
    }
  }
}

// Only proceed when database setup is complete.
Promise.all(connectionPromises)
  .then(() => {
    logger.info(`Database setup finalized; connected to ${Object.keys(connectedDbClients).length} database(s).`);
    logger.info("INITIALIZING EXPRESSJS");
  })
  .then(() => {
    // Create the backend
    const backend: express.Application = express();

    // Allow CORS
    backend.use(cors());

    // Parse body
    backend.use(BodyParser.urlencoded({ limit: "10mb", extended: true }));
    backend.use(BodyParser.json({ limit: "10mb" }));

    // Bind routes and database client to backend
    Routes(backend, connectedDbClients);

    // Start the backend
    backend.listen(process.env.PORT, () => {
      logger.info(`ExpressJS listening at port ${process.env.PORT}`);
    });
  });
