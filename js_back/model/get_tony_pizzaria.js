var tony_pizzaria = require('./tony_pizzaria')

const getCategorias = function(){
    listaCategoriasJSON = {}
    listaCategoriasARRAY = []

    tony_pizzaria.categorias.categorias.forEach(function(nome){
        listaCategoriasARRAY.push(nome.nome)
    })

    listaCategoriasJSON.categorias = listaCategoriasARRAY
    console.log(listaCategoriasJSON)
}

const getDadosProdutos = function(){
    listaProdutosJSON = {}
    listaProdutosARRAY = []

    
}

getCategorias()