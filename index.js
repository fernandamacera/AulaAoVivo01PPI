import express from 'express' 

const host = '0.0.0.0';
const porta = '3000';

const server = express(); //oferencendo ao desenvolvedorm um servidor http de modo expresso


//rechear o servidor com funcionalidades


server.get('/',(requisisao, resposta) => {
    resposta.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Primeiro programa para a internet usando node/js + express</title>
        </head>
        <body>
            <h1>Primeiro programa para a internet usando node/js + express</h1>
            <h2>Olá, bem vindo a pag inicial</h2>
        </body>
        </html>
        
        `)
});
// criar um método que aceita parametros
server.get('/tabuada',(requisisao, resposta) => {
    //tabuada de qual numero ate qual sequencia?
    const numero = requisisao.query.numero;
    const sequencia = requisisao.query.numero;
    let tabuada = "";
    console.log("requisisao tabuada");

    resposta.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body>
            
        </body>
        </html>`)

})
//

server.listen(porta, host, () => {
    console.log(`Servidor executando em http://${host}:${porta}`);
});