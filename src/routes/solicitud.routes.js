import {Router} from "express"
import {crearSolicitud,obtenerSolicitudPorId,obtenerSolicitudes, editarSolicitud, editarEstado, eliminarSolicitud} from "../controllers/solicitud.controller.js"
import {validateSchema} from "../middlewares/middleware.validacion.js"
import {estadoSchema, solicitudSchema} from "../schemas/solicitud.schema.js"

const router = Router()

router.post("/", validateSchema(solicitudSchema),crearSolicitud)
router.get("/", obtenerSolicitudes)
router.get("/:id", obtenerSolicitudPorId)

router.put("/:id", validateSchema(solicitudSchema),editarSolicitud)
router.patch("/:id/estado",validateSchema(estadoSchema), editarEstado)

router.delete("/:id", eliminarSolicitud)


export default router



