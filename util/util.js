// const mergeOptions = function(obj1,obj2){
//     var obj3 = {};
//     for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
//     for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
//     return obj3;
// }
'use strict';

var axios = require('axios');

exports.convertXMLResultsToWords = function(word, result) {
    var words = JSON.parse(JSON.stringify(result)).entry_list.entry;
    var wordsWithFieldsParsed = [];
    for (var i = 0; i < words.length; i++) {
        let currWord = {word: word};
        for (let j = 0; j < words[i].sens.length; j++) {
            currWord.partOfSpeech = words[i].fl[0];
            currWord.definition = words[i].sens[j].mc[0];
            currWord.synonyms = returnArrayOfStrings(words[i].sens[j].syn)[0].split(', ');
            currWord.related = returnArrayOfStrings(words[i].sens[j].rel)[0].split(', ');
            wordsWithFieldsParsed.push(JSON.parse(JSON.stringify(currWord)));
        }
    }
    return wordsWithFieldsParsed;

}
