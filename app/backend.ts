/**
 *    @name ts-express-pg-boilerplate
 *    Boilerplate code for TypeScript based ExpressJS backends with PostgreSQL.
 */

import BodyParser from "body-parser";
import cors from "cors";
import express = require("express");
import PostgreSQL from "pg";
import Routes from "./routes";
import logger from "./utils/logger";

// Initialize PostgreSQL client
logger.info(`Connecting with database at ${process.env.POSTGRES_URL}`);
const dbClient = new PostgreSQL.Client({ connectionString: process.env.POSTGRES_URL });

// Connect to the database
dbClient.connect().then(() => {
  logger.info("Successfully connected to database.");
})
  .catch((e: Error): void => {
    logger.error(`Error when connecting to database - ${e}.`);
  });

// Create the backend
const backend: express.Application = express();

// Allow CORS
backend.use(cors());

// Parse body
backend.use(BodyParser.urlencoded({ limit: "10mb", extended: true }));
backend.use(BodyParser.json({ limit: "10mb" }));

// Bind routes and database client to backend
Routes(backend, dbClient);

// Start the backend
backend.listen(process.env.PORT, () => {
  logger.info(`Backend listening at port ${process.env.PORT}`);
});
