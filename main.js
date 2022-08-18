
var textoIngresado = document.querySelector(".texto");
var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar");
var botonCopiar = document.querySelector(".botonCopiar");
var validar = /[A-ZÁÉÍÓÚáéíóú ]+$/g;

function encriptar(){
    if(validar.test(textoIngresado.value) == true){
        alert("Solo letras minúsculas y sin acentos");
    }else if(textoIngresado.value == ""){
        alert("Ingrese un texto");
    }else{
    var textoEncriptado = textoIngresado.value.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
    document.querySelector("h1").style.display = "none";
    document.querySelector(".ilustracion").style.display = "none";
    document.querySelector("p").textContent = textoEncriptado;
      }
}

function desencriptar(){
    if(validar.test(textoIngresado.value) == true){
        alert("Solo letras minúsculas y sin acentos");
    }else if(textoIngresado.value == ""){
        alert("Ingrese un texto");
    }else{
    var textoEncriptado = textoIngresado.value.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
    document.querySelector("h1").style.display = "none";
    document.querySelector(".ilustracion").style.display = "none";
    document.querySelector("p").textContent = textoEncriptado;
      }
}

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;



function copiar(){
    var textoACopiar = document.querySelector("p").innerText;
    navigator.clipboard.writeText(textoACopiar);
   }

botonCopiar.onclick = copiar;
   