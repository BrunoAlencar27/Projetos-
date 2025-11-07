require('core-js/es/symbol')
const UserModel = require('../models/UserModel.js');


exports.home = (req,res) => {
    res.render('index');
    
}

exports.cadastro = (req,res) => {
    console.log(req.session.usuário);
    res.render('create');
}

exports.create = async(req,res) => {
    try{
        const {nome,idade,sexo,altura,peso} = req.body;
        const user = new UserModel({nome,idade,sexo,altura,peso});
        await user.save();
        res.send('Usário criado com sucesso');
    }catch(err){
        res.status(500).send({erro:err.menssage});
    }
}


exports.list = async (req,res) => {
    try{
        const users = await UserModel.find();
        res.render('users',{users});
    }catch(err){
        res.status(500).send({erro:err.menssage});
    }

}

exports.formUpdate = async (req,res) => {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    res.render('update',{user});
}

exports.update = async(req,res) => {
    try{
        const id = req.params.id;
        const {nome,idade,sexo,altura,peso} = req.body;
        const upDateUser = await UserModel.findByIdAndUpdate(
            id,
            {nome,idade,sexo,altura,peso},
            {new:true, runValidator:true}
        );

        if(!upDateUser){
            return res.status(404).send('Usário não cadastrado ainda');
        }
        res.send(upDateUser);
    }catch(err){
        res.status(404).send({erro:err.message});

    }
}