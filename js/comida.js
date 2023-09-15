import { stringParaFloat } from "./helpers.js";

let multiplicadorCarne = 0.2;
let multiplicadorFrango = 0.1;
let multiplicadorSuina = 0.1;

function calcularComida(quantidadeConvidados, valores) {
    let quantidadesComida = quantidade(quantidadeConvidados, valores);
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
function calcularMultiplicador(valores) {
    if (valores.frango.value === "" && valores.suina.value === "") {
        multiplicadorCarne = 0.4;
        multiplicadorFrango = 0;
        multiplicadorSuina = 0;
        return;
    }

    if (valores.frango.value === "") {
        multiplicadorCarne = 0.25;
        multiplicadorFrango = 0;
        multiplicadorSuina = 0.15;
        return;
    }

    if (valores.suina.value === "") {
        multiplicadorCarne = 0.25;
        multiplicadorFrango = 0.15;
        multiplicadorSuina = 0;
        return;
    }
}

// Calculo quantidade
function quantidade(quantidadeConvidados, valores) {
    calcularMultiplicador(valores)
    let carne, frango, suina;

    carne = quantidadeConvidados.value * multiplicadorCarne;
    frango = quantidadeConvidados.value * multiplicadorFrango;
    suina = quantidadeConvidados.value * multiplicadorSuina;

    return { carne, frango, suina };
}

// Calculo Valores / recebe a quantidade da função já processada
function valor(quantidades, valores) {
    let carne, frango, suina;

    // Calculo carne
    carne = quantidades.carne * stringParaFloat(valores.bovina.value);

    // Calculo Frango
    frango = quantidades.frango * stringParaFloat(valores.frango.value);

    //calculo Suina
    suina = quantidades.suina * stringParaFloat(valores.suina.value);

    return { carne, frango, suina };
}

// Somando Totais quantidade/preço
function total(quantidade, valores) {
    // Valor Total
    let valor = valores.carne + valores.frango + valores.suina;

    // Quantidade Total
    let quantidadeTotal =
        quantidade.carne +
        quantidade.frango +
        quantidade.suina;

    return {
        valor,
        quantidadeTotal,
    };
}

// Apresentando valores

export { calcularComida };
