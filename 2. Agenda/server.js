require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const routes = require('./routes.js');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const helmet = require('helmet');
const csrf = require('csurf');

// Middlewares globais
const {
  csrfMiddleware,
  checkCsrfError,
} = require('./src/middlewares/globais.js');

/* ----------------------------------------------------
   🔌  CONEXÃO COM DATABASE
----------------------------------------------------- */
mongoose
  .connect(process.env.CONECTIONSTRING)
  .then(() => {
    console.log('Base de dados conectada');
    app.emit('pronto');
  })
  .catch((e) => console.log('Erro na conexão com banco de dados:', e));

/* ----------------------------------------------------
   📥  BODY PARSER
----------------------------------------------------- */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* ----------------------------------------------------
   🔐  CONFIGURAÇÃO DE SESSÃO
----------------------------------------------------- */
const sessionConfig = session({
  secret: '12324424242',
  store: MongoStore.create({
    client: mongoose.connection.getClient(),
    ttl: 60 * 60 * 24 * 7, // 7 dias
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
    httpOnly: true,
  },
});

app.use(sessionConfig);
app.use(flash());

/* ----------------------------------------------------
   🛡  HELMET (Segurança)
----------------------------------------------------- */
app.use(helmet());

/* ----------------------------------------------------
   🔒  CSRF PROTECTION
----------------------------------------------------- */
app.use(csrf());              // cria o token
app.use(csrfMiddleware);      // envia token para views

/* ----------------------------------------------------
   📁  STATIC FILES (CSS, JS, IMG)
----------------------------------------------------- */
app.use(express.static(path.resolve(__dirname, 'public')));

/* ----------------------------------------------------
   🚏  ROTAS DA APLICAÇÃO
----------------------------------------------------- */
app.use(routes);

/* ----------------------------------------------------
   ⚠️  TRATAMENTO DE ERRO DE CSRF
----------------------------------------------------- */
app.use(checkCsrfError);

/* ----------------------------------------------------
   📄  CONFIGURAÇÃO DA VIEW ENGINE
----------------------------------------------------- */
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

/* ----------------------------------------------------
   🔍  ROTA PARA INSPECIONAR SESSÕES
----------------------------------------------------- */
app.get('/sessions', async (req, res) => {
  const sessions = await mongoose.connection.db
    .collection('sessions')
    .find()
    .toArray();

  res.send(sessions);
});

/* ----------------------------------------------------
   🚀  INICIAR SERVIDOR
----------------------------------------------------- */
app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000...');
  });
});
