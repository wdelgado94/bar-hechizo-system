const express = require('express');

const mesasRoutes = require('./routes/mesas.routes');

const app = express();

app.use('/mesas', mesasRoutes);

app.listen(3000, () => {
    console.log('Servidor ejecutándose en puerto 3000');
});