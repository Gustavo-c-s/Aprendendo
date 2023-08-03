function mes(mes) {
    var mes = mes
    var text

    switch (mes) {
        case "1":
            text = 'Seu mes é Janeiro'
            break;
        case "2":
            text = 'Seu mes é Fevereiro'
            break;
        case "3":
            text = "Seu mes é Março"
            break;
        case "4":
            text = "Seu mes é Abril"
            break;
        case "5":
            text = "Seu mes é Maio"
            break;
        case "6":
            text = "Seu mes é Junho"
            break;
        case "7":
            text = "Seu mes é Julho"
            break;
        case "8":
            text = "Seu mes é Agosto"
            break;
        case "9":
            text = "Seu mes é Setembro"
            break;
        case "10":
            text = "Seu mes é Outubro"
            break;
        case "11":
            text = "Seu mes é Novembro"
            break;
        case "12":
            text = "Seu mês é Dezembro"
            break;
        default:
            text = "Escolha um numero de 1 ao 12"
            break;
    }document.getElementById('mes1').innerHTML = text

}
function senac(senac) {
    var senac = senac
    var text
    switch (senac) {
        case "a":
            text = "Paciente foi atendido"
            break;
        case "pa":
            text = "Paciente parcialmente atendido"
            break;
        case "na":
            text = "Paciente não atendido"
            break;
        default:
            text = "Defina o estado do paciente "
            break;
    } document.getElementById('senac1').innerHTML = text
}
function contagem() {
    let text = "";
    let i = 10;
    while (i > -1) {
        text += "<br> " + i;
        i--;
    }
    document.getElementById("demo").innerHTML = text;
}
function tabuada() {

    var n = 0
    var z = 0
    var text
    var resposta = document.getElementById("tabuada");
    while (n < 10) {

        n++
        x = z + 5
        x = x * n

        text = n
        text = resposta.innerHTML += "5 x " + text + " = " + x + " </br >"
    }
}
function contagem1() {
    let text = "";
    let i = parseInt(document.getElementById("i").value);
    while (i > -1) {
        text += "<br> " + i;
        i--;
    }
    document.getElementById("teste").innerHTML = text;
}
function tabuada2() {

    var n = 0
    var z = parseInt(document.getElementById("z").value);
    var text
    var resposta = document.getElementById("tabuada2");
    while (n < 10) {

        n++
        
        x = z * n

        text = n
        text = resposta.innerHTML += z + " x " + text + " = " + x + " </br >"
    }
}