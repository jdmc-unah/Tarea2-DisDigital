import * as z from "zod"

export const solicitudSchema = z.object({
    dniCliente: z.string().min(13,"El DNI debe contener 13 caracteres.").max(15,"El DNI debe contener máximo 15 caracteres."),
    nombreCompleto: z.string().min(5,"El nombre debe tener al menos 5 caracteres.").max(100,"El nombre debe contener máximo 100 caracteres."),
    montoSolicitado: z.number().min(1000,"El monto mínimo es de L1000.").max(100000,"El monto máximo es de L10,0000."),
    plazoMeses: z.number().int("El plazo debe ser un número entero.").min(1,"El plazo mínimo es de 1 mes.").max(60,"El plazo máximo es de 60 meses."),
    tasaInteres: z.number().optional()
})


export const estadoSchema = z.object({
    estado: z.enum(["APROBADA", "RECHAZADA"])
});