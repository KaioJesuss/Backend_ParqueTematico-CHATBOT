import { Router } from "express"
import TecnicoCtrl from "../Controller/TecnicoCtrl.js"

const rotaTecnico = Router()
const tecnicoCtrl = new TecnicoCtrl()

rotaTecnico.get("/", tecnicoCtrl.consultar)

export default rotaTecnico