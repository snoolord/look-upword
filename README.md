# look-upword

Converts XML data from Webster API into JSON. Words are separated by part of speech and definition.

# Install
> npm install --save look-upword

# Getting Started
> lookUpword(apiKey, queryString, suggestionCallback, wordsCallback, done)

apiKey: API key from Webster at http://www.dictionaryapi.com/

queryString: word that is being looked up

suggestionCallback: callback for when there is a typo or the word can't be found. Takes one argument which is the result JSON from Webster in the form of:

```
{
    word: queryString,
    related: ['related', 'words', 'in', 'an', 'array']
}

```
wordsCallback: callback when the word is found. Also takes one argument which is the result JSON from Webster in the for of:
```
{
    [
        {
            word: queryString,
            partOfSpeech: 'one of the part of speeches of the query string',
            definition: 'the definition of the query string',
            synonyms: ['some', 'of', 'the', 'synonyms'],
            related: ['words', 'that', 'are', 'related']
        },
        {
            word: queryString,
            partOfSpeech: 'another of the part of speeches of the query string',
            definition: 'another definition of the query string',
            synonyms: ['some', 'of', 'the', 'other', 'synonyms'],
            related: ['words', 'that', 'are', 'related', 'to', 'this', 'other', 'definition']
        },
    ]
}
```
Words can have multiple parts of speech and multiple definitions for the same part of speech! Each definition will be available in the resulting JSON.

done (optional): callback function that is called after either wordsCallback or suggestionCallback is called.  (beware of suggestionCallback or wordsCallback being async)

# Trying look-upword

1. Sign up for an API key at http://www.dictionaryapi.com/
2. Create a new directory & npm init & create index.js
> mkdir look-upword-example
> cd look-upword-example
> npm init
> touch index.js

3. Install look-upword
> npm install --save look-upword

4. Require look-upword in your index file

~~~~
var { lookUpword } = require('look-upword') (ES5)


import { lookUpword } from 'look-upword' (ES6)
~~~~

5. Write a wordsCallback and a suggestionCallback

~~~~
var wordsCallback = function (res) {
    console.log(res)
}

var suggestionCallback = function (res) {
    console.log(res)
}
~~~~

6. Call the function at the bottom of the file
> lookUpword('apiKey', 'word-you-want-to-look-up', wordsCallback, suggestionCallback)

7. Then run the file
> node index

8. See output in terminal
