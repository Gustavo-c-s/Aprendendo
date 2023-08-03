function valor() {
    let w = parseInt(document.getElementById("w").value);
    let u = w * 2;
    u1 = u.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    alert(u1)
}
function valor1() {
    let a = parseInt(document.getElementById("a").value);
    a2 = a.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    let b = a + a * 0.5;
    c = b.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    alert('O produto custa ' + a2 + ', o valor do produto para revenda é de ' + c)
}
function valor2() {
    let e = parseInt(document.getElementById("e").value);
    p = e.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    let d = e * 0.3;
    f = d.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    alert('Investindo ' + p + ' você dera um retorno de ' + f)
}
function valor3() {
    let g = parseInt(document.getElementById("g").value);
    let h = g + g * 0.15;
    h1 = g * 0.15
    h2 = h1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    i = h.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    alert('Você deve um aumento de 15% no salario, ' + h2 + ' recendo um total de ' + i)
}
function valor4() {
    let i = parseInt(document.getElementById("i").value);
    let j = i - i * 0.07;
    j1 = i * 0.07
    j2 = j1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    k = j.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    alert('Você recebeu um desconto ' + j2 + ' no produto, agora ele custa ' + k)
} function valor5() {
    let q = parseInt(document.getElementById("q").value);
    let r = q * 0.06;
    let v = q * 0.08;
    r1 = q - r - v;
    r2 = r.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    r3 = r1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    v1 = v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    alert('Folha de salario \n' +  'Desconto de vale transporte 6% = '+ r2  + '\nDesconto do INSS 8% = ' + v1  +'\nTotal a receber = '+ r3)
}



    
