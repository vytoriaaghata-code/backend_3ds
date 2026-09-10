import express from 'express'

const app = express()
const porta = 3000

// Cria as rotas do servidor 
app.get('/', (req, res) => {
    res.sendFile('./paginas/index.html', {root: import.meta.dirname})
})


// Liberar a porta do meu computador 
app.listen(porta, () => {console.log('Servidro está vivo!')} )