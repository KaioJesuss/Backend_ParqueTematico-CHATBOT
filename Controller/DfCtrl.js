import { apresentarChamado } from "../Dialogflow/funcoes.js"
import Atracao from "../Model/Atracao.js"
import Tecnico from "../Model/Tecnico.js"
import Chamado from "../Model/Chamado.js"

export default class DFCtrl {
    async processarIntents(req, resp) {
        if (req.method == "POST" && req.is("application/json")) {
            let resposta = {}
            const dados = req.body
            const origem = dados?.originalDetectIntentRequest?.source
            const intencao = dados?.queryResult?.intent?.displayName
            const parametros = dados?.queryResult?.parameters

            switch (intencao) {
                case "COLETADE_DADOS":
                    resposta = await registrarChamado(parametros, dados, origem)
                    break
                case "CONSULTAR_STATUS":
                    resposta = await consultarChamado(parametros)
                    break
                default:
                    resposta = { fulfillmentText: "Não entendi sua solicitação." }
            }

            resp.status(200).json(resposta)
        } else {
            resp.status(405).json({
                status: "false",
                mensagem: "Método não permitido"
            })
        }
    }
}

async function registrarChamado(parametros, dados, origem) {

    const contextos = dados?.queryResult?.outputContexts || []
    let nomeAtracao = parametros.atracoes || parametros.atracao

    for (const contexto of contextos) {
        if (contexto.parameters?.atracoes) {
            nomeAtracao = contexto.parameters.atracoes
            break
        }
    }

    if (Array.isArray(nomeAtracao)) {
        nomeAtracao = nomeAtracao[0]
    }


    const atracao = new Atracao()
    const tecnico = new Tecnico()

    const atracaoEncontrada = await atracao.consultar(nomeAtracao)
    const tecnicoDesignado = await tecnico.consultar()
    const protocolo = "PROT" + Date.now()

    const chamado = new Chamado(
        0, protocolo,
        atracaoEncontrada.id,
        parametros.nome,
        parametros.cpf,
        parametros.telefone,
        parametros.localizacao,
        tecnicoDesignado.id,
        "Aberto", null
    )

    await chamado.gravar()

    const resultado = await apresentarChamado(
        protocolo,
        tecnicoDesignado.nome,
        atracaoEncontrada.prazo_manutencao,
        origem
    )
    return resultado
}

async function consultarChamado(parametros) {
    const chamado = new Chamado()
    const chamadoEncontrado = await chamado.consultar(parametros.numero_protocolo)

    if (chamadoEncontrado) {
        return {
            fulfillmentText:
            `Protocolo: ${chamadoEncontrado.numero_protocolo}. 
            Status: ${chamadoEncontrado.status}. 
            Técnico: ${chamadoEncontrado.tecnico_nome}.`
        }
    } else {
        return { fulfillmentText: "Protocolo não encontrado." }
    }
}