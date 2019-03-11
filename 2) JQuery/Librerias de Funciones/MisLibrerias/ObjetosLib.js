/***********************************************
JavaScript & JQuery Functions Library
Lic. Santiago Rodríguez Paniagua. Updated: 01-01-15
***********************************************/

function PonePunteroManita(elemento) {
    //Le pone el puntero de manita al elemento
    var Objeto = $(elemento);
    Objeto.css('cursor', 'pointer');
} //------------------------------------------------------------------------

function CambiaImgAhorcado(laImagen, Contador) {	
	$(laImagen).attr('src',"Imagenes/Ahorcado"+Contador+".gif");
} //------------------------------------------------------------------------

function AccionClick(elemento, funcion){
    //Le agrega al evento click de un elemento una funcion
    $(elemento).on('click', funcion); 
} //------------------------------------------------------------------------

function ShowNextElement() {
    //Muestra el elemento siguiente al objeto que llamo a  esta función
    //$(this).next().slideDown();
    $(this).next().slideDown('slow');
} //------------------------------------------------------------------------

function HideElement(elemento) {
    //Oculta un elemento
    $(elemento).hide();
} //------------------------------------------------------------------------

function Esconde_Elemento(elemento) {
	$(elemento).css('display', 'none'); 
	//if ($.browser.msie) {//Ojo Migrar
	if(navigator.appVersion.indexOf("MSIE")!==-1){
		$(elemento).css({ "visibility": "hidden" });
	}
} //------------------------------------------------------------------------

function Clonador() {
    $(this).clone().appendTo('body');
    //$(this).clone(true).appendTo('body'); //Para que los Clones sean Clonados
} //------------------------------------------------------------------------

function RemueveClaseLista(numeroElemento, clase) {
    //Le quita la clase css a un elemento de la lista.
    $('ul').children('li:nth-child(' + numeroElemento + ')').removeClass(clase);
} //------------------------------------------------------------------------

function AgregaClaseLista(numeroElemento, clase) {
    //Le agrega la clase css a un elemento de la lista.
    $('ul').children('li:nth-child(' + numeroElemento + ')').addClass(clase);
} //------------------------------------------------------------------------

function CambiaColorLista(numeroElemento, color) {
    //Le cambia el formato a un elemento de la lista.
    $('ul').children('li:nth-child(' + numeroElemento + ')').css('color', color);
} //------------------------------------------------------------------------

function DetectaNavegador() {	
	var es_chrome = navigator.userAgent.indexOf('Chrome') > -1;
	var es_explorer = navigator.userAgent.indexOf('MSIE') > -1;
	var es_firefox = navigator.userAgent.indexOf('Firefox') > -1;
	var es_safari = navigator.userAgent.indexOf("Safari") > -1;
	var es_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
	
	if ((es_chrome)&&(es_safari)) {alert('Es Chrome');}
	if ((es_chrome)&&(es_opera))  {alert('Es Safari');}
	if (es_firefox) {alert('Es Firefox');}
	
	if(window.ActiveXObject || "ActiveXObject" in window){
		// Esto siempre es true en IE
		alert('Es Internet Explorer');
	}
}//------------------------------------------------------------------------

