export default class Tecnico {
    #id
    #nome
    #telefone

    constructor(id, nome, telefone) {
        this.#id = id
        this.#nome = nome
        this.#telefone = telefone
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

    get telefone() {
        return this.#telefone
    }

    set telefone(telefone) {
        this.#telefone = telefone
    }
}