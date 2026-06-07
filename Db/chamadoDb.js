import obterConexao from "./conexao.js"
import Chamado from "../Model/Chamado.js"

export default class ChamadoDB {
    async gravar(chamado) {
        const conexao = await obterConexao()
        const sql = `INSERT INTO chamados 
            (numero_protocolo, atracao_id, cliente_nome, cliente_cpf,
             cliente_telefone, localizacao, tecnico_id, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
        
        const [resultado] = await conexao.query(sql, [
            chamado.numero_protocolo,
            chamado.atracao_id,
            chamado.cliente_nome,
            chamado.cliente_cpf,
            chamado.cliente_telefone,
            chamado.localizacao,
            chamado.tecnico_id,
            chamado.status
        ])
        return resultado
    }

    async consultar(numero_protocolo) {
        const conexao = await obterConexao()
        const sql = `SELECT c.*, a.nome as atracao_nome, 
                     a.prazo_manutencao, t.nome as tecnico_nome
                     FROM chamados c
                     JOIN atracoes a ON c.atracao_id = a.id
                     JOIN tecnicos t ON c.tecnico_id = t.id
                     WHERE c.numero_protocolo = ?`
        
        const [resultados] = await conexao.query(sql, [numero_protocolo])
        if (resultados.length === 0) return null
        
        const r = resultados[0]
        return new Chamado(
            r.id, r.numero_protocolo, r.atracao_id,
            r.cliente_nome, r.cliente_cpf, r.cliente_telefone,
            r.localizacao, r.tecnico_id, r.status, r.criado_em
        )
    }
}