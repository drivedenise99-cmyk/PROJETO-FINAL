require('dotenv').config();
const express = require('express');
const cors = require('cors');

const conectarMongo = require('.config/mongodb');
const conectarRedis = require('.config/redis');

const app =  express();
app.use(cors());
app.use(express.jason());

async function iniciarBancos(){
    //await conectar Redi();

}
iniciarBancos();

//Rotas de teste 
app.get('/status', (req , res)=>{
    res.json({status:"API DA LOJA RODANDO..."})

});

const PORTA = process.env.PORTA_API  3000