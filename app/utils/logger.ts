import { Format } from "logform";
import winston from "winston";
const { combine, timestamp, printf } = winston.format;

/**
 *    Interface between log inputs and log output locations.
 */

// Create log format
const logFormat: Format = printf((info) => `${info.timestamp} [${info.level}] ${info.message}`);

// Create default logger
const logger = winston.createLogger({
  format: combine(
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    logFormat,
  ),
  transports: [
    new (winston.transports.Console)(),
  ],
});

// Export logger
export default logger;
