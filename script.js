function criptografar() {
    // Captura o valor do texto e da chave
    let texto = document.getElementById('input-text').value.toUpperCase();
    let chave = parseInt(document.getElementById('key').value);

    // Verifica se o texto inserido contém apenas letras e está dentro do limite
    if (texto.match(/^[A-Z]+$/i) && texto.length > 0 && texto.length <= 30) {
        // Criptografar o texto usando a Cifra de César
        let textoCifrado = cifraCesar(texto, chave);
        document.getElementById('encrypted-text').textContent = textoCifrado;
    } else {
        alert("Por favor, insira um texto válido de até 30 letras (A-Z).");
    }
}

function cifraCesar(texto, chave) {
    let textoCifrado = '';

    // Aplica a Cifra de César em cada letra do texto
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        let codigoASCII = letra.charCodeAt(0);

        // Verifica se é uma letra de A a Z
        if (codigoASCII >= 65 && codigoASCII <= 90) {
            textoCifrado += String.fromCharCode((codigoASCII - 65 + chave) % 26 + 65);
        }
    }
    return textoCifrado;
}
