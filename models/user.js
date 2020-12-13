const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
firstname: String,
lastname: String,
email:{type: String, unique:true},
Password: String
})

userSchema .set('toJSON', {
    transform:(doc, user) => {
        user.id = user._id.toString()
        delete user._id
        delete user._v
        delete user.password


    }
})


const User = mongoose.model("User", UserSchema)

module.exports = User







