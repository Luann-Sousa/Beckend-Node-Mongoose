//trazendo nosso Schema
import User from '../schemas/User';
import {hash} from 'bcrypt';


class UserController {

    async create(request, response){
        const {name, email , username, password, phone} = request.body;

        const passwordCrypt = await hash('password', 8);
        
        const users = await User.create({
            name,
            email,
            username,
            password: passwordCrypt,
            phone,
        });

        response.json({users})
    }

    async index(request, response){
        const users = await User.find();
        response.json({users})
    }
}


export default new UserController();