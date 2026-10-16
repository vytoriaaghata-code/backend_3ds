import express from 'express'
import path from "path"
const dirBase = import.meta.dirname
const app = express()
const porta = 3000
// Usando Middleware (software intermediário) 
app.use(express.static(path.join(dirBase, 'src/publico')))

// Cria as rotas do servidor 
app.get('/', (req, res) => {
    res.sendFile('src/paginas/index.html', {root: import.meta.dirname})
})
// Liberar a porta do meu computador 
app.listen(porta, () => {console.log('Servidro está vivo!')} )