var lookUpword = require('../look-upword').lookUpword

var callbacks = {
    suggestionCallback: function (res) {
    },
    wordsCallback: function (res) {
    }
}
describe('succesfully gets the word "value" and calls the wordsCallback', function () {
    beforeEach(function (done) {
        spyOn(callbacks, 'wordsCallback').and.callThrough()
        lookUpword('?key=0b966b02-dd99-4a31-a735-2206edb9a8a5', 'value', callbacks.suggestionCallback, callbacks.wordsCallback, done)
    })

    it('returns words', function () {
        // callbacks.wordsCallback('loud')
        expect(callbacks.wordsCallback.calls.any()).toEqual(true)
    })
})

describe('when looking up a word fails it will call the suggestionCallback', function () {
    beforeEach(function (done) {
        spyOn(callbacks, 'suggestionCallback').and.callThrough()
        lookUpword('?key=0b966b02-dd99-4a31-a735-2206edb9a8a5', 'imgur', callbacks.suggestionCallback, callbacks.wordsCallback, done)
    })

    it('returns words', function () {
        // callbacks.wordsCallback('loud')
        expect(callbacks.suggestionCallback.calls.any()).toEqual(true)
    })
})
