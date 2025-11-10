/*Aqui nós chamamos a variável const e chamamos o id, depois do = nós estamos chamamos o documento e pegamos a tag pelo id*/
const tela  = document.getElementById("tela")
/*função que será chamada toda vez que quisermos adicionar um valor*/






/*essa value é o valor principal que será digitado na tela e é transformado em valor*/
function adicionarValor(valor){
    tela.value += valor
}

/*função para apagar valores da tela */
function limpeza(){
    tela.value = ""
}

/*slice: ele vai criar uma sub string, nesse caso, o slice ele vai apagando cada um de cada vez. por exemplo: temos uma tabela de números, do 0 até o 10, a cada letra digitada é como se estivesse surgindo 0 1 2 3 4 como se fosse vários números em cada letra, e ele vai apagando como se fosse 0 1 2 3 -1, tipo apagando o 4*/
function apagarumValor(){
    tela.value = tela.value.slice(0, -1)
}

/*essa função avalia a expressão textual, como por exemplo, (2+3*4) ele multiplica e coloca o resultado na tela 
ATENÇÃO: o eval: ele é uma própria função que calcula, só que só calcula apenas com os 4 operadores tradiicionais*/
function calcularResultado(){
    try{
        tela.value = eval(tela.value)
    }
    catch (erro){
        tela.value = "Erro"
    }
}

/*adicionando evento do teclado*/
document.addEventListener(
 "keydown", function(evento){
    const tecla = evento.key

    if("0123456789+-*/.".includes(tecla)){
        adicionarValor(tecla)
    }
    if(tecla === "Enter" || tecla === "="){
        calcularResultado()
    }
    // backspace para apagar último número
    if (tecla === "Backspace"){  // se a tecla for Backspace (tecla de apagar para trás)
        apagarUltimo(); // remove o último caractere da tela
    }
    // Esc para limpar tudo 
    if (tecla === "Escape"){  // se a tecla for escape (Esc)
        limparTela(); //limpar todo o display
    }
 }


)