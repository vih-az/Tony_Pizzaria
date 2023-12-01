var tony_pizzaria = require('./tony_pizzaria')

const getCategorias = function () {
    let listaCategoriasJSON = {}
    let listaCategoriasARRAY = []

    tony_pizzaria.categorias.categorias.forEach(function (nome) {
        listaCategoriasARRAY.push(nome.nome)
    })

    listaCategoriasJSON.categorias = listaCategoriasARRAY
    console.log(listaCategoriasJSON)
}

const getListaProdutos = function () {
    console.log(tony_pizzaria.produtos)
}

const getDadosProduto = function(nomeCategoria){
    let listaProdutosJSON = {}
    let listaProdutosARRAY = []
    const categoriaNome = nomeCategoria
    
    tony_pizzaria.produtos.pizzas.forEach(function(produtos){
        console.log(produtos.categoria);
    })

    // listaProdutosJSON.pizzas = listaProdutosARRAY
    // console.log(listaProdutosJSON)
}

const getPizzaDados = (nomePizza) => {
    const pizzaNome = nomePizza

    tony_pizzaria.produtos.pizzas.forEach(function(pizza){
        if(pizza.nome.toLocaleLowerCase().includes(pizzaNome)){
            console.log(pizza)
        }
    })
}

const getPizzas = () => {
    let pizzasListaJSON = {}
    let pizzasListaARRAY = []

    tony_pizzaria.produtos.pizzas.forEach(function(pizza){
        let pizzasJson = {}
        pizzasJson.foto = pizza.imagem
        pizzasJson.nome = pizza.nome
        pizzasJson.descricao = pizza.descricao
        pizzasJson.preco = pizza.preco

        pizzasListaARRAY.push(pizzasJson)
    })
    pizzasListaJSON.pizzas = pizzasListaARRAY
    console.log(pizzasListaJSON);
}

const getUsuarios = function(){
    let listaUsuariosJSON = {}
    let listaUsuarioARRAY = []

    tony_pizzaria.usuario.usuarios.forEach(function(usuario){
        let usuarios = {}
        usuarios.perfilFoto = usuario.foto
        usuarios.nome = usuario.nome
        usuarios.email = usuario.email
        usuarios.telefone = usuario.telefone

        listaUsuarioARRAY.push(usuarios)
    })

    listaUsuariosJSON.usuarios = listaUsuarioARRAY
    console.log(listaUsuariosJSON)
}

const getDadosUsuario = function(nomeUsuario){
    const usuarioNome = nomeUsuario
    let status = false

    tony_pizzaria.usuario.usuarios.forEach(function(usuario){
        if(usuario.nome.toLocaleLowerCase().includes(usuarioNome) || usuario.nome.includes(usuarioNome)){
            console.log(usuario)
            status = true
        }
    })
}

getListaProdutos()