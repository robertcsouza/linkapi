import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
require('dotenv/config');
class App{

    constructor(){
        this.server = express();
        //mudar para o padrao ecs6
        this.app = require('http').createServer(this.server)
    
        mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });

        this.routes();

    }

    routes(){

        this.server.use(routes);

    }

}


export default new App();