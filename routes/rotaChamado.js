import { Router } from "express"
import ChamadoCtrl from "../Controller/ChamadoCtrl.js"

const rotaChamado = Router()
const chamadoCtrl = new ChamadoCtrl()

rotaChamado.post("/", chamadoCtrl.gravar)
rotaChamado.get("/:protocolo", chamadoCtrl.consultar)

export default rotaChamado