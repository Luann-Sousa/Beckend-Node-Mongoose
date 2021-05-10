export default async(request, response, next) => {
    //preciso pega informação do headers
    const authHeader = request.headers.authorization;
          authHeader = request.headers.authorization;

    // AGR VAMO VERIFICAR SE O USUARIO POSSUI AUTHETICAÇÃO
    if(!authHeader){
        return response.status(404).json({ error: " User not Authorization! "});
    }
    //Bears:qhdhdbsbdhwdvvdqgvq; / 2
    //AGR SE POSSUI UMA AUTHETICAÇÃO VALIDA
    const [, token ] = authHeader.split(" ");
    

    //AGR SE O TOKEN FOR INVALIDO ELE VAI DA UM ERRO ENT PRECISAMSO TRATAR ESSE ERROR:
    try{
        const decoded = verify(token, "a3f7c365677abec9f3c2a927669b60c2");
        console.log(decoded);
        return next();

    }catch(err){
        return response.status(401).json({error: 'Invalid Jwt Token'});
    }
}