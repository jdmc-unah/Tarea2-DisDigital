
# Tarea
Desarrollar una API REST con Node.js y Express para gestionar solicitudes de crédito. La API debe persistir los datos en memoria (usando un arreglo), implementar validaciones estrictas de datos utilizando **Zod**, y utilizar **Middlewares** personalizados para el registro de peticiones y manejo de errores.

## Escenario de Negocio
Una cooperativa necesita un sistema para recibir y evaluar solicitudes de préstamos rápidos. Cada solicitud debe pasar por un proceso de validación antes de ser registrada y evaluada.

## 1. Estructura de Datos Requerida
El arreglo en memoria debe almacenar objetos con la siguiente estructura:

` ` `javascript
{
  id: "uuid-v4",
  dniCliente: "0501-2000-12345",
  nombreCompleto: "Juan Perez",
  montoSolicitado: 15000,
  plazoMeses: 12,
  tasaInteres: 3.5,
  estado: "PENDIENTE", // Puede ser: PENDIENTE, APROBADA, RECHAZADA
  fechaCreacion: "2026-07-05T10:00:00Z"
}
` ` `

## 2. Reglas de Validación (Implementar con Zod)
Los estudiantes deben crear un esquema de Zod para validar el `body` en las peticiones de creación y actualización basándose en estas reglas:
*   **dniCliente:** String, formato válido de 13 a 15 caracteres (puede incluir guiones).
*   **nombreCompleto:** String, mínimo 5 caracteres, máximo 100.
*   **montoSolicitado:** Número, obligatorio, mayor o igual a `1000` y menor o igual a `100000`.
*   **plazoMeses:** Número entero, obligatorio, mínimo `1` y máximo `60`.
*   **tasaInteres:** Número, opcional (si no se envía, por defecto es `5.0`).
*   **estado:** No debe permitirse enviar este campo al crear; el sistema debe forzarlo siempre a `"PENDIENTE"` en el `POST`.

## 3. Endpoints a Desarrollar

| Método | Ruta | Descripción |
| :--- | :--- | :--- |
| `POST` | `/api/solicitudes` | Crea una nueva solicitud. Debe pasar por el middleware de validación de Zod. |
| `GET` | `/api/solicitudes` | Devuelve todas las solicitudes. Debe aceptar un *Query Param* opcional `?estado=APROBADA` para filtrar resultados. |
| `GET` | `/api/solicitudes/:id` | Devuelve una solicitud específica. Si no existe, retorna código `404`. |
| `PUT` | `/api/solicitudes/:id` | Actualiza los datos de la solicitud (monto, plazo, nombre). Solo permitido si el estado es `PENDIENTE`. |
| `PATCH` | `/api/solicitudes/:id/estado` | Endpoint específico para cambiar el estado a `APROBADA` o `RECHAZADA`. Requiere validación Zod propia. |
| `DELETE` | `/api/solicitudes/:id` | Elimina la solicitud del arreglo. |

## 4. Middlewares Requeridos

1.  **Middleware de Logging (Global):**
    Un middleware que imprima en la consola de la terminal cada petición entrante con el formato:
    `[FECHA/HORA] METODO - /ruta - Body: {...}`
2.  **Middleware de Validación (Específico):**
    Una función de orden superior (Higher-Order Function) que reciba un esquema de Zod por parámetro e intercepte la petición. Si los datos son inválidos, debe retornar un código `400 Bad Request` con el detalle de los errores generados por Zod, deteniendo la ejecución antes de llegar al controlador.
3.  **Middleware de Manejo de Errores (Global):**
    Capturar cualquier error no controlado en la aplicación y devolver un JSON genérico con código `500 Internal Server Error`.

## 5. Entrega:

Pueden trabajar en parejas, Debe enviar un repositorio publico en el que se vean los commits de participación (en caso de trabajar en equipo), en el READEME del proyecto deben incluir los participantes, si trabaja en parejas y no hay comits de ambos, no se tomará en consideración.