const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type: String,
        required : true,
        unique : true,
        validate : {
            validator: function(v) {
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(v);
              },
            message: props => `${props.value} is not a valid email`
        }
    },
    password : {
        type : String,
        required: true,
        min : 6
    },
    quotes: { type: Schema.Types.ObjectId, ref: 'Quote' }
})

const User = mongoose.model('User',userSchema)

module.exports = User