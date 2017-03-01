var lookUpword = require('../look-upword').lookUpword

describe('basic upword', function () {
    var callbacks = {
        suggestionCallback: function (res) {
            console.log(res)
        },
        wordsCallback: function (res) {
            console.log(res)
        }
    }
    beforeEach(function (done) {
        spyOn(callbacks, 'wordsCallback').and.callThrough()
        lookUpword('?key=0b966b02-dd99-4a31-a735-2206edb9a8a5', 'value', callbacks.suggestionCallback, callbacks.wordsCallback, done)
    })
    
    it('returns words', function () {
        // callbacks.wordsCallback('loud')
        expect(callbacks.wordsCallback.calls.any()).toEqual(true)
    })
})
