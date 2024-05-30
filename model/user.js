
const { default: mongoose } = require('mongoose');
var usermodel = require('mongoose');

usermodel.connect('mongodb://127.0.0.1:27017/Collection')
  .then(() => console.log('Connected!'));

var userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    creatAt:{
        type:Date,
        default:Date.now
    },
    point:{
        type:Number
    }
})
module.exports = mongoose.model('UserData',userSchema);
