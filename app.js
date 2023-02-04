const express = require('express')
const connectDB = require('./db/connect')
const error404 = require('./midddleware/error404')
const errorHandlerMiddleware = require('./midddleware/errorHandlerMiddleware')

const app = express()

require('express-async-errors')
require('dotenv').config()

app.use(express.json())

app.use(error404)
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 3000
const start= async() =>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`connected to ${port}`))
        
    } catch (error) {
        console.log(error)
        
    }
}
start()