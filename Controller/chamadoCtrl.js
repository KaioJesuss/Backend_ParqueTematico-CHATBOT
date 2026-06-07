import ChamadoDB from "../DB/ChamadoDB.js"
import Chamado from "../Model/Chamado.js"

export default class ChamadoCtrl {
    async gravar(req, resp) {
        try {
            const { numero_protocolo, atracao_id, cliente_nome,
                    cliente_cpf, cliente_telefone, localizacao,
                    tecnico_id, status } = req.body
            
            const chamado = new Chamado(
                0, numero_protocolo, atracao_id, cliente_nome,
                cliente_cpf, cliente_telefone, localizacao,
                tecnico_id, status, null
            )
            
            const chamadoDB = new ChamadoDB()
            await chamadoDB.gravar(chamado)
            resp.status(201).json({ mensagem: "Chamado registrado com sucesso!" })
        } catch (erro) {
            resp.status(500).json({ erro: erro.message })
        }
    }

    async consultar(req, resp) {
        try {
            const chamadoDB = new ChamadoDB()
            const protocolo = req.params.protocolo
            const chamado = await chamadoDB.consultar(protocolo)
            
            if (chamado) {
                resp.json(chamado)
            } else {
                resp.status(404).json({ mensagem: "Chamado não encontrado" })
            }
        } catch (erro) {
            resp.status(500).json({ erro: erro.message })
        }
    }
}