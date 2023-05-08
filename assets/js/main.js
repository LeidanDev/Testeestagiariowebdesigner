var mensagem = [ 'Oi meu chapa!', 'Loktar Ogar!', 'Que a força esteja com você!', 'ZUG ZUG',
    'Calma amigo, não entre em pânico!']


var exibe = document.querySelector('#exibe__mensagem')

var interacao = document.querySelector('#interacao')


function clicar() {
var contador = -1

    interacao.onclick = function(){
        contador++
        if (contador > mensagem.length){
            contador = -1
        }
      return  exibe.textContent = mensagem[contador]
    }
   
    
}
 

setInterval (function colorir(){
    var frase = document.querySelector('#clique__imagem')
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    frase.style.color = "rgb("+r+","+g+","+b+")";
},1000)

colorir()

window.addEventListener("load",colorir);
 


