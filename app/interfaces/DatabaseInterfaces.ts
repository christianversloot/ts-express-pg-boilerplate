import PostgreSQL from "pg";

/**
 * @interface IProvidedDatabaseClients
 * Interface describing database clients provided through environment variables.
 */
export interface IProvidedDatabaseClients {
  [key: string]: string;
}

/**
 * @interface IConnectedDatabaseClients
 * Interface describing database clients the system connected with.
 */
export interface IConnectedDatabaseClients {
  [key: string]: PostgreSQL.Client;
}
