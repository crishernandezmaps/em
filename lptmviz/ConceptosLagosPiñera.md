# Los temas de los Gobiernos de Lagos y Piñera

## Presentación
Dos de los pre-pre-candidatos presidenciales más fuertes para la próxima elección presidencial en Chile, son sin duda los ex presidente Lagos y Piñera, quienes han acaparado la prensa política durante los últimos meses.

Lo bueno de tener dos ex presidentes compitiendo, es que existe mucho material para analizar y extraer información, que tienen la virtud de ser **hechos**, es decir, que son palabra escrita irrefutable.

Parte de esa 'palabra escrita irrefutable' son los discursos presidenciales realizados cada [21 de Mayo](https://es.wikipedia.org/wiki/Discurso_del_21_de_mayo) ante el Congreso pleno, en Valparaíso. La Cuenta Anual del Presidente de la República de Chile representa tanto lo que se ha realizado hasta el momento como los anuncios de nuevas leyes, programas o proyectos de incidencia nacional.

Por esta razón analizar dichos textos, que pueden ser [descargados públicamente](https://www.camara.cl/camara/historia_archivo.aspx), reviste una gran relevancia en términos de conocer y recordar donde estuvo el enfoque y se pusieron los acentors en los Gobiernos de los actuales postulantes a La Moneda (aunque no hayan lanzado oficialmente su campaña).

Así, realicé el ejercicio de extraer datos desde los mensajes presidenciales de Ricardo Lagos (2000-2005), y Sebastían Piñera (2010-2003), extrayendo los conceptos más relevantes y los más mencionados a lo largo de los años en cada uno de sus discuros. 

## Método
Para tales efectos utilicé [wget](https://www.gnu.org/software/wget/) y [node.js](https://nodejs.org/en/), en específico las liberías [fs](https://nodejs.org/api/fs.html), [Path](https://www.npmjs.com/package/path) y [TM](https://www.npmjs.com/package/text-miner). Además la herramienta basada de visualización de datos basada en D3, [Raw](http://raw.densitydesign.org/). El código y las visualizaciones pueden ser descargadas y mejoradas [aquí]().

El método para la extracción de palabras se basó en la limpieza de los textos para eliminar palabras como preposiciones o artículos, espacios en blanco, puntuación y otros caractéres. Posteriormente se obtuvo la frecuencia de palabras mayores a '10', es decir, que aquellos conceptos con menos de 10 apariciones en el texto, no fueron seleccionadas. Las palabras resultantes se ordenadoron en orden descendente y finalmente se escogieron las 25 mayores frecuencias. Como paso adicional, como siempre quedan algunas palabras que no representan conceptos, se eliminan de dichas tablas aquellas palabras, como 'aquí', 'ciento(de porcentaje)', y otras más. Junto con eso se eliminan las palabras: 'Chile', 'Chilenos', 'País' y 'Nación', que si bien eran las con mayores frecuencias, no aportan al análisis. 

## Resultados
Teniendo en cuenta que el Gobierno de Lagos duró 6 años, mientras que el de Piñera 4 años, y que el último año de presidencia no se realiza discurso, ya que lo realiza quien es será el nuevo(a) Presidente, se obtuvo lo siguiente:

![Ricardo Lagos](https://github.com/crishernandezmaps/em/blob/master/lptmviz/Vizs/Lagos.png)


![Sebastián Piñera](https://github.com/crishernandezmaps/em/blob/master/lptmviz/Vizs/Pi%C3%B1era.png)









