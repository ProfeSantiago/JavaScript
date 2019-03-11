/***********************************************
Codigo del Ejemplo de Append
Lic. Santiago Rodríguez Paniagua. Updated: 01-01-15
***********************************************/
var x=$(document);
		x.ready(inicializarEventos); //Se ejecuta al cargar la pagina.
		
		function inicializarEventos() {		
			$("#AppendBtn").click(function () {
				AgregaTexto('article', 'final', 'Agregado al Final por JQuery<br/>')
			});  //Agrega texto al final de un "Article"

			$("#PrependBtn").click(function () {
				AgregaTexto('article', 'inicio', 'JQuery lo agrego al principio <br/>')
			});  //Agrega texto al Principio de un "Article"

			$("#AfterTitleBtn").click(function () {
				AgregaTextoElemento('h2', 'final', 'Agregado al Final por JQuery<br/>')
			});  //AgregaTextoLuegoTitulo Agrega texto al final de un "Article"

			$("#B4TitleBnt").click(function () {
				AgregaTextoElemento('h2', 'inicio', 'Agregado al principio por JQuery<br/>')
			});  //AgregaTextoLuegoTitulo Agrega texto al final de un "Article"
			
			$("#AddTitleBtn").click(function () {
				AgregaTitulo('article', 'inicio', 'Titulo agregado con JQuery')
			});
			
			var botonAgregaTituloDespues = $("#AddTitleAfterBtn");
			botonAgregaTituloDespues.click(function () {
				AgregaTitulo('article', 'final', 'Titulo agregado con JQuery')
			}); 
		}// Fin inicializarEventos		  

function CambiaTextoLista(numeroElemento, texto) {
    //Le cambia el texto a un elemento de la lista.
    $('ul').children('li:nth-child(' + numeroElemento + ')').text(texto);
} //------------------------------------------------------------------------

