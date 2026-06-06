export default class Atracao {
    #id
    #nome
    #prazo_manutencao

    constructor(id, nome, prazo_manutencao) {
        this.#id = id
        this.#nome = nome
        this.#prazo_manutencao = prazo_manutencao
    }

    get id() {
        return this.#id
    }

    set id(id) {
        this.#id = id
    }

    get nome() {
        return this.#nome
    }

    set nome(nome) {
        this.#nome = nome
    }

    get prazo_manutencao() {
        return this.#prazo_manutencao
    }

    set prazo_manutencao(prazo_manutencao) {
        this.#prazo_manutencao = prazo_manutencao
    }
}