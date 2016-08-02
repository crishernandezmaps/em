//A.- Libraries//
var recursiveReadSync = require('recursive-readdir-sync'), files;
var fs = require('fs'); 
var path = require('path');
var tm = require('text-miner');


//B.- Setting Variables//
var ps = ['./p/p2010.txt', './p/p2011.txt', './p/p2012.txt', './p/p2013.txt'];
var corp = [];

for(var i = 0; i < ps.length; i++){
	var txts = fs.readFileSync(ps[i],'utf8');
	corp.push(txts);
};

//D.- Text Mining//

	//D.1.- Cleaning Corpus//
var corpus = new tm.Corpus(corp).clean().removeInterpunctuation().removeInvalidCharacters().trim().toLower().removeInterpunctuation().removeWords(tm.STOPWORDS.ES);

	//D.2.- Word Frequency//
var terms = new tm.Terms(corpus).findFreqTerms(10);

var termsF = terms.sort(function(a, b) {
    return parseFloat(a.count) - parseFloat(b.count);
});

fs.writeFile("testPinera.csv" , JSON.stringify(termsF.reverse()), function (err){
			if (err) {
			console.log(err);
			} else {
			console.log("File saved");
			}
}); 