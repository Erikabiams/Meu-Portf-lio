// NOME DA AUTORA

let primeiroh1= document.querySelector( "h1.primeiroh1");
let segundoh1= document.querySelector( "h1.segundoh1");
let i = 0;

document.addEventListener("DOMContentLoaded",()=>{

   const time = setInterval(()=>{
      i++
  
  console.log(i)
  switch(i){
   case 1 :
     
     
      primeiroh1.style.opacity ='1';
      
      
      break;
   case 2: 
      segundoh1.style.opacity = "1"
      break;
   
  }
      
  },1000)

 
})
  
//   /////////////////////////////////////////////////////////
// INTERAÇÃO-TITULO1

var texto = "Minhas Habilidades";
var atraso = 200;
var textoElemento = document.querySelector(".titulo");


var contadorDeLetras = 0;
function escreverTexto() {
  if (contadorDeLetras < texto.length) {
    textoElemento.textContent += texto.charAt(contadorDeLetras);
    contadorDeLetras++;
    setTimeout(escreverTexto, atraso);
  }
}

escreverTexto();

// /////////////////////////////////////////////////////////////


  
