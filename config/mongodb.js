import mongoose from "mongoose";

async function conectarMongo(){
    try {
        await mongoose.conect(process.env.MONGO_URL);
        console.log('[MONGO]) - CONECTADO COM SUCESSO!'); 
    }catch (erro) {
        console.log ('[MINGO] - FALHA NA CONEXÃO',
            erro.message);
    }
    
}

export default conectarMongo;