function paraBase64(string) {
    var emBase64 = btoa(string)
    return emBase64
}

function deVolta() {
    var deBase64 = atob(paraBase64(string))
    return deBase64
}
