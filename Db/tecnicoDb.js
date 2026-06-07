import obterConexao from "./conexao.js"
import Tecnico from "../Model/Tecnico.js"

export default class TecnicoDB {
    async consultar() {
        const conexao = await obterConexao()
        const sql = 'SELECT * FROM tecnicos ORDER BY RAND() LIMIT 1'
        const [resultados] = await conexao.query(sql)
        
        const r = resultados[0]
        return new Tecnico(r.id, r.nome, r.telefone)
    }
}