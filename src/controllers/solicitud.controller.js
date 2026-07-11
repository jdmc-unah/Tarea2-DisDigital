import SolicitudModel from "../models/solicitud.model.js"
import {jsonResponse} from "../helpers/jsonResponse.js"

export const crearSolicitud = async (req,res) => {
    const payload = req.validatedBody

    const nueva = await SolicitudModel.create(payload)

    res.status(201).json(jsonResponse({
        status: 201,
        message: "La solicitud se creo correctamente.",
        data: nueva
    }))
}

export const obtenerSolicitudes = async (req,res) => {
    const {estado} = req.query

    const lista = await SolicitudModel.getAll(estado)
    res.json(jsonResponse({
        message: "Listado de solicitudes.",
        data: lista
    }))
}

export const obtenerSolicitudPorId = async (req, res) => {
    const {id} = req.params

    const solicitud = await SolicitudModel.getById(id)

    if(!solicitud){
        return res.status(404).json(jsonResponse({
            status: 404,
            message: "La solicitud no a sido encontrada.",
            data:null
        }))
    }

    res.json(jsonResponse({
        message: "Datos de la solicitud.",
        data: solicitud
    }))
}