var censoredwords={'sad','mad','bad'};
var customerCensoreWords=[];
function censor(inStr){
	for(idx in censoredwords){
		inStr=inStr.replace(censoredwords[idx],"****");
	}
	for(idx in customerCensoreWords){
		inStr=inStr.replace(customerCensoreWords[idx],"****");
	}
	return inStr;
}
function addCensoreWord(word){
	customerCensoreWords.push(word);
}
function getCensoreWord(word){
	return censoredwords.concat(customerCensoreWords);
}
exports.censor=censor;
exports.addCensoreWord=addCensoreWord;
exports.getCensoreWord=getCensoreWord;