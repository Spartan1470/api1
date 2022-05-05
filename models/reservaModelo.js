import mongoose from "mongoose"

const Schema=mongoose.Schema
const Reserva=new Schema({
    fechaIn:{
        type:Date,
        required:true
    },
    fechaSalida:{
        type:Date,
        required:true
    },
    nombreCliente:{
        type:String,
        required:true
    },
    cedulaCliente:{
        type:Number,
        required:true
    },
    costo:{
        type:Number,
        required:true
    },
})

export const modeloHabitacion=mongoose.model('reserva',Reserva)