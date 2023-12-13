create database db_tony_pizzaria;

use db_tony_pizzaria;

create table produtos
(
	id_produtos int primary key not null,
    nome varchar(50),
    descricao varchar(100),
    preco int,
    id_categoria int,
    id_avaliacao int,
    
    foreign key(id_categoria) references categorias(categoria_id),
    foreign key(id_avaliacao) references avaliacao(avaliacao_id)
);

create table categorias
(
	categoria_id int primary key not null,
    nome varchar(15)
);

create table avaliacao
(
	avaliacao_id int primary key not null,
    avaliacao varchar(100),
    data_avaliacao date,
    cliente_id int,
    
    foreign key(cliente_id) references clientes(id_cliente)
);

create table clientes
(
	id_cliente int primary key not null,
    nome_cliente varchar(50),
    email_cliente varchar(25),
    senha_cliente varchar(8),
    telefone bigint,
    endereco_id int,
    
    foreign key(endereco_id) references endereco(id_endereco)
);

create table endereco
(
	id_endereco int primary key not null,
    logradouro varchar(50),
    num_casa varchar(8),
    bairro varchar(10),
    cidade varchar(10),
    estado  varchar(10)
);

CREATE TABLE imagens (
    id_imagem INT PRIMARY KEY NOT NULL,
    url VARCHAR(500),
    produtos_id INT,
    FOREIGN KEY (produtos_id)
        REFERENCES produtos (id_produtos)
);

create table tipo_pagamento
(
	id_pagamento int primary key not null,
    tipo varchar(20)
);

create table compras
(
	id_compras int primary key not null,
    cliente_id int,
    produtos_id int,
    pagamento_id int
);