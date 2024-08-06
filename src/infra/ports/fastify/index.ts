import 'dotenv/config';
import fastify from 'fastify';

const server = fastify({ logger:true });

const app = async () => {
    try {
        server.listen({
            host:'0.0.0.0',
            port: process.env.PORT_SERVER ? Number(process.env.PORT_SERVER) : 5001,
        });
        console.log(`Server fastify running in port ${5001}`);
    } catch(error){
        console.log(`Server error fastify `, error);
    }
};

app();