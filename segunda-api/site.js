let express = require('express')
const { write, link } = require('fs')
let site = express()

site.listen(8080, function(){
    console.log('Servidor ligado')
})

site.get('/', function(requisicao, resposta){ 
    resposta.send('Olá Dona Margarida ♫')
})

site.get('/sobre', function(requisicao, resposta){
    resposta.send(href="sobre.html")    
})