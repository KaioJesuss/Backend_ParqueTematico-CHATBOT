import express from 'express';

const porta = 5005;
const host = '0.0.0.0';
const app = express();


app.listen(porta, host, () =>{
    console.log(`Servidor rodando em http://${host}:${porta}`);

});

