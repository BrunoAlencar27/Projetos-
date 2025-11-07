exports.paginaInicial = (req,res)=>{
    res.render('index');
}

exports.trataPost = (req,res) => {
    res.send(`${req.body.cliente}`);
}

exports.list = async ( req,res) => {
        const homes = await HomeModel.find();
        res.send(homes);

}