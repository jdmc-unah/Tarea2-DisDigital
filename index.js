import express from 'express'
import dotenv from 'dotenv'
import solicitudesRouter from "./src/routes/solicitud.routes.js"
import { requestLogger } from './src/middlewares/middleware.logging.js'
import { errorHandler } from './src/middlewares/middleware.errorHandler.js'


const app = express()
dotenv.config()
app.use(express.json())
app.use(requestLogger);

const PORT = process.env.PORT || 3001

app.get('/', (req,res)=>{
    res.send('API REST Solicitudes de crédito')
})

app.use('/api/solicitudes', solicitudesRouter)

app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`SERVIDOR CORRIENDO EN: http://localhost:${PORT} `);
})

