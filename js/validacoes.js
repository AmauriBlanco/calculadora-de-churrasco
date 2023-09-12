// Validações via alert
function validacoes(pessoasBebem, valorCerveja) {
    if (
        verificarValorCerveja(valorCerveja, pessoasBebem) &&
        verificarValorPessoas(valorCerveja, pessoasBebem)
    ) {
        return true;
    }
    return false;
}

function verificarQuantidadeBebidaAlcoolica(pessoasBebem, convidados) {
    pessoasBebem.addEventListener("input", () => {
        if (parseInt(pessoasBebem.value) > parseInt(convidados.value)) {
            pessoasBebem.setCustomValidity(
                "O número de pessoas que bebem precisa ser menor que a quantidade de convidados"
            );
            return false;
        }
        pessoasBebem.setCustomValidity("");
        return true;
    });
}

function verificarQuantidadeConvidados(convidados) {
    convidados.addEventListener("input", () => {
        if (parseInt(convidados.value) < 2) {
            convidados.setCustomValidity(
                "Voce precisa ter mais de uma pessoa para fazer o churrasco"
            );
            return false;
        }
        convidados.setCustomValidity("");
        return true;
    });
}

function verificarValorCerveja(valorCerveja, pessoasBebem) {
    if (pessoasBebem.value !== "" && valorCerveja.value === "") {
        alert("É necessário informar o valor da bebida");
        return false;
    }
    return true;
}

function verificarValorPessoas(valorCerveja, pessoasBebem) {
    if (valorCerveja.value !== "" && pessoasBebem.value === "") {
        alert("É necessário informar a quantidade de pessoas");
        return false;
    }
    return true;
}

function verificarValoresCampos(inputs) {
    for (let i = 0; i < inputs.length - 1; i++) {
        inputs[i].addEventListener("input", () => {
            if (inputs[i].value !== "" && inputs[i].value < 1) {
                inputs[i].setCustomValidity("O valor precisa ser maior que 1");
                return false;
            }
            inputs[i].setCustomValidity("");
            return true;
        });
    }
}

export {
    validacoes,
    verificarValoresCampos,
    verificarQuantidadeConvidados,
    verificarQuantidadeBebidaAlcoolica,
};
