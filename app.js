
const mainRouter = require('./routes/main')
const express = require('express')
const error404 = require('./midddleware/error404')
const errorHandlerMiddleware = require('./midddleware/errorHandlerMiddleware')

const app = express()

require('express-async-errors')

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1',mainRouter)

app.use(error404)
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 3000
const start= async() =>{
    try {
        app.listen(port, console.log(`connected to ${port}`))
        
    } catch (error) {
        console.log(error)
        
    }
}
start()