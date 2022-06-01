// Importando dependências internas
const Produto = require('../modelos/produto')
const produtoModelo = require('../modelos/produto')

// Controller para criar produto
const criar = async (req,res) => {
    //Obtendo dados vindos do formulário ou via REST POST
    const { nome, preco, descricao } = req.body

    const resultadoCreate = await produtoModelo.create({
        nome,
        preco,
        descricao
    })
    console.log('Criou Produto >>>', resultadoCreate)
    res.json({ status: true})
}

// Controller para alterar produto
const alterar = async (req,res) => {
    // Obtendo dados vindos do formulário ou via REST POST
    const { nome, preco , descricao} =req.body

    // Buscar o produto no banco para alteração
    const produto = await Produto.findByPk(1)
    produto.nome = nome
    produto.preco = preco
    produto.descricao = descricao

    const resultadoCreate = await produtoModelo.create({
        nome,
        preco,
        descricao
    })
    console.log('Alterou Produto >>',resultadoCreate)
    res.json({ status : true })
}
// Controller para excluir produto
const excluir = async (req, res) => {
    // Obtendo id para do produto para ser excluido
    const { id } = req.params

    // Buscar o produto no banco para excluir
    const produto = await produtoModelo.findByPk(1)
    produto.destroy()
    console.log('Excluindo Produto >>>', {id})
    res.json({ status: true })
}

// controller para detalhar/buscar um produto
const detalhar = async (req, res) => {
    // Obtendo id para do produto para ser buscado
    const { id } = req.params

    // Buscar o produto no banco
    const produto = await produtoModelo.findByPk(1)
    console.log('Obteve o Produto >>>', {id})
    res.json({ produto})
}

// Controler para listar um produto
const listar = async (req, res) => {
    // Listando todos os produtos
    const produtos = await produtoModelo.findAll()
    console.log('Listando todos os Produtos >>>', { produtos})
    res.json({produtos})
}

module.exports = { criar, alterar, excluir, detalhar, listar }