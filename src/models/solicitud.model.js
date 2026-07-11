import solicitudes from "../mock/solicitud.json" with { type: "json" }
import { randomUUID } from "crypto"

export default class SolicitudModel {
    static getAll = async (estado) => {
        if (estado) {
            return solicitudes.filter(s => s.estado === estado)
        }
        return solicitudes
    }

    static getById = async (id) => {
        return solicitudes.find(s => s.id === id)
    }

    static create = async (payload) => {      

        const nuevaSolicitud = {
            id: randomUUID(),
            dniCliente: payload.dniCliente,
            nombreCompleto: payload.nombreCompleto,
            montoSolicitado: payload.montoSolicitado,
            plazoMeses: payload.plazoMeses,
            tasaInteres: payload.tasaInteres ?? 5.0,
            estado: "PENDIENTE",
            fechaCreacion: new Date().toISOString()
        }
        
        solicitudes.push(nuevaSolicitud)
        return nuevaSolicitud
    }


    static update = async (payload, id) =>{
        const payloadIndex = solicitudes.findIndex(s => s.id === id)
        solicitudes[payloadIndex].montoSolicitado = payload.montoSolicitado
        solicitudes[payloadIndex].plazoMeses = payload.plazoMeses
        solicitudes[payloadIndex].nombreCompleto = payload.nombreCompleto

        return solicitudes[payloadIndex]
    }




}
