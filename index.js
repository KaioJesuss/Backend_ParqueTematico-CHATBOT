import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import rotaAtracao from './routes/rotaAtracao.js'
import rotaTecnico from './routes/rotaTecnico.js'
import rotaChamado from './routes/rotaChamado.js'
import rotaDF from './routes/rotaDF.js'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const porta = 3000
const host = '0.0.0.0'
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.use('/atracao', rotaAtracao)
app.use('/tecnico', rotaTecnico)
app.use('/chamado', rotaChamado)
app.use("/webhook", express.raw({type: 'application/json'}))
app.use('/webhook', rotaDF)

app.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`)
})