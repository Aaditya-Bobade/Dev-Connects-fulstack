import { Pool, QueryResult, QueryResultRow } from "pg";
import { env } from "../config/env.js";
import { logger } from "../lib/logger.js";

export const pool = new Pool({
  connectionString: env.DB_URL,
  ssl: {
    rejectUnauthorized: true,
  },
});

export async function query<T extends QueryResultRow = QueryResultRow>(
  text: string,
  params?: unknown[]
): Promise<QueryResult<T>> {
  
  const result = await pool.query<T>(text, params as any[]); 
  
  return result;
}

export async function assertDatabaseConnection() {
  try {
    await pool.query("SELECT 1;");
    logger.info("Connected to postgres");
  } catch (err) {
    throw err;
  }
}
