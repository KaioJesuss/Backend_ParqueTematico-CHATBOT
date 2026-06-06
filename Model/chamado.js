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

    get id() {
        return this.#id
    }

    set id(id) {
        this.#id = id
    }

    get numero_protocolo() {
        return this.#numero_protocolo
    }

    set numero_protocolo(numero_protocolo) {
        this.#numero_protocolo = numero_protocolo
    }

    get atracao_id() {
        return this.#atracao_id
    }

    set atracao_id(atracao_id) {
        this.#atracao_id = atracao_id
    }

    get cliente_nome() {
        return this.#cliente_nome
    }

    set cliente_nome(cliente_nome) {
        this.#cliente_nome = cliente_nome
    }

    get cliente_cpf() {
        return this.#cliente_cpf
    }

    set cliente_cpf(cliente_cpf) {
        this.#cliente_cpf = cliente_cpf
    }

    get cliente_telefone() {
        return this.#cliente_telefone
    }

    set cliente_telefone(cliente_telefone) {
        this.#cliente_telefone = cliente_telefone
    }

    get localizacao() {
        return this.#localizacao
    }

    set localizacao(localizacao) {
        this.#localizacao = localizacao
    }

    get tecnico_id() {
        return this.#tecnico_id
    }

    set tecnico_id(tecnico_id) {
        this.#tecnico_id = tecnico_id
    }

    get status() {
        return this.#status
    }

    set status(status) {
        this.#status = status
    }

    get criado_em() {
        return this.#criado_em
    }

    set criado_em(criado_em) {
        this.#criado_em = criado_em
    }
}