const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bar_hechizo_db',
    password: 'Wadd0594*+',
    port: 5432,
});

module.exports = pool;