const express = require('express')
const cors = require('cors')
const bodyParse = require('body-parser')
const controleFuncoes = require('./module/get_tony_pizzaria')

const app = express()

app.use((resquest,response,next)=>{
    response.header('Acces-Control-Allow-Origin', '*')

    response.header('Acces-Control-Allow-Methods', 'GET')

    app.use(cors())

    next()
})

app.get('/pizzaria/categorias', cors(), async function(request,response,next){
    let categorias = controleFuncoes.getCategorias()

    response.json(categorias)
    response.status(200)
})

app.get('/pizzaria/usuarios', cors(), async function(request,response,next){
    let usuarios = controleFuncoes.getUsuarios()

    if(usuarios){
        response.json(usuarios)
        response.status(200)
    }else{
        response.json({erro: "Não foi possível encontrar um ou mais itens"})
        response.status(404)
    }
})

app.get('/pizzaria/usuario/:nomeUsuario', cors(), async function(resquest,response,next){
    let usuarioNome = resquest.params.nomeUsuario
    let usuario = controleFuncoes.getDadosUsuario(usuarioNome)

    if(usuario){
        response.json(usuario)
        response.status(200)
    }else{
        response.json({erro: "Não foi possível encontrar um ou mais itens"})
        response.status(404)
    }
})

app.listen(8080, function(){
    console.log('Tá funcionando!!');
})