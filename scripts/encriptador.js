var desencriptar = document.querySelector(".texto-desencriptar");
var texto = document.querySelector(".texto-encriptar");

function btnEncriptar() {
  const textoEncriptado = encriptarTexto(texto.value);
  desencriptar.value = textoEncriptado;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptarTexto(texto.value);
  desencriptar.value = textoDesencriptado;
}

function btnCopiar() {
  desencriptar.select();
  navigator.clipboard.writeText(desencriptar.value);
  alert("Texto copiado!");
}

function encriptarTexto(texto) {
  const patronE = /e/g;
  const patronI = /i/g;
  const patronA = /a/g;
  const patronO = /o/g;
  const patronU = /u/g;
  const reemplazarEPor = "enter";
  const reemplazarIPor = "imes";
  const reemplazarAPor = "ai";
  const reemplazarOPor = "ober";
  const reemplazarUPor = "ufat";
  texto = texto.replace(patronE, reemplazarEPor);
  texto = texto.replace(patronI, reemplazarIPor);
  texto = texto.replace(patronA, reemplazarAPor);
  texto = texto.replace(patronO, reemplazarOPor);
  texto = texto.replace(patronU, reemplazarUPor);
  var textoL = document.querySelector(".texto-encriptar");
  textoL.value = "";
  return texto;
}

function desencriptarTexto(texto) {
  const patronE = /enter/g;
  const patronI = /imes/g;
  const patronA = /ai/g;
  const patronO = /ober/g;
  const patronU = /ufat/g;
  const reemplazarEPor = "e";
  const reemplazarIPor = "i";
  const reemplazarAPor = "a";
  const reemplazarOPor = "o";
  const reemplazarUPor = "u";
  texto = texto.replace(patronE, reemplazarEPor);
  texto = texto.replace(patronI, reemplazarIPor);
  texto = texto.replace(patronA, reemplazarAPor);
  texto = texto.replace(patronO, reemplazarOPor);
  texto = texto.replace(patronU, reemplazarUPor);
  return texto;
}
