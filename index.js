function writeArea() {
    var te = document.getElementsByTagName('textarea')[0];
    te.innerText = '.\n' + new Date() + '\n.';
}

function enCode() {
    console.log(document.forms[0]);
}

writeArea();
