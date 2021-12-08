let encodeBtn = document.getElementById("button-encode");
let decodeBtn = document.getElementById("button-decode");

let texto = document.getElementById("message");
let chave = document.getElementById("offset");

encodeBtn.addEventListener("click", () => {
  localStorage.setItem("message", cipherEncode(texto.value, parseInt(chave.value)))
  window.location = "./message.html"
});

decodeBtn.addEventListener("click", () => {
  localStorage.setItem("message", cipherDecode(texto.value, parseInt(chave.value)))
  window.location = "./message.html"
});

function cipherEncode(texto, chave) {
  let codificaArray = [];
  let cripto = "";

  for (let i in texto) {
    codificaArray.push(texto[i].charCodeAt());
    if (codificaArray[i] >= 65 && codificaArray[i] <= 90) {
      let contaCripto = ((codificaArray[i] - 65 + (chave % 26) + 26) % 26) + 65;
      cripto += String.fromCharCode(contaCripto);
    }
    else if (codificaArray[i] >= 97 && codificaArray[i] <= 122) {
      let contaCripto = ((codificaArray[i] - 97 + (chave % 26) + 26) % 26) + 97;
      cripto += String.fromCharCode(contaCripto);
    }
    else {
      cripto += String.fromCharCode(codificaArray[i])
    }
  }
  return cripto
}

function cipherDecode(texto, chave) {
  let decodificaArray = [];
  let cripto = "";
  let contaCripto = "";
  
  for (let j in texto) {
    decodificaArray.push(texto[j].charCodeAt());
    if (decodificaArray[j] >= 65 && decodificaArray[j] <= 90) {
      contaCripto = ((decodificaArray[j] - 65 - (chave % 26) + 26) % 26) + 65;
      cripto += String.fromCharCode(contaCripto);
    }
    else if (decodificaArray[j] >= 97 && decodificaArray[j] <= 122) {
      let contaCripto = ((decodificaArray[j] - 97 - (chave % 26) + 26) % 26) + 97;
      cripto += String.fromCharCode(contaCripto);
    }
    else {
      cripto += String.fromCharCode(decodificaArray[j])
    }
  }
  return cripto
}

function printMessage(getFunction) {

  document.getElementById("final-message").innerHTML = getFunction(texto, chave)
}