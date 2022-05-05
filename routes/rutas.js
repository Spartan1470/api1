import express from 'express'

import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'

export let rutas=express.Router()

let controaldorHabitacion=new ControladorHabitacion()

rutas.post('/api/v1/habitaciones/',controaldorHabitacion.insertar)
rutas.get('/api/v1/habitaciones/', controaldorHabitacion.buscarTodos)
rutas.get('/api/v1/habitaciones/:id/', controaldorHabitacion.buscarPorId)
rutas.put('/api/v1/habitaciones/:id/', controaldorHabitacion.editar)
rutas.delete('/api/v1/habitaciones/:id/', controaldorHabitacion.eliminar)

rutas.post('/api/v1/reservas/', function (req, res) {
    res.send('Hello World')
})
rutas.get('/api/v1/reservas/id/', function (req, res) {
    res.send('Hello World')
})
rutas.put('/api/v1/reservas/id/', function (req, res) {
    res.send('Hello World')
})
rutas.delete('/api/v1/reservas/id/', function (req, res) {
    res.send('Hello World')
})