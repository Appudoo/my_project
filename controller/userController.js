const usermode = require('../model/user');

exports.insert = async (req,res)=>{
    var data = await usermode.create(req.body);

    res.status(200).json({
        data
    });
}
exports.Selct = async(req,res)=>{
    var data = await usermode.find();
    res.status(200).json({
        data
    })
}