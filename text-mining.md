# Demostración Text Mining "El Mostrador"

## Presentación
El siguiente documento muestra el potencial del análisis de texto o *text mining* para la extracción de datos desde fuentes no estructuradas como artículos, blogs, papers, redes sociales, u otros documentos, que se encuentran en gran cantidad en Internet, son de libre disposición y los encontramos en cualquier industria.

En específico, el análisis realizado toma como base a todas las noticias escritas en la sección 'País' en el diario El Mostrador entre los años 2008 y 2016. Para llevar a cabo este análisis se realizaron los siguiente pasos metodológicos:

### 1.- Obtención de los datos
Para la obtención de los datos se utilizó el programa computacional **WGET**, que a través de líneas de código permite la extracción de contenido desde sitios web. En específico, se descargaron todas las entradas escritas en El Mostrador entre el año 2008 y 2016 en formato HTML. Posteriormente se separan las columnas escritas en la sección **País**, obteniendo 2000 archivos html. El comando utilizado en Wget fue el siguiente:

	> wget -m -np -w 2 --limite-rate=20k -k -A .html http://www.elmostrador.cl/ 

### 2.- Procesamiento de los datos
Para el procesamiento de los datos se utiliza un ambiente de programación basado en Javascript, utilizando **Node.js**, y las librerías **recursiveReadSync**, **Fs**, **Cheerio**, **Path** y **TM**:

	> //A.- Libraries//
	var recursiveReadSync = require('recursive-readdir-sync'), files;
	var fs = require('fs'); 
	var cheerio = require('cheerio');
	var path = require('path');
	var tm = require('text-miner');

El objetivo es obtener solamente la información relevante para el análisis de la frecuencia de las palabras más utilizadas en El Mostrador en la sección País de forma simultánea en los 2000 archivos HTML descargados. En este caso la información relevante se encuentra contenida en el **id:cat-pais**, específicamente en la clase **cuerpo-noticia**:

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

Una vez que se han rescatado solamente los textos que corresponden al cuerpo de la noticia de los 2000 artículos escritos en 'País' en El Mostrador (2008-16), utilizando la librería 'text mining' (TM) se procede a crear el **Corpus**, es decir, el documento conjunto a ser analizado. Además, se limpia el documento de caracteres que no representan palabras, puntuación, y se remueve gran parte de preposiciones y palabras que no representan valor en el análisis (i.e.: 'por', 'hacia', 'el', etc.):

	> //D.1.- Cleaning Corpus//
	var corpus = new tm.Corpus(corp).clean().removeInterpunctuation().removeInvalidCharacters().trim().toLower().removeInterpunctuation().removeWords(tm.STOPWORDS.ES);

### 3.- Análisis de Resultados

Se realiza un análisis del corpus en tanto la Frecuencia de Palabras referido a la concentración de palabras en el corpus, teniendo como base que estén presentes en el texto más de 500 veces (se llega a éste número luego de analizar la frecuencia del total de palabras):

	> //D.2.- Word Frequency//
	var terms = new tm.Terms(corpus).findFreqTerms(500);

	var termsF = terms.sort(function(a, b) {
		return parseFloat(a.count) - parseFloat(b.count);
	});

Las palabras y sus frecuencias (words.csv) son representadas en una nube de palabras:

![](https://raw.githubusercontent.com/crishernandezmaps/blog/gh-pages/img/cloud.png)

Las 10 palabras más escritas en El Mostrador en su sección País en orden ascendente, son:

	> **Palabra, Frecuencia**
	  presidenta,960
	  sistema,994
	  nacional,1010
	  educación,1036
	  presidente,1046
	  estado,1109
	  caso,1144
	  ministro,1223
	  chile,1840
	  gobierno,1910

Finalmente se imprime un documento con las frecuencias totales detectadas en el corpus en formato Json (words.json), el cual es luego transformado para su lectura a formato CSV (words.csv).











