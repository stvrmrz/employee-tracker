const { Client } = require('pg');

const client = new Client({
    user: 'postgres',       // Your PostgreSQL username
    host: 'localhost',      // Database host
    database: 'employee_management',  // Your database name
    password: 'Steve182189', // Your PostgreSQL password
    port: 5432,             // Default PostgreSQL port
});

client.connect();

module.exports = client;
