import express from 'express'
import dotenv from 'dotenv'
import solicitudesRouter from "./src/routes/solicitud.routes.js"


const app = express()
dotenv.config()
app.use(express.json())

const PORT = process.env.PORT || 3001

app.get('/', (req,res)=>{
    res.send('API REST Solicitudes de crédito')
})

app.use(solicitudesRouter)

app.listen(PORT, ()=>{
    console.log(`SERVIDOR CORRIENDO EN: http://localhost:${PORT} `);
})

