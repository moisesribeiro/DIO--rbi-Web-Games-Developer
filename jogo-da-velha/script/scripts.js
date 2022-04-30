let jogador = null;
let vencedorSelecionado = document.getElementById('vencedor-selecionado')
let jogadorSelecionado = document.getElementById('jogador-selecionado')
 
function escolherQuadrado(id){
    
    const quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '.') 
        return 
    
    if (checaVencedor())
        return
   

    quadrado.innerHTML = jogador;
    quadrado.style.backgroundColor = '#55f';

    

    if (jogador === 'X'){
        escolheJogador('O')
    } else {
        escolheJogador('X')
    }

    checaVencedor()
}

function escolheJogador(valor){

    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;


}

function checaVencedor(){
    
    let quadrado1 = document.getElementById('1');
    let quadrado2 = document.getElementById('2');
    let quadrado3 = document.getElementById('3');
    let quadrado4 = document.getElementById('4');
    let quadrado5 = document.getElementById('5');
    let quadrado6 = document.getElementById('6');
    let quadrado7 = document.getElementById('7');
    let quadrado8 = document.getElementById('8');
    let quadrado9 = document.getElementById('9');

    if (checaSequencia(quadrado1,quadrado2,quadrado3)) {return true };
    if (checaSequencia(quadrado4,quadrado5,quadrado6)) {return true }
    if (checaSequencia(quadrado7,quadrado8,quadrado9)) {return true }
    if (checaSequencia(quadrado1,quadrado4,quadrado7)) {return true }
    if (checaSequencia(quadrado2,quadrado5,quadrado8)) {return true }
    if (checaSequencia(quadrado3,quadrado6,quadrado9)) {return true }
    if (checaSequencia(quadrado1,quadrado5,quadrado9)) {return true }
    if (checaSequencia(quadrado3,quadrado5,quadrado7)) {return true }
    
    return false;
}

function checaSequencia(quadrado1,quadrado2,quadrado3){
    let jogadorVenceu = false;

    if (quadrado1.innerHTML !== '.' && 
        quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
            jogadorVenceu = true;
            mudarCorQuadrado(quadrado1,quadrado2,quadrado3)
            mudarVencedor(quadrado1)
            return jogadorVenceu
        }

}

function mudarCorQuadrado(quadrado1,quadrado2,quadrado3){
    quadrado1.style.backgroundColor = '#2D2';
    quadrado2.style.backgroundColor = '#2D2';
    quadrado3.style.backgroundColor = '#2D2';
}

function mudarVencedor(quadrado){
    vencedorSelecionado.innerHTML = quadrado.innerHTML
}

function repetir(){
    vencedorSelecionado.innerHTML = ''
    
    for(let i = 1; i<=9;i++){
        quadrado = document.getElementById(i)
        quadrado.style.backgroundColor='#eee'
        quadrado.innerHTML = '.'
    }

}

escolheJogador('X');