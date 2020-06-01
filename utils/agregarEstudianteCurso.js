const db = require('../models/database/db');



db.EstudianteCursos.create({
    clave: 1234,
    matricula: 11336

}).then(() => {
    console.log('Estudiante creado');
}).catch(err => {
    console.log(err);
}).then(() => {
    console.log('Cerrando conexión');
    db.sequelize;
});