import { stringToFloat } from "./helpers.js";

function calcularComida(quantidadeConvidados, valores) {
    let multiplicador = verificarMultiplicador(valores);
    let quantidadesComida = quantidadeDeAlimento(
        quantidadeConvidados,
        multiplicador
    );
    let valorComida = valor(quantidadesComida, valores);

    return {
        quantidades: {
            ...quantidadesComida,
        },
        valores: {
            ...valorComida,
        },
        totais: {
            ...total(quantidadesComida, valorComida),
        },
    };
}

// Calculo verificadores
function verificarMultiplicador(valores) {
    let multiplicadorCarne = 0.2;
    let multiplicadorFrango = 0.1;
    let multiplicadorSuina = 0.1;

    if (valores.frango === "" && valores.suina === "") {
        multiplicadorCarne = 0.4;
        multiplicadorFrango = 0;
        multiplicadorSuina = 0;
        return { multiplicadorCarne, multiplicadorFrango, multiplicadorSuina };
    }

    if (valores.frango === "") {
        multiplicadorCarne = 0.25;
        multiplicadorFrango = 0;
        multiplicadorSuina = 0.15;
        return { multiplicadorCarne, multiplicadorFrango, multiplicadorSuina };
    }

    if (valores.suina === "") {
        multiplicadorCarne = 0.25;
        multiplicadorFrango = 0.15;
        multiplicadorSuina = 0;
        return { multiplicadorCarne, multiplicadorFrango, multiplicadorSuina };
    }

    return { multiplicadorCarne, multiplicadorFrango, multiplicadorSuina };
}

// Calculo quantidade
function quantidadeDeAlimento(quantidadeConvidados, multiplicador) {
    let carne, frango, suina;

    carne = quantidadeConvidados.value * multiplicador.multiplicadorCarne;
    frango = quantidadeConvidados.value * multiplicador.multiplicadorFrango;
    suina = quantidadeConvidados.value * multiplicador.multiplicadorSuina;

    return { carne, frango, suina };
}

// Calculo Valores / recebe a quantidade da função já processada
function valor(quantidades, valores) {
    let carne, frango, suina;

    // Calculo carne
    carne = quantidades.carne * stringToFloat(valores.bovina);

    // Calculo Frango
    frango = quantidades.frango * stringToFloat(valores.frango);

    //calculo Suina
    suina = quantidades.suina * stringToFloat(valores.suina);

    return { carne, frango, suina };
}

// Somando Totais quantidade/preço
function total(quantidadeDeAlimento, valores) {
    // Valor Total
    let valor = valores.carne + valores.frango + valores.suina;

    // Quantidade Total
    let quantidade =
        quantidadeDeAlimento.carne +
        quantidadeDeAlimento.frango +
        quantidadeDeAlimento.suina;

    return {
        valor,
        quantidade,
    };
}

// Apresentando valores

export { calcularComida };
