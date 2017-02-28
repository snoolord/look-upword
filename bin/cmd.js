const lookUpword = require('../')
const minimist = require('minimist')

const argv = minimist(process.argv.slice(2), {
  boolean: ['word'],
  alias: {
    w: 'word'
  }
})

if (argv.word) {
    console.log("hello")
} else {
    console.log("bye")
}
