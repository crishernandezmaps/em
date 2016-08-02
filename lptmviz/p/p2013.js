//A.- Libraries//
var fs = require('fs'); 
var path = require('path');
var tm = require('text-miner');

//B.- Setting Variables//
var r = 'p2013.txt';
var corp = fs.readFileSync(r,'utf8');

//D.- Text Mining//

	//D.1.- Cleaning Corpus//
var corpus = new tm.Corpus(corp).clean().removeInterpunctuation().removeInvalidCharacters().trim().toLower().removeInterpunctuation().removeWords(tm.STOPWORDS.ES);

	//D.2.- Word Frequency//
var terms = new tm.Terms(corpus).findFreqTerms(10);

var termsF = terms.sort(function(a, b) {
    return parseFloat(a.count) - parseFloat(b.count);
});

var reverse = termsF.reverse();

var first20 = termsF.slice(0, 26); 

fs.writeFile("p2013.csv" , JSON.stringify(first20), function (err){
			if (err) {
			console.log(err);
			} else {
			console.log("File saved");
			}
}); 
