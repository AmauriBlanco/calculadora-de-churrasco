function stringParaFloat(input) {
    let valorAlterado;
    valorAlterado = parseFloat(input.replace(",", "."));
    if(isNaN(valorAlterado)) {
        valorAlterado = 0;
    }
    return valorAlterado;
}

function obterElementoID(nomeCampo) {
    return document.getElementById(nomeCampo);
}

function inserirValores(elemento, valor) {
    if(isNaN(valor) || valor == 0) {
       return obterElementoID(elemento).innerText = '--'
    }

    return (obterElementoID(elemento).innerText = `${converterMoeda(valor)}`);
}

function inserirQuantidade(elemento, valor, unidade = ""){
    if(valor == 0) {
        return obterElementoID(elemento).innerText = '--'
     }
     return (obterElementoID(elemento).innerText = `${valor}${unidade}`);
}

function converterMoeda(valor) {
    const valorConvertido = new Intl.NumberFormat("pt-BR", {
        currency: "BRL",
        style: "currency",
    }).format(valor);
    return valorConvertido;
}



export { stringParaFloat, obterElementoID, inserirValores, converterMoeda, inserirQuantidade };
