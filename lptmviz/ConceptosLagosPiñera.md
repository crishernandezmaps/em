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

### Ricardo Lagos
Los conceptos más relevantes mencionados por Lagos en todos sus mensajes presidenciales del 21 de Mayo, son:

![Ricardo Lagos](https://github.com/crishernandezmaps/em/blob/master/lptmviz/Vizs/Lagos.png)

'Mundo', 'Reforma', 'Educación', 'Desarrollo', 'Crecimiento', 'Salud' y 'Gobierno' son los conceptos que acaparan los seis años de Gobierno de Lagos. 

Probablemente haciéndole honor a su slogan "Crecer con Igualdad" los conceptos de 'Desarrollo' y 'Crecimiento' tienen mucha relevancia, al igual que la salida de Chile a los mercados extranjeros durante su mandato ('Mundo'), con la firma de tratados comerciales con diversos países y coglomerados. 

En cuanto al concepto 'Reforma' es probable que mencione las reformas constitucionales realizadas en su período.

Otros conceptos interesantes de analizar podrían ser 'Futuro', 'Jóvenes', 'Internet' y 'Becas'.

### Sebastián Piñera
Los conceptos durante los cuatro años de Gobierno de Piñera, son:

![Sebastián Piñera](https://github.com/crishernandezmaps/em/blob/master/lptmviz/Vizs/Pi%C3%B1era.png)

Conceptos como 'Gobierno', 'Proyecto', 'Ley', 'Educación', 'Calidad'. Pueden ser identificados con las movilizaciones estudiantiles que marcaron su período. 

Cabe mencionar que en total son menos los conceptos que utiliza Piñera en relación a Lagos. Puede ser causado por el menor tiempo de su período, o quizá por otro lado por lo pragmático de sus discursos. Lagos tiende a utilizar un lenguaje más florido.

Otros conceptos, derivados de las mala llamadas discusiones valóricas, como el matrimonio de personas del mismo sexo o el aborto, como lo son los conceptos de 'vida', 'sociedad', 'familias'.

## Conclusión
Del análisis de la trayectoria de los mensajes presidenciales de Lagos y Piñera se desprende una imagen del momento que le tocó vivir a cada Presidente, los acentos que le imprimieron a sus Gobiernos y el estilo de cada cual. Mientras Lagos tuvo un escenario propicio de reformas, acuerdos internacionales y de mantener el slogan de su Gobierno; Piñera por otro lado tuvo que afrontar un terremoto (no mencionado como un concepto relevante en sus mensajes, tampoco el de 'Reconstrucción'), y marchas estudiantiles, que claramente mercaron su Gobierno ('Educación', 'Calidad', 'Reforma').

## Futuros Análisis
Resulta interesante evaluar la evolución del discurso de los ahora pre-pre candidatos presidenciales. Esto es posible obteniendo dichos textos de la prensa. Evaluar los conceptos en los cuales van poníendo los acentos cada candidato, podría darnos luces de sus proyectos futuros, y cruzados dichos conceptos con, por ejemplo, aprobación de leyes al respecto o creación de programas, nos podrían dar a conocer la distancia que llamamos 'del dicho al hecho', o sea, si realmente ponen las fichas en lo que dicen, o se queda como un texto o recorte de prensa que personas como yo se dan el tiempo de analizar. 	







