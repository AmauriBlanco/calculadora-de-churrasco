function validacoes(pessoasBebem, convidados, valorCerveja, valorCarne) {
    if (
        verificarQuantidadeBebidaAlcoolica(pessoasBebem, convidados) &&
        verificarQuantidadeConvidados(convidados) &&
        verificarValorCerveja(valorCerveja, pessoasBebem) &&
        verificarCarne(valorCarne)
    ) {
        return true;
    }
    return false;
}

function verificarQuantidadeBebidaAlcoolica(pessoasBebem, convidados) {
    if (parseInt(pessoasBebem) > parseInt(convidados)) {
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
        return false
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

function verificarCarne(valorCarne){
    if(valorCarne === '') {
        alert('É necessário informar o valor da carne');
        return false;
    }
    return true
    
}

function verificarValoresCampos(inputs) {
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input',()=> {
            if(inputs[i].value < 1) {
                alert('Os valores devem ser positivos')
                return false;
            }
        })
    }
    return true
}


export { validacoes, verificarValoresCampos };
