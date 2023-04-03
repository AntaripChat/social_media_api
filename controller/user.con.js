const User = require('../model/user.model');

exports.adduser = async(req,res) =>{
    const obj = req.body;
    try{
        const user = await User.create(obj);
        res.send(obj);
    }catch(err){
        res.send('some error');
        console.log(err);
    }
};

exports.alluser = async ( req,res) =>{
    const user = await User.find();
    res.send(user);
};