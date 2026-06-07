import { Router } from "express"
import AtracaoCtrl from "../Controller/AtracaoCtrl.js"

const rotaAtracao = Router()
const atracaoCtrl = new AtracaoCtrl()

rotaAtracao.get("/:nome", atracaoCtrl.consultar)

export default rotaAtracao