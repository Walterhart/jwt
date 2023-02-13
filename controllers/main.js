/*
 Goal: check username and password in post(login)
 if exist create new jwt
 if not send back error
 send back to front-end to so it can access it
 only request with jwt can access the dashboard
 */

jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/CustomAPIError')
const login = async (req,res) =>{
    const{username, password} = req.body

    // validation check
    if(!username || !password ){
        throw new CustomAPIError('Please provide email and password', 400)
    }

    // dummy id
    const id = new Date().getDate()

    // create new token
    // send payload, the smaller the better
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: "60d"})
    res.status(200).json({msg: 'user created', token})
}

// share secret
const dashboard = async (req,res) =>{
    const authorizeHeader = req.headers.authorization

    // check for authorize header
    if( !authorizeHeader || !authorizeHeader.startsWith('')){
        throw new CustomAPIError('No token provided', 401)
    }
    
    //split on space
    const token = authorizeHeader.split(' ')[1]

    // valid token check
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const randomNumber = Math.floor(Math.random() * 100)
        res.status(200).json({msg:`Hello, ${decoded.username}`, secret:`Here is your authorize data, your number is ${randomNumber}`})
    } catch (error) {
        throw new CustomAPIError('Not authorized ', 401)
    }
    
}

module.exports = { login, dashboard}
