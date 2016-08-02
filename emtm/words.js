//A.- Libraries//
var recursiveReadSync = require('recursive-readdir-sync'), files;
var fs = require('fs'); 
var cheerio = require('cheerio');
var path = require('path');
var tm = require('text-miner');

//B.- Setting Variables//
var date = 'Created at July 29';
var corp = [];
var r = './pais';
var d = recursiveReadSync(r);

console.log(date);
console.log('Processing...');

//C.- Extracting Texts from HTMLs//
for(var i = 0; i < d.length; i++){
	var $ = cheerio.load(fs.readFileSync(d[i],'utf8'));
	
	$('#cat-pais .cuerpo-noticia').each(function() {
		var texto = $(this).text();
		corp.push(texto);
	});
};

//D.- Text Mining//

	//D.1.- Cleaning Corpus//
var corpus = new tm.Corpus(corp).clean().removeInterpunctuation().removeInvalidCharacters().trim().toLower().removeInterpunctuation().removeWords(tm.STOPWORDS.ES);

	//D.2.- Word Frequency//
var terms = new tm.Terms(corpus).findFreqTerms(500);

var termsF = terms.sort(function(a, b) {
    return parseFloat(a.count) - parseFloat(b.count);
});
console.log(terms);

fs.writeFile("words.txt" , JSON.stringify(termsF), function (err){
			if (err) {
			console.log(err);
			} else {
			console.log("File saved");
			}
});



