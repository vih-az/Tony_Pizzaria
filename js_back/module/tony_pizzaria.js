var usuario = {
    usuarios: [
        {
            id_usuario: 1,
            nome: 'Celso da Silva',
            email: 'celso@gmail.com',
            senha: 'celso123',
            telefone: '11955555555',
            endereco: [{
                logradouro: 'Rua Perto de Algum Lugar',
                num_casa: '123',
                bairro: 'Jardim Xurupita',
                cid_usuarioade: 'Carapicuíba',
                estado: 'São Paulo'
            }],
            foto: '../img/Home_page/celso.webp'
        },

        {
            id_usuario: 2,
            nome: 'Marcel da Silva',
            email: 'marcel@gmail.com',
            senha: 'marcel123',
            telefone: '11955554444',
            endereco: [{
                logradouro: 'Rua Longe de Algum Lugar',
                num_casa: '456',
                bairro: 'Vila Xurupita',
                cidade: 'Carapicuíba',
                estado: 'São Paulo'
            }],
            foto: '../img/Home_page/celso.webp'
        },
        
        {
            id_usuario: 3,
            nome: 'Vitoria da Silva',
            email: 'vitoria@gmail.com',
            senha: 'vitoria123',
            telefone: '11944445555',
            endereco: [{
                logradouro: 'Rua Perto de Lá',
                num_casa: '789',
                bairro: 'Jardim Maria Helena',
                cidade: 'Carapicuíba',
                estado: 'São Paulo'
            }],
            foto: '../img/Home_page/celso.webp'
        }
    ],
}

var categorias = {
    categorias: [
        {
            id_categoria: 1,
            nome: 'pizzas',
            descricao: 'pizzas',
            imagem: '../img/Home_page/pizza.webp'
        },
        {
            id_categoria: 2,
            nome: 'bebidas',
            descricao: 'bebidas',
            imagem: '../img/Home_page/bebida.webp'
        },
        {
            id_categoria: 3,
            nome: 'sobremesas',
            descricao: 'sobremesas',
            imagem: '../img/Home_page/fruta.webp'
        },
    ]
}

var produtos = {
    pizzas: [
        {
            id_produto: 1,
            imagem: '../img/Home_page/calabresa.webp',
            nome: 'Pizza de calabresa com queijo',
            descricao: 'Pizza de calabresa com queijo',
            preco: 'R$16,00',
            categoria: categorias.categorias[0],
            comentario: [
                {
                    usuario: usuario.usuarios[0],
                    comentario: 'Pizza muito boa! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    data: '15/03/2022',
                    estrelas: '3'
                },
                {
                    usuario: usuario.usuarios[2],
                    comentario: 'Essa pizza é demais, recomendo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    data: '21/05/2022',
                    estrelas: '4'
                }
            ]
        },
        {
            id_produto: 2,
            imagem: '../img/Home_page/peperoni',
            nome: 'pizza de peperoni com queijo',
            descricao: 'Pizza de peperoni com queijo',
            preco: 'R$19,00',
            categoria: categorias.categorias[0],
            comentario: ''
        },
        {
            id_produto: 3,
            imagem: '../img/Home_page/calabreza.webp',
            nome: 'pizza de calabreza com queijo',
            descricao: 'Pizza de calabreza com queijo',
            preco: 'R$16,00',
            categoria: categorias.categorias[0],
            comentario: [
                {
                    usuario: usuario.usuarios[0],
                    comentario: 'Pizza muito boa! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    data: '15/03/2022',
                    estrelas: '3'
                },
                {
                    usuario: usuario.usuarios[2],
                    comentario: 'Essa pizza é demais, recomendo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    data: '21/05/2022',
                    estrelas: '4'
                }
            ]
        },
        {
            id_produto: 4,
            imagem: '../img/Home_page/peperoni_queijo.webp',
            nome: 'pizza de peperoni com queijo e tomate',
            descricao: 'Pizza de peperoni com queijo e tomate',
            preco: 'R$14,00',
            categoria: categorias.categorias[0],
            comentario: [
                {
                    usuario: usuario.usuarios[0],
                    comentario: 'Pizza muito boa! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    data: '15/03/2022',
                    estrelas: '3'
                },
                {
                    usuario: usuario.usuarios[2],
                    comentario: 'Essa pizza é demais, recomendo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    data: '21/05/2022',
                    estrelas: '4'
                }
            ]
        },
        {
            id_produto: 5,
            imagem: '../img/Home_page/brotinho.webp',
            nome: 'pizza brotinho com queijo e tomate',
            descricao: 'Pizza brotinho com queijo e tomate',
            preco: 'R$12,00',
            categoria: categorias.categorias[0],
            comentario: ''
        }
    ],
    bebidas: [
        {
            id_produto: 6,
            nome: 'Coca-cola',
            descricao: 'Coca-cola 2l, embalagem econômica',
            categorias: categorias.categorias[1],
            preco: 'R$14,99',
            imagem: '../img/Home_page/coca.webp',
            comentario: ''
        },
        {
            id_produto: 7,
            nome: 'Coca-cola',
            descricao: 'Coca-cola 3l',
            categorias: categorias.categorias[1],
            preco: 'R$13,99',
            imagem: '../img/Home_page/coca.webp',
            comentario: ''
        },
        {
            id_produto: 8,
            nome: 'Heineken',
            descricao: 'Cerveja Heineken',
            categorias: categorias.categorias[1],
            preco: 'R$17,99',
            imagem: '../img/Home_page/cerveja.webp',
            comentario: ''
        }
    ],
    sobremesas: [
        {
            id_produto: 9,
            nome: 'salada de frutas',
            descricao: 'Salada de frutas',
            categorias: categorias.categorias[2],
            preco: 'R$12,99',
            imagem: '',
            comentario: [
                {
                    usuario: usuario.usuarios[0],
                    comentario: 'Sobremesa muito boa! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    data: '15/03/2022',
                    estrelas: '3'
                },
                {
                    usuario: usuario.usuarios[2],
                    comentario: 'Essa salada de frutas é demais, recomendo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    data: '21/05/2022',
                    estrelas: '4'
                }
            ]
        },
        {
            id_produto: 10,
            nome: 'salada de frutas',
            descricao: 'Salada de frutas',
            categorias: categorias.categorias[2],
            preco: 'R$12,99',
            imagem: '',
            comentario: [
                {
                    usuario: usuario.usuarios[0],
                    comentario: 'Sobremesa muito boa! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    data: '15/03/2022',
                    estrelas: '3'
                },
                {
                    usuario: usuario.usuarios[2],
                    comentario: 'Essa salada de frutas é demais, recomendo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    data: '21/05/2022',
                    estrelas: '4'
                }
            ]
        },
        {
            id_produto: 11,
            nome: 'salada de frutas',
            descricao: 'Salada de frutas',
            categorias: categorias.categorias[2],
            preco: 'R$12,99',
            imagem: '',
            comentario: ''
        }
    ]
}

module.exports = {
    usuario,
    categorias,
    produtos
}