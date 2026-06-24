const pool = require('../config/database');

const obtenerMesas = async () => {

    const resultado = await pool.query(
        'SELECT * FROM mesas ORDER BY numero'
    );

    return resultado.rows;
};

module.exports = {
    obtenerMesas
};