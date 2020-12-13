//what are we going to do?
//1.get user input
//2. save the data
const User = require('../models/user')
const  signup = async (request, response) => {
    
    const {firstName, lastName, email, password}= request.body;
    const user = User({firstName, lastName, email, password})


    try {
        
    
    const newUser = await user.save()
    response.status(200).send({
        message: 'User Created Successfully'
    })

} catch (exception) {
    response.status(500).send({error: "Email Already used"})
}
}
modules.exports = signup