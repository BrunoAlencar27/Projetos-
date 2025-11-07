exports.register = (req,res) => {
    res.render('login',{
        mensagemErro: req.flash('error'),
        mensagemSucesso: req.flash('sucess')
    });
}

exports.register2 = (req,res) => {
    const {usuario,senha} = req.body;

    if(usuario == 'bruno' && senha == '123'){
        req.flash('sucess','Login realizado com sucesso');
        res.redirect('/dashboard');
    }else{
        req.flash('error','Usuário ou senha inválido');
        res.redirect('/login');
    }

}