import TecnicoDB from "../DB/TecnicoDB.js"

export default class TecnicoCtrl {
    async consultar(req, resp) {
        try {
            const tecnicoDB = new TecnicoDB()
            const tecnico = await tecnicoDB.consultar()
            resp.json(tecnico)
        } catch (erro) {
            resp.status(500).json({ erro: erro.message })
        }
    }
}