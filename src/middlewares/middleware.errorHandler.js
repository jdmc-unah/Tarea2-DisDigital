export const errorHandler = (err, req, res, next) => {
    console.error("Error de Servidor:", err.message);

    return res.status(500).json({
        success: false,
        message: "Ha ocurrido un error interno del servidor."
    });
};
