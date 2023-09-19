function formatarMoeda(inputs) {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].getAttribute("type") == "text") {
      inputs[i].addEventListener("keyup", () => {
        var valor = inputs[i].value;

        valor = valor + "";
        valor = parseInt(valor.replace(/[\D]+/g, ""));
        valor = valor + "";
        valor = valor.replace(/([0-9]{2})$/g, ",$1");

        if (valor.length > 6) {
          valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        }

        inputs[i].value = valor;
        if (valor == "NaN") inputs[i].value = "";
      });
    }
  }
}

export { formatarMoeda };
