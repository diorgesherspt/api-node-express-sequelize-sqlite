// Importa dependências externas
const express = require('express')

// Importa o controlador de produto
const produtoController = require('../controladores/produto')

// Criando gerenciados de rotas
const router = express.Router()

// Obter
router.get('/:id',produtoController.detalhar)

// Listar
router.get('/',produtoController.listar)

// Criar
router.post('/',produtoController.criar)

// Alterar
router.put('/', produtoController.alterar)

// Excluir
router.delete('/:id',produtoController.excluir)

module.exports = router