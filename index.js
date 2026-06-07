import express from 'express'
import dotenv from 'dotenv'
import rotaAtracao from './routes/rotaAtracao.js'
import rotaTecnico from './routes/rotaTecnico.js'
import rotaChamado from './routes/rotaChamado.js'

dotenv.config()

const porta = 3000
const host = '0.0.0.0'
const app = express()

app.use(express.json())

app.use('/atracao', rotaAtracao)
app.use('/tecnico', rotaTecnico)
app.use('/chamado', rotaChamado)

app.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`)
})