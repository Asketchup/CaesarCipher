
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\
// ---------- ENCRYPT MESSAGE ---------- \\
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\

function encryptMessage(id) {

    let message = document.getElementsByName(id)[0].value;
    let encrypt = [];

    message = clearMessage(message);

    for (let i = 0; i < message.length; i++) {
        
        let ascii = toAscii(message, i, 0) + 3;
        
        //console.log(String.fromCharCode(ascii));
        //console.log(ascii);

        encrypt[i] = String.fromCharCode(ascii);

    }

    let encryptText = String(encrypt).replace(/,/g, '');
    document.getElementById("encrypt").innerHTML = encryptText;

}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\
// ---------- DECRYPT MESSAGE ---------- \\
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\

function decryptMessage(id) {

    let message = document.getElementsByName(id)[0].value;
    let decrypt = [];

    message = clearMessage(message);

    for (let i = 0; i < message.length; i++) {
        
        let ascii = toAscii(message, i, 1) - 3;

        //console.log(String.fromCharCode(ascii));
        //console.log(ascii);

        decrypt[i] = String.fromCharCode(ascii);

    }

    let decryptText = String(decrypt).replace(/,/g, '');
    document.getElementById("decrypt").innerHTML = decryptText;

}


// ---------- FUNCTIONS ---------- \\

function clearMessage(message) {

    let nova;

    nova = message.replace(/[^a-zA-Z0-9_]/g, "");
    nova = nova.toUpperCase();
    
    //console.log(nova);
    
    return nova;

}

function toAscii(message, i, call) {

    let ascii = message[i].charCodeAt(0);
    
    //console.log('<<' + message[i] + '>>');

    ascii = checkMessage(ascii, call);
    
    return ascii
}

function checkMessage(message, call) {

    if (call == 0) {
        
        if (message > 87 && message < 91) {
            message -= 26;
        }
    
    }

    else {
        
        if (message > 64 && message < 68) {
            message += 26;
        }

    }

    //console.log(message);

    return message;
}