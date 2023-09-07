function validacoes(pessoasBebem, convidados, valorCerveja) {
    if (
        verificarQuantidadeBebidaAlcoolica(pessoasBebem, convidados) &&
        verificarQuantidadeConvidados(convidados) &&
        verificarValorCerveja(valorCerveja, pessoasBebem)
    ) {
        return true;
    }
    return false;
}

function verificarQuantidadeBebidaAlcoolica(pessoasBebem, convidados) {
    if (parseInt(pessoasBebem.value) > parseInt(convidados)) {
        alert(
            "O número de pessoas que consomem bebida alcoolica tem que ser menor ou igual a quantidade de convidados"
        );
        return false
    }
    return true;
}

function verificarQuantidadeConvidados(convidados) {
    if (parseInt(convidados.value) < 2) {
        alert("Voce precisa ter mais de uma pessoa para fazer o churrasco");
        return false;
    }
    return true;
}

function verificarValorCerveja(valorCerveja, pessoasBebem) {
    if (pessoasBebem !== '' && valorCerveja ==='') {
        alert("É necessário informar o valor da cerveja");
        return false;
    }
    return true;
}

function verificarValoresCampos(inputs) {
    for (let i = 0; i < inputs.length - 1; i++) {
        inputs[i].addEventListener("input", () => {
            if (inputs[i].value < 1) {
                inputs[i].setCustomValidity("O valor precisa ser maior que 1");
                return false;
            }
            inputs[i].setCustomValidity("");
        });
    }
    return true;
}

export { validacoes, verificarValoresCampos };
