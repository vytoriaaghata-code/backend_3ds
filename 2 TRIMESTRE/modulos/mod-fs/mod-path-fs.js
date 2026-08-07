
const fs = require('fs')
const path = require('node:path')



try {
    // resultdo    ler arquivo   caminho   pasta   arquivo 
    // const arquivo = fs. readFileSync(path.join(__dirname, "/README.MD"), "utf-8"
    const arquivo = fs.readFileSync(path.resolve(__dirname, "README.MD"),"utf-8")
    console.log(arquivo)
} catch (error) {
    console.error('Deu ruim...')
    console.log(error.message)
}