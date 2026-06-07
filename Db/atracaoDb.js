import obterConexao from "./conexao.js"
import Atracao from "../Model/Atracao.js"

export default class AtracaoDB {
    async consultar(nome) {
        const conexao = await obterConexao()
        const sql = 'SELECT * FROM atracoes WHERE nome = ?'
        const [resultados] = await conexao.query(sql, [nome])
        
        if (resultados.length === 0) return null
        
        const r = resultados[0]
        return new Atracao(r.id, r.nome, r.prazo_manutencao)
    }
}