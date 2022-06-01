const express = require('express')
const database = require('./db/database')
const produtoRouter = require('./rotas/produto')

// iniciando conexão com banco de dados

try{
    const resultado = database.sync()
    console.log(resultado)
} catch(error){
    console.log(error)
}

const app =express()
const porta = 3000

app.use(express.urlencoded({ extended: false}))
app.use(express.json())

app.listen(porta, () => {
    console.log(`Sevidor iniciado e ouvindo na porta ${porta}`)
})

app.use('/produto',produtoRouter)