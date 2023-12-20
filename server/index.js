import express from 'express'
import stripe from 'stripe'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors({origin: 'http://localhost:3000'}))

app.post('/api/checkout', (req,res)=>{
    console.log(req.body)
    res.send('received')
})

app.get('/api/checkout', (req,res)=>{
    console.log("get received")
    res.send('received')
})

app.listen(3001, ()=>{
    console.log(`server listening on port http://localhost:3001/api/checkout`)
})
