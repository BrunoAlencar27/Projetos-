const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome:{type:String,required:true},
    idade:{type:String,required:true},
    sexo:{type:String,required:true},
    altura:{type:String,required:true},
    peso:{type:String,required:true}
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;