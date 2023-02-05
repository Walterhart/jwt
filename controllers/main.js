/*
 Goal: check username and password in post(login)
 if exist create new jwt
 if not send back error
 send back to front-end to so it can access it
 only request with jwt can access the dashboard
 */

 const CustomAPIError = request('../errors/CustomAPIError')
const login = async (req,res) =>{
    const{username, password} = req.body

    // validation check
    if(!username || !password ){
        throw new CustomAPIError('Please provide email and password', 400)
    }
    
    console.log(username, password)
    res.send('Test login')
}

// share secret
const dashboard = async (req,res) =>{
    const randomNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg:`Hello, user`, secret:`Here is your authorize data, your number is ${randomNumber}`})
}

module.exports = { login, dashboard}