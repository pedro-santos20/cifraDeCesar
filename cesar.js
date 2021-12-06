var encodeBtn = document.getElementById("button-encode");
var decodeBtn = document.getElementById("button-decode");

var texto = document.getElementById("message");
var chave = document.getElementById("offset");

encodeBtn.addEventListener("click", () => {
  localStorage.setItem("message", cipherEncode(texto.value, parseInt(chave.value)))
  window.location = "./message.html"
});

decodeBtn.addEventListener("click", () => {
  localStorage.setItem("message", cipherDecode(texto.value, parseInt(chave.value)))
  window.location = "./message.html"
});

function criptografia(texto, chave) {
  var criptoArray = [];
  var cripto = "";

  for (var i in texto) {
    criptoArray.push(texto[i].charCodeAt());
    if (criptoArray[i] >= 65 && criptoArray[i] <= 90) {
      var contadorCesar = ((criptoArray[i] - 65 + (chave % 26) + 26) % 26) + 65;
      cripto += String.fromCharCode(contadorCesar);
    }
    else if (criptoArray[i] >= 97 && criptoArray[i] <= 122) {
      var contadorCesar = ((criptoArray[i] - 97 + (chave % 26) + 26) % 26) + 97;
      cripto += String.fromCharCode(contadorCesar);
    }
    else {
      cripto += String.fromCharCode(criptoArray[i])
    }
  }
  return cripto
}

function descriptografia(texto, chave)
var descriptoArray = [];
var cripto = "";
var contadorCesar = "";
for (var j in texto) {
  decodificaArray.push(texto[j].charCodeAt());
  if (decodificaArray[j] >= 65 && decodificaArray[j] <= 90) {
    contadorCesar = ((decodificaArray[j] - 65 - (chave % 26) + 26) % 26) + 65;
    cripto += String.fromCharCode(contadorCesar);
  }
  else if (decodeArray[j] >= 97 && decodificaArray[j] <= 122) {
    var contadorCesar = ((decodificaArray[j] - 97 - (chave % 26) + 26) % 26) + 97;
    cripto += String.fromCharCode(contadorCesar);
  }
  else {
    cripto += String.fromCharCode(decodificaArray[j])
  }
}
return cripto

function printMessage(getFunction) {

  document.getElementById("final-message").innerHTML = getFunction(texto, chave)
}


