function verificar() {
    var renda = Number(document.getElementById("renda").value);
    if (renda >= 3000) {
        alert("Você aceita um plano alfa?")

    } else {
        alert("Você aceita um plano Beta?")
    }
}
function verificar1() {
    var idade = Number(document.getElementById("idade").value);
    if (idade >= 18) {
        const d = ("maior de idade");
        document.getElementById("idade1").innerHTML = d
    } else {
        const e = ("menor de idade");
        document.getElementById("idade2").innerHTML = e

    }
}

function kilo() {
    var saude = Number(document.getElementById("saude").value);
    if (saude < 180) {
        alert("Sua saude esta OK!")

    } else {
        alert("Vamos procurar uma ajuda médica?")
    }
}

function comissao() {
    var valor = Number(document.getElementById("valor").value);
    if (valor >= 100000) {
        v1 = (valor * 0.04)
        v2 = v1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        v7 = v1 + valor
        v8 = v7.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        alert('Sua comissao é de ' + v2 +  '\nRecebendo um total de ' + v8)

    } else {
        v3 = (valor * 0.03)
        v4 = v3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        v5 = v3 + valor;
        v6 = v5.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        alert('Sua comissao é de ' + v4 + "\nRecebendo um total de " + v6)
    }
}
function escola() {
    var nota = Number(document.getElementById("nota").value);
    if (nota < 0 || nota > 10) {
        alert("nota invalida")
    } else if (nota >= 0 && nota < 4) {
        alert("Aluno foi Reprovado")

    } else if (nota >= 4 && nota < 7) {
        alert("Aluno recuperação")
    }
    else {
        alert("Aluno arovado")
    }
    return nota >=4 < 7 (alert('outra prova'))
}


       
    



    

