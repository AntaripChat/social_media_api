const mongo = require('mongoose');

const userSchema = new mongo.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    }
});

module.exports = mongo.model('user',userSchema);