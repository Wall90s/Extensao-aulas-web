let express = require('express')
let app = express()

app.listen(8080, function(){
    console.log('Servidor ON - Porta 8080')
}) // Porta

app.get('/', function(requisicao, resposta){
    resposta.send('{"produto": "bolu de murangu"}')
})

let listaPratos = ['pudim', 'bolo', 'mousse']

app.get('/menu', function(requisicao, resposta){
    resposta.send(`{"menu": ${listaPratos}}`)
})