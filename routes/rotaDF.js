import { Router } from "express"
import DFCtrl from "../Controller/DFCtrl.js"

const rotaDF = Router()
const dfCtrl = new DFCtrl()

rotaDF.post("/", dfCtrl.processarIntents)

export default rotaDF