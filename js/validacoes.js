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

function verificarValorPessoas(valorCerveja, pessoasBebem) {
    if (valorCerveja.value !== "" && pessoasBebem.value === "") {
        alert("É necessário informar a quantidade de pessoas");
        return false;
    }
    return true;
}

function verificarValorCerveja(valorCerveja, pessoasBebem) {
    if (pessoasBebem.value !== "" && valorCerveja.value === "") {
        alert("É necessário informar o valor da bebida");
        return false;
    }
    return true;
}

// Validações via input
function validacoesCampos(inputs) {
    verificarValoresNegativo(inputs);
    verificarNumeroDePessoasBebem(
        inputs.quantidadePessoasBebemAlcool,
        inputs.convidados
    );
    verificarQuantidadeConvidados(inputs.convidados);
}

function verificarValoresNegativo(inputs) {
    inputs.convidados.addEventListener("input", () => {
        if (inputs.convidados.value !== "" && inputs.convidados.value < 1) {
            inputs.convidados.setCustomValidity("O número de convidados precisa ser maior que 1");
            return;
        }
        inputs.convidados.setCustomValidity("");
    });
}

function verificarNumeroDePessoasBebem(pessoasBebem, convidados) {
    pessoasBebem.addEventListener("input", () => {
        if (parseInt(pessoasBebem.value) < 1) {
            pessoasBebem.setCustomValidity(
                "Quantidade de pessoas não pode ser menor que 1"
            );
            return;
        }

        if (parseInt(pessoasBebem.value) > parseInt(convidados.value)) {
            pessoasBebem.setCustomValidity(
                "O número de pessoas que bebem precisa ser menor que a quantidade de convidados"
            );
            return;
        }
        pessoasBebem.setCustomValidity("");
    });
}

function verificarQuantidadeConvidados(convidados) {
    convidados.addEventListener("input", () => {
        if (parseInt(convidados.value) < 2) {
            convidados.setCustomValidity(
                "Voce precisa ter mais de uma pessoa para fazer o churrasco"
            );
            return;
        }
        convidados.setCustomValidity("");
    });
}

export { validacoesCampos, validacoes };
