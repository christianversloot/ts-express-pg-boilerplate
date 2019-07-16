import { Format } from "logform";
import winston from "winston";
const { combine, timestamp, printf } = winston.format;

/**
 *    Interface between log inputs and log output locations.
 */

// Create log format
const logFormat: Format = printf(({ level, message, msgTimestamp }): string => `${msgTimestamp} [${level}] ${message}`);

// Create default logger
const logger = winston.createLogger({
  format: combine(
    timestamp(),
    logFormat,
  ),
  transports: [
    new winston.transports.Console(),
  ],
});

// Export logger
export default logger;
