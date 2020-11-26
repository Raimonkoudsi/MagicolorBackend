const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/trabajador/getAll', (req, res) => {
    mysqlConnection.query('SELECT * FROM trabajador', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/trabajador/get/:idTrabajador', (req, res) => {
    const { idTrabajador } = req.params;
    
    mysqlConnection.query('SELECT * FROM trabajador WHERE idTrabajador = ?', [idTrabajador], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/trabajador/', (req, res) => {
    //parametros
    const { 
        idTrabajador, 
        nombre, 
        apellidos, 
        sexo, 
        fechaNacimiento,
        cedula,
        direccion,
        telefono,
        email,
        acceso,
        usuario,
        contraseña,
        pregunta,
        respuesta
    } = req.body;

    const query = `
            INSERT INTO trabajador (
                idTrabajador,
                nombre, 
                apellidos, 
                sexo, 
                fechaNacimiento, 
                cedula, 
                direccion, 
                telefono, 
                email, 
                acceso, 
                usuario, 
                contraseña, 
                pregunta, 
                respuesta
            ) VALUES (
                ?,?,?,?,?,?,?,?,?,?,?,?,?,?
            );
	    `;

    mysqlConnection.query(query, [
        idTrabajador, 
        nombre, 
        apellidos, 
        sexo, 
        fechaNacimiento,
        cedula,
        direccion,
        telefono,
        email,
        acceso,
        usuario,
        contraseña,
        pregunta,
        respuesta
    ], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Empelado Guardado'});
        } else {
            console.log(err);
        }
    })
});


router.put('/trabajador/:idTrabajador', (req, res) => {
    //parametros
    const { 
        nombre, 
        apellidos, 
        sexo, 
        fechaNacimiento,
        cedula,
        direccion,
        telefono,
        email,
        acceso,
        usuario,
        contraseña,
        pregunta,
        respuesta
    } = req.body;

    const { idTrabajador } = req.params;

    const query = `
        UPDATE trabajador
        SET
            nombre = ?, 
            apellidos = ?, 
            sexo = ?, 
            fechaNacimiento = ?, 
            cedula = ?, 
            direccion = ?, 
            telefono = ?, 
            email = ?, 
            acceso = ?, 
            usuario = ?, 
            contraseña = ?, 
            pregunta = ?, 
            respuesta = ?
            WHERE idTrabajador = ?;
	`;

    mysqlConnection.query(query, [
        nombre, 
        apellidos, 
        sexo, 
        fechaNacimiento,
        cedula,
        direccion,
        telefono,
        email,
        acceso,
        usuario,
        contraseña,
        pregunta,
        respuesta,
        idTrabajador 
    ], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Empleado Editado'});
        } else {
            console.log(err);
        }
    })
});

router.delete('/trabajador/:idTrabajador', (req, res) => {
    const { idTrabajador } = req.params;
    
    mysqlConnection.query('DELETE FROM trabajador WHERE idTrabajador = ?', [idTrabajador], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Empleado Eliminado'});
        } else {
            console.log(err);
        }
    })
})

module.exports = router;