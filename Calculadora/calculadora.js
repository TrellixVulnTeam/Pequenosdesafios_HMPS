// FUNÇÃO PARA APARECER TODOS OS DÍGITOS QUE INSERIR NA TELA
function insert(n) {
    var numero= document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero+n;
}

// FUNÇÃO DA TECLA LIMPAR TUDO (C)
function clean() {
    document.getElementById('resultado').innerHTML= "";
}

// FUNÇÃO LIMPAR UM DÍGITO POR VEZ (<)
function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

// FUNÇÃO CALCULAR
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
    document.getElementById('resultado').innerHTML = eval(resultado);
    }
    // AO APERTAR A TECLA = SEM TER INSERIDO A OPERAÇÃO APARECE A SEGUINTE MENSAGEM
    else {
        document.getElementById('resultado').innerHTML = "Erro"
    }
}