//FÓRMULA: F = C x 1,8 + 32//

function Converter() {
    var valorElemento = document.getElementById("grau");
    
    var valor = valorElemento.value;
    var grauCelsius = parseInt(valor);
    var conversorDeGrau = (grauCelsius * 1.8 + 32);
    
  console.log(conversorDeGrau);
    
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "Portanto, " + grauCelsius + "° Celsius equivalem a " + conversorDeGrau.toFixed(1) + "° Fahrenheit";
    elementoValorConvertido.innerHTML = valorConvertido;
  }                
  