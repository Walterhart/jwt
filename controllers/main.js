
const login = async (req,res) =>{
    res.send('Test login')
}

// share secret
const dashboard = async (req,res) =>{
    const randomNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg:`Hello, user`, secret:`Here is your authorize data, your number is ${randomNumber}`})
}

module.exports = { login, dashboard}