import {Router} from "express"
import {crearSolicitud,obtenerSolicitudPorId,obtenerSolicitudes} from "../controllers/solicitud.controller"
import {validateSchema} from "../middlewares/middleware.validacion.js"
import {solicitudSchema} from "../schemas/solicitud.schema.js"

const router = Router()

router.post("/api/solicitudes", validateSchema(solicitudSchema),crearSolicitud)
router.get("/api/solicitudes", obtenerSolicitudes)
router.get("/api/solicitudes/:id", obtenerSolicitudPorId)

export default router



