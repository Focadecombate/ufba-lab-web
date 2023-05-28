document.getElementById("imcForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio do formulário

  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const nome = document.getElementById("nome").value;

  const imc = peso / Math.pow(altura / 100, 2);

  const resultado = document.getElementById("resultado");

  if (isNaN(imc)) {
    resultado.textContent = "Por favor, insira valores válidos.";
  } else {
    const categoria = "";

    if (imc < 18.5) {
      categoria = "Abaixo do peso";
    } else if (imc < 25) {
      categoria = "Peso normal";
    } else if (imc < 30) {
      categoria = "Pré-obeso";
    } else if (imc < 35) {
      categoria = "Obeso 1";
    } else if (imc < 39) {
      categoria = "Obeso 2";
    } else {
      categoria = "Obeso 3";
    }

    resultado.textContent = `${nome} seu IMC é ${imc.toFixed(2)} - ${categoria}`;
  }
});