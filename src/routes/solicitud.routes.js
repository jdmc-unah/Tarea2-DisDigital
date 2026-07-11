import {Router} from "express"
import {crearSolicitud,obtenerSolicitudPorId,obtenerSolicitudes} from "../controllers/solicitud.controller.js"
import {validateSchema} from "../middlewares/middleware.validacion.js"
import {solicitudSchema} from "../schemas/solicitud.schema.js"

const router = Router()

router.post("/", validateSchema(solicitudSchema),crearSolicitud)
router.get("/", obtenerSolicitudes)
router.get("/:id", obtenerSolicitudPorId)

export default router



