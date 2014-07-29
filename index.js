function writeArea() {
    var te = document.getElementsByTagName('textarea')[0];
    te.innerText = new Date();
}

function enCode() {
    var Form1 = document.forms[0];
    for (var i = 0, thing; thing = Form1[i]; i++) {
        console.log(thing);
    }
}
