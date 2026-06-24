const mesasModel = require('../models/mesas.model');

const obtenerMesas = async (req, res) => {

    try {

        const mesas = await mesasModel.obtenerMesas();

        res.json(mesas);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensaje: 'Error al consultar mesas'
        });

    }

};

module.exports = {
    obtenerMesas
};