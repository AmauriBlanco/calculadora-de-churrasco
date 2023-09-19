import { calcularComida } from "./comida.js";
import { calcularBebida } from "./bebidas.js";
import {
    mostrarComida,
    mostrarBebida,
    zerarCampos,
    apresentarResposta,
    obterFormulario,
} from "./dom.js";
import {
    validacoes,
    validacoesCampos,
} from "./validacoes.js";
import { formatarMoeda } from "./mascara.js";

const informacoesDeEntrada = obterFormulario();

// Máscara
formatarMoeda(informacoesDeEntrada);

//Validações de eventListener
validacoesCampos(informacoesDeEntrada)

// Execução Calculo Comida
function comida() {
    let valoresComidaCalculado = calcularComida(informacoesDeEntrada);
    mostrarComida(valoresComidaCalculado);
}

// Execução Cálculo Bebidas
function bebida() {
    let valores = {
        quantidadeConvidados: informacoesDeEntrada.convidados.value,
        quantidadePessoasBebemCerveja: informacoesDeEntrada.quantidadePessoasBebemCerveja.value,
        valorRefri: informacoesDeEntrada.refri.value,
        valorCerveja: informacoesDeEntrada.cerveja.value,
    };

    let valoresBebidaCalculado = calcularBebida(valores);

    mostrarBebida(valoresBebidaCalculado);
}

// Envio dos campos
informacoesDeEntrada.addEventListener("submit", (event) => {
    event.preventDefault();
    // Verificação alert
    if (
        validacoes(
            informacoesDeEntrada.quantidadePessoasBebemCerveja,
            informacoesDeEntrada.cerveja,
            informacoesDeEntrada
        )
    ) {
        comida();
        bebida();
        apresentarResposta();
        zerarCampos(informacoesDeEntrada);
    }
});
