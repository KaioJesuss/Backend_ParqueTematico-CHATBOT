import Chamado from "../Model/Chamado.js"

export function criarMessengerCard(title, subtitle) {
    return {
        type: "info",
        title: title,
        subtitle: subtitle
    }
}

export function criarCustomCard(title, subtitle) {
    return {
        card: {
            title: title,
            subtitle: subtitle,
            buttons: []
        }
    }
}

export default async function obterCardChamado(protocolo, tecnico, prazo, tipoCard = "custom") {
    const cards = []

    if (tipoCard == "custom") {
        const cardCustom = criarCustomCard()
        cardCustom.card.title = `✅ Chamado Registrado!`
        cardCustom.card.subtitle = `Protocolo: ${protocolo} | Técnico: ${tecnico} | Prazo: ${prazo}h`
        cards.push(cardCustom)
    } else {
        const cardMessenger = criarMessengerCard()
        cardMessenger.type = "info"
        cardMessenger.title = `✅ Chamado Registrado!`
        cardMessenger.subtitle = `Protocolo: ${protocolo} | Técnico: ${tecnico} | Prazo: ${prazo}h`
        cards.push(cardMessenger)
    }

    return cards
}

export async function apresentarChamado(protocolo, tecnico, prazo, origem) {
    const resposta = {
        "fulfillmentMessages": []
    }

    if (origem == "custom") {
        try {
            const card = criarCustomCard(
                `✅ Chamado Registrado!`,
                `Protocolo: ${protocolo} | Técnico: ${tecnico} | Prazo: ${prazo}h`
            )
            resposta.fulfillmentMessages.push(card)
        } catch(erro) {
            resposta.fulfillmentMessages.push({
                "text": {
                    "text": ["Erro ao registrar chamado: " + erro.message]
                }
            })
        }
    } else {
        try {
            const card = criarMessengerCard(
                `✅ Chamado Registrado!`,
                `Protocolo: ${protocolo} | Técnico: ${tecnico} | Prazo: ${prazo}h`
            )
            resposta.fulfillmentMessages.push(card)
        } catch(erro) {
            resposta.fulfillmentMessages.push({
                "text": {
                    "text": ["Erro ao registrar chamado: " + erro.message]
                }
            })
        }
    }

    // Adiciona sempre o texto com protocolo e pergunta final
    resposta.fulfillmentMessages.push({
        "text": {
            "text": [
                `Seu número de protocolo é: ${protocolo}`,
                `Técnico responsável: ${tecnico}`,
                `Prazo estimado: ${prazo} horas`,
                `Posso te ajudar com mais alguma coisa?`
            ]
        }
    })

    return resposta
}