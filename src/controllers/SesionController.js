import {sign} from 'jsonwebtoken';
import User from '../schemas/User';
import { compare } from 'bcrypt';


class SessionController {
    async create(request, response){
        const {username, password} = request.body;

        //vereficando se o usuario exite no sistema
        const user = await User.findOne({username: username});
        console.log(user)

      {/**
          //caso nao exista
        if(!user){
            return response.status(404).json({ error: "User not found !"});
        }
        //caso exita vamos verifica a senha correta
        const matchPassword = await compare(password, user.password);
        if(matchPassword !== password){

            return response.status(404).json({ error: " Incorrect password is User!"});
        }
        //agora tudo ok senha ok geramos o token
     */}

       const token = sign({}, "a3f7c365677abec9f3c2a927669b60c2", {
            subject: new String(user._id),
                expiresIn: '1d'
        });
        return response.json({
            token,
            user,
        });
    }

}

export default new SessionController;