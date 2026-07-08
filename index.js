import express from 'express'
import dotenv from 'dotenv'



const app = express()
dotenv.config()
app.use(express.json())

const PORT = process.env.PORT || 3001

app.get('/', (req,res)=>{
    res.send('testing')
})


app.listen(PORT, ()=>{
    console.log(`SERVIDOR CORRIENDO EN: http://localhost:${PORT} `);
})

