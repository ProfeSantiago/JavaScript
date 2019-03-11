/***********************************************
JavaScript & JQuery Functions Library
Lic. Santiago Rodríguez Paniagua. Updated: 01-01-15
***********************************************/

function AgrandaTexto(elemento) {
    //Le aumenta el tamano de la fuente al elemento
    var Objeto = $(elemento);
    var fontSize = parseInt(Objeto.css('font-size'),10);
    Objeto.css('font-size', fontSize += 1);
} //------------------------------------------------------------------------

function AchicaTexto(elemento) {
    //Le aumenta el tamano de la fuente al elemento
    var Objeto = $(elemento);
    var fontSize = parseInt(Objeto.css('font-size'), 10);
    Objeto.css('font-size', fontSize -= 1);
} //------------------------------------------------------------------------

function AgregaTextoElemento(elemento, donde, texto) {
    //Agrega texto antes o despues de un elemento
    if (donde == 'inicio') {
        $(elemento).before(texto);
    } else if (donde == 'final') {
        $(elemento).after(texto);
    } //End else
} //------------------------------------------------------------------------

function AgregaTexto(elemento, donde, texto) {
    //Agrega texto a un elemento
    if (donde == 'inicio') {
        $(elemento).prepend(texto);
    } else if (donde == 'final') {
        $(elemento).append(texto);
    } //End else
} //------------------------------------------------------------------------

function AgregaTitulo(elemento, donde, texto) {
    //Agrega un <H2> Antes o Despues de un elemento
    if (donde == 'inicio') {
        $('<h2></h2>', { text: texto }).prependTo(elemento);
    } else if (donde == 'final') {
        $('<h2></h2>', { text: texto }).appendTo(elemento);
    } //End else
} //------------------------------------------------------------------------

function CambiaTextoLista(numeroElemento, texto) {
    //Le cambia el texto a un elemento de la lista.
    $('ul').children('li:nth-child(' + numeroElemento + ')').text(texto);
} //------------------------------------------------------------------------

