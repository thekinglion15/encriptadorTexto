function encrypt() {
    //Poniendo el estilo del div #result de forma normal.
    normalStyle();

    var encryptText = '';
    //Obteniendo el texto en el Textarea.
    var originalText = document.getElementById('inputText').value;

    //Validando que solo sean letras minusculas.
    if (!validateText(originalText)) {
        errorStyle();
        return;
    }

    //Bucle encargado de hacer la sustitucion.
    for (var i = 0; i < originalText.length; i++) {
        switch (originalText[i]) {
            case 'a':
                encryptText += 'ai';
                break;

            case 'e':
                encryptText += 'enter';
                break;

            case 'i':
                encryptText += 'imes';
                break;

            case 'o':
                encryptText += 'ober';
                break;

            case 'u':
                encryptText += 'ufat';
                break;

            default:
                encryptText += originalText[i];
                break;
        }
    }
    
    //Pasando el texto encriptado al div #result para ser mostrado.
    document.getElementById('result').innerText = encryptText;
}

function decrypt() {
    //Poniendo el estilo del div #result de forma normal.
    normalStyle();

    var decryptText = '';
    //Obteniendo el texto en el Textarea.
    var encryptText = document.getElementById('inputText').value;

    ////Bucle encargado de hacer la sustitucion.
    if (!validateText(encryptText)) {
        errorStyle();
        return;
    }

    //Quienes remplazan las palabras por las vocales originales.
    decryptText = encryptText.replace(/ai/g, 'a')
    decryptText = decryptText.replace(/enter/g, 'e')
    decryptText = decryptText.replace(/imes/g, 'i')
    decryptText = decryptText.replace(/ober/g, 'o')
    decryptText = decryptText.replace(/ufat/g, 'u');

    //Pasando el texto desencriptado al div #result para ser mostrado.
    document.getElementById('result').innerText = decryptText;
}

function copy() {
    //Obtener el texto del div donde se muestra el resultado.
    var result = document.getElementById('result').innerText;

    //Creacion de un elemento temporal, añadirlo al DOM, para seleccionar el contenido y asi poder copiarlo, para luego eliminar el elemento temporal.
    var inputTemp = document.createElement('textarea');
    inputTemp.value = result;
    document.body.appendChild(inputTemp);
    inputTemp.select();
    inputTemp.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(inputTemp);

    //Cambia el texto del boton Copiar para demostrar que el texto ha sido copiado, luego de 3 segundos vuelve a su estado normal.
    var buttonCopy = document.getElementById('copy');
    buttonCopy.textContent = 'Copiado';

    setTimeout(function () {
        buttonCopy.textContent = 'Copiar Resultado';
    }, 3000);
}

//Validando que el texto solo sean minusculas.
function validateText(text) {
    var restriction = /^[a-z\s]+$/;
    return restriction.test(text);
}

//Poniendo el estilo del div #result de forma normal.
function normalStyle() {
    var element = document.getElementById('result');
    element.innerText = "Resultado";
    element.style.color = 'black';
    element.style.fontWeight = 'normal';
    element.style.textAlign = 'left';
}

//Poniendo el estilo del div #result en modo error.
function errorStyle() {
    var element = document.getElementById('result');
    element.innerText = "Solo se aceptan letras minusculas y sin acentos.";
    element.style.color = 'red';
    element.style.fontWeight = 'bold';
    element.style.textAlign = 'center';
}