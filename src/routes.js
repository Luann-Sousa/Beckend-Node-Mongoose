import express, {Router} from 'express';
import UserController from './controllers/UserController';
import SessionController from './controllers/SesionController';

import auth from './middleware/auth';

const routes = Router();

//ROTAS QUE NAO COTEM ATHENCTICAÇAO
routes.post("/users", UserController.create);
routes.post("/session", SessionController.create);


//ROTAS QUE CONTEN ATHENCTICAÇAO DE USUARIO
routes.use(auth);
routes.get("/index/users", UserController.index);


export default routes;