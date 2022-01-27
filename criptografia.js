var entrada;
var saida;
var saidaa;
var saidae;
var saidai;
var saidao;
var saidau;
var copiado;
var saidaTexto = document.getElementById("resultado").value;
function lerCodigo(){
	var entrada = document.querySelector("#digite_aqui_seu_texto").value;
	var entradaLogica = entrada
	console.log(entrada);

		var saidae = entrada.replace(/e/g, "enter");
		var entrada = saidae

		var saidai = entrada.replace(/i/g, "imes");
		var entrada = saidai

		var saidaa = entrada.replace(/a/g, "ai");
		var entrada = saidaa


		var saidao = entrada.replace(/o/g, "ober");
		var entrada = saidao

		var saidau = entrada.replace(/u/g, "ufat");
		var entrada = saidau

	var saida = entrada;
 	if (saida == entradaLogica){
	console.log("elemento invalido");
	document.getElementById("resultado").textContent = "Elemento Invalido";;
  	}else{
  		console.log(saida);
  		document.getElementById("resultado").textContent = saida;
  		 }



}

function voltaCodigo(){

	var entrada = document.querySelector("#digite_aqui_seu_texto").value;
	var entradaLogica = entrada
	
	console.log(entrada);

		var saidae = entrada.replace(/enter/g, "e");
		var entrada = saidae

		var saidai = entrada.replace(/imes/g, "i");
		var entrada = saidai

		var saidaa = entrada.replace(/ai/g, "a");
		var entrada = saidaa


		var saidao = entrada.replace(/ober/g, "o");
		var entrada = saidao

		var saidau = entrada.replace(/ufat/g, "u");
		var entrada = saidau

		var saida = entrada

	if (saida == entradaLogica){
	console.log("elemento invalido");
	document.getElementById("resultado").textContent = "Elemento Invalido";;
  	}else{
  		console.log(saida);
  		document.getElementById("resultado").textContent = saida;
  	}




}




  function copia(){

	document.execCommand("copy");
}

  


var botao = document.querySelector("#criptografa");
var tecla = document.querySelector("#descriptografa");


botao.onclick = lerCodigo;
tecla.onclick = voltaCodigo;



