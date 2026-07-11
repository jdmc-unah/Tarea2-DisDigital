export const requestLogger = (req, res, next) => {
    const fecha = new Date().toLocaleString('es-HN', {
        dateStyle: 'short',
        timeStyle: 'medium'
    });

    console.log(
        `[${fecha}] ${req.method} - ${req.originalUrl} - Body: ${JSON.stringify(req.body)}`
    );

    next();
};