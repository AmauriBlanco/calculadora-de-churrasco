// Validações via alert
function validacoes(informacoesDeEntrada) {
  let valorCerveja = informacoesDeEntrada.cerveja.value;
  let quantidadePessoasBebemCerveja =
    informacoesDeEntrada.quantidadePessoasBebemCerveja.value;

  if (
    verificarValorCerveja(valorCerveja, quantidadePessoasBebemCerveja) &&
    verificarValorPessoas(valorCerveja, quantidadePessoasBebemCerveja) &&
    verificarValoresNegativo(informacoesDeEntrada)
  ) {
    return true;
  }
  return false;
}

function verificarValorPessoas(valorCerveja, quantidadePessoasBebemCerveja) {
  if (valorCerveja !== "" && quantidadePessoasBebemCerveja === "") {
    alert("É necessário informar a quantidade de pessoas que beberão cerveja");
    return false;
  }
  return true;
}

function verificarValorCerveja(valorCerveja, quantidadePessoasBebemCerveja) {
  if (quantidadePessoasBebemCerveja !== "" && valorCerveja === "") {
    alert("É necessário informar o valor da bebida");
    return false;
  }
  return true;
}

function verificarValoresNegativo(campos) {
  for (let i = 0; i < campos.length; i++) {
    if (campos[i].value !== "" && campos[i].value < 1) {
      alert(`O valor de ${campos[i].name} deve ser maior que 1`);
      return false;
    }
  }

  return true;
}

// Validações via input
function validacoesCampos(inputs) {
  verificarNumeroDePessoasBebem(
    inputs.quantidadePessoasBebemCerveja,
    inputs.convidados
  );
  verificarQuantidadeConvidados(inputs.convidados);
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
