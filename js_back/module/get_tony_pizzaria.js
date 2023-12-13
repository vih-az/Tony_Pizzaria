var tony_pizzaria = require('./tony_pizzaria')

const getCategorias = function () {
    let listaCategoriasJSON = {}
    let listaCategoriasARRAY = []

    tony_pizzaria.categorias.categorias.forEach(function (nome) {
        listaCategoriasARRAY.push(nome.nome)
    })

    listaCategoriasJSON.categorias = listaCategoriasARRAY
    return listaCategoriasJSON
}

// const getListaProdutos = function () {
//     let listaProdutosJSON = {}
//     let listaProdutosARRAY = []

//     tony_pizzaria.produtos.produtos.forEach(function(produto){
//         let listaProdutos = {
//             id_produto: produto.id_produto,
//             imagem: produto.nome,
//             nome: produto.nome,
//             descricao: produto.descricao,
//             categoria: produto.categorias.nome,
//             preco: produto.preco,
//         }

//         listaProdutosARRAY.push(listaProdutos)
//     })
//     listaProdutosJSON.produtos = listaProdutosARRAY
//     console.log(listaProdutosJSON);
// }


const getProdutoPorCategoria = (categoriaNome) => {
    let nomeCategoria = categoriaNome

    tony_pizzaria.produtos.produtos.forEach(function(produto){
        
    })
}

const getPizzas = () => {
    let pizzasListaJSON = {}
    let pizzasListaARRAY = []

    tony_pizzaria.produtos.pizzas.forEach(function(pizza){
        let pizzasJson = {}
        pizzasJson.id = pizza.id_produto
        pizzasJson.foto = pizza.imagem
        pizzasJson.nome = pizza.nome
        pizzasJson.descricao = pizza.descricao
        pizzasJson.preco = pizza.preco
        pizzasJson.categoria = pizza.categoria.nome

        pizzasListaARRAY.push(pizzasJson)
    })
    pizzasListaJSON.pizzas = pizzasListaARRAY
    console.log(pizzasListaJSON);
}

const getBebidas = () => {
    let bebidasListaJSON = {}
    let bebidasListaARRAY = []

    tony_pizzaria.produtos.bebidas.forEach(function(bebida){
        let bebidasJson = {}
        bebidasJson.id = bebida.id_produto
        bebidasJson.foto = bebida.imagem
        bebidasJson.nome = bebida.nome
        bebidasJson.descricao = bebida.descricao
        bebidasJson.preco = bebida.preco
        bebidasJson.categoria = bebida.categorias.nome

        bebidasListaARRAY.push(bebidasJson)
    })
    bebidasListaJSON.bebidas = bebidasListaARRAY
    console.log(bebidasListaJSON);
}

const getSobremesas = () => {
    let sobremesasListaJSON = {}
    let sobremesasListaARRAY = []

    tony_pizzaria.produtos.sobremesas.forEach(function(sobremesa){
        let sobremesasJson = {}
        sobremesasJson.id = sobremesa.id_produto
        sobremesasJson.foto = sobremesa.imagem
        sobremesasJson.nome = sobremesa.nome
        sobremesasJson.descricao = sobremesa.descricao
        sobremesasJson.preco = sobremesa.preco
        sobremesasJson.categoria = sobremesa.categorias.nome

        sobremesasListaARRAY.push(sobremesasJson)
    })
    sobremesasListaJSON.sobremesas = sobremesasListaARRAY
    console.log(sobremesasListaJSON);
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
    return listaUsuariosJSON
}

const getDadosUsuario = function(nomeUsuario){
    const usuarioNome = nomeUsuario
    // let status = false

    tony_pizzaria.usuario.usuarios.forEach(function(usuario){
        if(usuario.nome.toLocaleLowerCase().includes(usuarioNome) || usuario.nome.includes(usuarioNome)){
            // status = true
            return usuario
        }
    })
}

module.exports={
    getCategorias,
    getPizzas,
    getBebidas,
    getSobremesas,
    getUsuarios,
    getDadosUsuario
}

