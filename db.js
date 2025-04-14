const mariadb = require('mariadb');
require('dotenv').config();

let pool;

if (process.env.NODE_ENV === 'production') {
    pool = mariadb.createPool({
        host: process.env.PROD_DB_HOST,
        port: process.env.PROD_DB_PORT,
        user: process.env.PROD_DB_USER,
        password: process.env.PROD_DB_PASSWORD,
        database: process.env.PROD_DB_NAME,
        connectionLimit: parseInt(process.env.PROD_CONNECT_LIMIT || 10)
    });
} else if (process.env.NODE_ENV !== 'test') {
    pool = mariadb.createPool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        connectionLimit: 10
    });
} else {
    console.log("Skipping DB connection in test mode.");
}

async function db_connection(){
    if (!pool) {
        throw new Error("Database connection pool is not initialized.");
    }

    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query('SELECT * FROM test');
        console.log(rows);
    } catch(err){
        throw err;
    } finally {
        if (conn) conn.release();
    }
}

module.exports = { db_connection, pool };
