function stringToFloat(input) {
    let valorAlterado;
    valorAlterado = parseFloat(input.replace(",", "."));
    if(isNaN(valorAlterado)) {
        valorAlterado = 0;
    }
    return valorAlterado;
}

function getElementId(nomeCampo) {
    return document.getElementById(nomeCampo);
}

function insertValues(elemento, valor) {
    if(isNaN(valor) || valor == 0) {
       return getElementId(elemento).innerText = '--'
    }

    return (getElementId(elemento).innerText = `${currencyConverter(valor)}`);
}

function insertQuatities(elemento, valor, unidade = ""){
    if(valor == 0) {
        return getElementId(elemento).innerText = '--'
     }
     return (getElementId(elemento).innerText = `${valor}${unidade}`);
}

function currencyConverter(valor) {
    const valorConvertido = new Intl.NumberFormat("pt-BR", {
        currency: "BRL",
        style: "currency",
    }).format(valor);
    return valorConvertido;
}



export { stringToFloat, getElementId, insertValues, currencyConverter, insertQuatities };
