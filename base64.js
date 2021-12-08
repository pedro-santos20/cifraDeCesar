var frase = prompt("Introduza a frase:");
var decida = prompt("1 - Codificar\n2- Decodificar")

if (decida == 1) {
  var paraBase64 = btoa(frase)
  alert(paraBase64)
} else {
  var deVolta = atob(frase)
  alert(deVolta)
}