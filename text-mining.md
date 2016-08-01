# Demostraci�n Text Mining "El Mostrador"

## Presentaci�n
El siguiente documento muestra el potencial del an�lisis de texto o *text mining* para la extracci�n de datos desde fuentes no estructuradas como art�culos, blogs, papers, redes sociales, u otros documentos, que se encuentran en gran cantidad en Internet, son de libre disposici�n y los encontramos en cualquier industria.

En espec�fico, el an�lisis realizado toma como base a todas las noticias escritas en la secci�n 'Pa�s' en el diario El Mostrador entre los a�os 2008 y 2016. Para llevar a cabo este an�lisis se realizaron los siguiente pasos metodol�gicos:

### 1.- Obtenci�n de los datos
Para la obtenci�n de los datos se utiliz� el programa computacional **WGET**, que a trav�s de l�neas de c�digo permite la extracci�n de contenido desde sitios web. En espec�fico, se descargaron todas las entradas escritas en El Mostrador entre el a�o 2008 y 2016 en formato HTML. Posteriormente se separan las columnas escritas en la secci�n **Pa�s**, obteniendo 2000 archivos html. El comando utilizado en Wget fue el siguiente:

	> wget -m -np -w 2 --limite-rate=20k -k -A .html http://www.elmostrador.cl/ 

### 2.- Procesamiento de los datos
Para el procesamiento de los datos se utiliza un ambiente de programaci�n basado en Javascript, utilizando **Node.js**, y las librer�as **recursiveReadSync**, **Fs**, **Cheerio**, **Path** y **TM**:

	> //A.- Libraries//
	var recursiveReadSync = require('recursive-readdir-sync'), files;
	var fs = require('fs'); 
	var cheerio = require('cheerio');
	var path = require('path');
	var tm = require('text-miner');

El objetivo es obtener solamente la informaci�n relevante para el an�lisis de la frecuencia de las palabras m�s utilizadas en El Mostrador en la secci�n Pa�s de forma simult�nea en los 2000 archivos HTML descargados. En este caso la informaci�n relevante se encuentra contenida en el **id:cat-pais**, espec�ficamente en la clase **cuerpo-noticia**:

	> //B.- Setting Variables//
	var date = 'Created at July 29';
	var corp = [];
	var r = './pais';
	var d = recursiveReadSync(r);

	for(var i = 0; i < d.length; i++){
		var $ = cheerio.load(fs.readFileSync(d[i],'utf8'));
		
		$('#cat-pais .cuerpo-noticia').each(function() {
			var texto = $(this).text();
			corp.push(texto);
		});
	};

Una vez que se han rescatado solamente los textos que corresponden al cuerpo de la noticia de los 2000 art�culos escritos en 'Pa�s' en El Mostrador (2008-16), utilizando la librer�a 'text mining' (TM) se procede a crear el **Corpus**, es decir, el documento conjunto a ser analizado. Adem�s, se limpia el documento de caracteres que no representan palabras, puntuaci�n, y se remueve gran parte de preposiciones y palabras que no representan valor en el an�lisis (i.e.: 'por', 'hacia', 'el', etc.):

	> //D.1.- Cleaning Corpus//
	var corpus = new tm.Corpus(corp).clean().removeInterpunctuation().removeInvalidCharacters().trim().toLower().removeInterpunctuation().removeWords(tm.STOPWORDS.ES);

### 3.- An�lisis de Resultados

Se realiza un an�lisis del corpus en tanto la Frecuencia de Palabras referido a la concentraci�n de palabras en el corpus, teniendo como base que est�n presentes en el texto m�s de 500 veces (se llega a �ste n�mero luego de analizar la frecuencia del total de palabras):

	> //D.2.- Word Frequency//
	var terms = new tm.Terms(corpus).findFreqTerms(500);

	var termsF = terms.sort(function(a, b) {
		return parseFloat(a.count) - parseFloat(b.count);
	});

Las palabras y sus frecuencias (words.csv) son representadas en una nube de palabras:

![](https://raw.githubusercontent.com/crishernandezmaps/blog/gh-pages/img/cloud.png)

Las 10 palabras m�s escritas en El Mostrador en su secci�n Pa�s en orden ascendente, son:

	> **Palabra, Frecuencia**
	  presidenta,960
	  sistema,994
	  nacional,1010
	  educaci�n,1036
	  presidente,1046
	  estado,1109
	  caso,1144
	  ministro,1223
	  chile,1840
	  gobierno,1910

Finalmente se imprime un documento con las frecuencias totales detectadas en el corpus en formato Json (words.json), el cual es luego transformado para su lectura a formato CSV (words.csv).











