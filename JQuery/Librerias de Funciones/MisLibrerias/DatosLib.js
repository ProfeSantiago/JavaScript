/***********************************************
JavaScript & JQuery Functions Library
Lic. Santiago Rodríguez Paniagua. Updated: 01-01-15
***********************************************/

function AnalizadorXML(TextoXML) {
	
	var ObjetoXML;
	
	if (window.DOMParser)
	{
	  parser=new DOMParser();
	  ObjetoXML=parser.parseFromString(TextoXML,"text/xml");
	} else {
	  ObjetoXML=new ActiveXObject("Microsoft.XMLDOM");
	  ObjetoXML.async=false;
	  ObjetoXML.loadXML(TextoXML);
	}
	
	return ObjetoXML;
} //------------------------------------------------------------------------

function AnalizadorJSON(TextoJSON) {
	return ObjetoJSON = JSON.parse(TextoJSON);	
} //------------------------------------------------------------------------

function Json2Array(TextoJSON) {
var jsonArray = [];
	var obj = jQuery.parseJSON(TextoJSON);
	alert();
	if (obj != null || obj != undefined) {
		if (obj.Data != null || obj.Data != undefined) {
			var i = 0;
			$(obj.Data).each(function (item) {
				jsonArray[i] = [this.Tecnologia, this.Lenguaje];
				i++;
			});
		}
	}
	return jsonArray;
}//------------------------------------------------------------------------

