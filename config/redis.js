import {createClient} from 'redis';

const redisCliente = createClient({
    url:process.env.REDIS_URL
});

redisCliente.on('error' , (err) => console.error('[REDIS} - FALHA NA CONEXÃO', err));
redisCliente.on('connect', () => console.log('[REDIS] - CONECTADO COM SUCESSO'));

redisCliente.connect().catch(console.error);

export default redisCliente; 