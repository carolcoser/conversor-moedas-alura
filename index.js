function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmDolarNumerico * 5;
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "Valor em real:R$" + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterEuro() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmEuroNumerico = parseFloat(valor);
    
    var valorEmReal = valorEmEuroNumerico * 5.53;
    
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "Valor em real:R$" + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  