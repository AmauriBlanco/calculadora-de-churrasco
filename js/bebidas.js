import { stringToFloat } from "./helpers.js";

function calcularBebida(convidados, valores, pessoasBebem) {
    let quantidadeBebida = quantidade(convidados, pessoasBebem);
    let valorBebida = valor(quantidadeBebida, valores);

    return {
        quantidades: {
            ...quantidadeBebida,
            ...pessoasBebem,
        },
        valores: {
            ...valorBebida,
        },
        total: {
            ...total(valorBebida),
        },
    };
}

function quantidade(convidados, pessoasBebem) {
    let refri, cerveja;

    // 1 litro
    refri = (convidados - pessoasBebem) * 1;

    // quantidade de cerveja = 4 latas de 355ml
    cerveja = (pessoasBebem * 1.45) / 0.355;

    return { refri, cerveja };
}

function valor(quantidades, valores) {
    let refri, cerveja;

    refri = quantidades.refri * stringToFloat(valores.refri);

    cerveja = quantidades.cerveja * stringToFloat(valores.cerveja);

    return { refri, cerveja };
}

function total(valores) {
    let valor = valores.refri + valores.cerveja;

    return { valor };
}


export { calcularBebida };