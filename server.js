//require('dotenv').config();
import 'dotenv/config';
//const express = require('express');
import express from 'express';

//const cors = require('cors');
import cors from 'cors';

//const conectarMongo = require('.config/mongodb');
import conectarMongo from './config/mongodb.js';
//const conectarRedis = require('.config/redis');
import conectarRedis from './config/redis.js';

const app =  express();
app.use(cors());
app.use(express.json());

async function iniciarBancos(){
await conectarMongo()
    //await conectar Redi();

}
iniciarBancos();

//Rotas de teste 
app.get('/status', (req , res)=>{
    res.json({status:"API DA LOJA RODANDO..."})

});

const PORTA = process.env.PORTA_API || 3000;
app.listen(PORTA,()=>{
    console.log(`Servidor rodando na porta: ${PORTA}`);
});