import AtracaoDB from "../DB/AtracaoDB.js"

export default class AtracaoCtrl {
    async consultar(req, resp) {
        try {
            const atracaoDB = new AtracaoDB()
            const nome = req.params.nome
            const atracao = await atracaoDB.consultar(nome)
            
            if (atracao) {
                resp.json(atracao)
            } else {
                resp.status(404).json({ mensagem: "Atração não encontrada" })
            }
        } catch (erro) {
            resp.status(500).json({ erro: erro.message })
        }
    }
}