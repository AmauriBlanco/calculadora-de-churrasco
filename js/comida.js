import { stringToFloat } from "./helpers.js";

function calcularComida(convidados, valores) {
    let multiplicador = verificarMultiplicador(valores);
    let quantidadesComida = quantidade(convidados, multiplicador);
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

let multiplicadorCarne = 0.2;
let multiplicadorFrango = 0.1;
let multiplicadorSuina = 0.1;

// Calculo verificadores
function verificarMultiplicador(valores) {
    if (valores.frango === "" && valores.suina === "") {
        multiplicadorCarne = 0.4;
        multiplicadorFrango = 0;
        multiplicadorSuina = 0;
        console.log("1", valores.carne);
        return;
    }

    if (valores.frango === "") {
        multiplicadorCarne = 0.25;
        multiplicadorFrango = 0;
        multiplicadorSuina = 0.15;
        console.log("2", valor.frango);
        return;
    }

    if (valores.suina === "") {
        multiplicadorCarne = 0.25;
        multiplicadorFrango = 0.15;
        multiplicadorSuina = 0;
        console.log("3", valores.suina);
        return;
    }
}

// Calculo quantidade
function quantidade(convidados) {
    let carne, frango, suina;

    carne = convidados * multiplicadorCarne;
    frango = convidados * multiplicadorFrango;
    suina = convidados * multiplicadorSuina;

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
function total(quantidades, valores) {
    // Valor Total
    let valor = valores.carne + valores.frango + valores.suina;

    // Quantidade Total
    let quantidade = quantidades.carne + quantidades.frango + quantidades.suina;

    return {
        valor,
        quantidade,
    };
}

// Apresentando valores

export { calcularComida };
