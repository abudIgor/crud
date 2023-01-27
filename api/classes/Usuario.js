import axios from 'axios';

module.exports = class Usuario {
    constructor(nome, fone, email, id) {
        this.nome = nome;
        this.fone = fone;
        this.email = email;
        this.data_nascimento = data_nascimento;
        this.id = id;
    }

    isFoneValid() {
        var regex = new RegExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$'); 
        return regex. test(this.fone); 
    }

    isDataNascimentoValid() {
        return true;
    }

    createUser() {

    }

    updateUser() {

    }

    deleteUser() {
        return new Promise(() => {
            axios.delete("http://localhost:8800/" + this.id).then((resp) => {
                resolve(resp);
            }).catch((error) => resolve(error));
        })

    }

    getUser() {

    }
}