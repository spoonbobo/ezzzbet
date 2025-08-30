import { Pool } from 'pg';

// Database configuration
const dbConfig = {
  user: process.env.PGUSER || 'ezzzbet_user',
  password: process.env.PGPASSWORD || 'ezzzbet_password',
  host: process.env.PGHOST || 'localhost',
  port: parseInt(process.env.PGPORT || '5432'),
  database: process.env.PGDATABASE || 'ezzzbet_db',
};

// Create connection pool
export const pool = new Pool(dbConfig);

// Test connection function
export async function testConnection() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    client.release();
    console.log('Database connected successfully:', result.rows[0]);
    return true;
  } catch (error) {
    console.error('Database connection error:', error);
    return false;
  }
}

// Query helper function
export async function query(text: string, params?: unknown[]) {
  try {
    const result = await pool.query(text, params);
    return result;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}
