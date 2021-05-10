//Const express = require('express');
import express from 'express';

import mongoose, {mong} from 'mongoose';

import routes from './routes';

class App {
    constructor(){
        this.server = express();
        this.middleware();
        this.database();
        this.routes();
    }

    middleware(){
        this.server.use(express.json());
    }
    //config do database com mongose
    database(){
        mongoose.connect("mongodb+srv://luannsousa:luan97056799@curso-node-js.rn04n.mongodb.net/Projeto-Dani?retryWrites=true&w=majority",  {useNewUrlParser: true, useUnifiedTopology: true});
    }

    routes(){
        this.server.use(routes);
    }
}

export default new App().server;