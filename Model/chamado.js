import ChamadoDB from "../DB/ChamadoDB.js"

export default class Chamado {
    #id
    #numero_protocolo
    #atracao_id
    #cliente_nome
    #cliente_cpf
    #cliente_telefone
    #localizacao
    #tecnico_id
    #status
    #criado_em

    constructor(id, numero_protocolo, atracao_id, cliente_nome,
                cliente_cpf, cliente_telefone, localizacao,
                tecnico_id, status, criado_em) {
        this.#id = id
        this.#numero_protocolo = numero_protocolo
        this.#atracao_id = atracao_id
        this.#cliente_nome = cliente_nome
        this.#cliente_cpf = cliente_cpf
        this.#cliente_telefone = cliente_telefone
        this.#localizacao = localizacao
        this.#tecnico_id = tecnico_id
        this.#status = status
        this.#criado_em = criado_em
    }

    get id() { return this.#id }
    set id(id) { this.#id = id }

    get numero_protocolo() { return this.#numero_protocolo }
    set numero_protocolo(prot) { this.#numero_protocolo = prot }

    get atracao_id() { return this.#atracao_id }
    set atracao_id(at) { this.#atracao_id = at }

    get cliente_nome() { return this.#cliente_nome }
    set cliente_nome(nome) { this.#cliente_nome = nome }

    get cliente_cpf() { return this.#cliente_cpf }
    set cliente_cpf(cpf) { this.#cliente_cpf = cpf }

    get cliente_telefone() { return this.#cliente_telefone }
    set cliente_telefone(tel) { this.#cliente_telefone = tel }

    get localizacao() { return this.#localizacao }
    set localizacao(loc) { this.#localizacao = loc }

    get tecnico_id() { return this.#tecnico_id }
    set tecnico_id(tec) { this.#tecnico_id = tec }

    get status() { return this.#status }
    set status(st) { this.#status = st }

    get criado_em() { return this.#criado_em }
    set criado_em(dt) { this.#criado_em = dt }

    toJSON() {
        return {
            id: this.#id,
            numero_protocolo: this.#numero_protocolo,
            atracao_id: this.#atracao_id,
            cliente_nome: this.#cliente_nome,
            cliente_cpf: this.#cliente_cpf,
            cliente_telefone: this.#cliente_telefone,
            localizacao: this.#localizacao,
            tecnico_id: this.#tecnico_id,
            status: this.#status,
            criado_em: this.#criado_em
        }
    }

    async gravar() {
        const chamadoDB = new ChamadoDB()
        return await chamadoDB.gravar(this)
    }

    async consultar(numero_protocolo) {
        const chamadoDB = new ChamadoDB()
        return await chamadoDB.consultar(numero_protocolo)
    }
}