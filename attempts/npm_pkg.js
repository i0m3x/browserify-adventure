
// `require('uniq')` returns a `uniq(xs)` function that removes duplicate
// items from an array input `xs`.

// You will also need `prompt()`, a built in function available to browsers that
// asks the user to enter some text, and returns a string.

// For this level, use `prompt()` to fetch a string. Split the string that
// `prompt()` returns by commas (`str.split(',')` returns a separated array of
// strings) and run this array through `uniq()` to discard repeated items.
// Use `console.log()` to print the resulting uniq array.

const uniq = require('uniq')
const answer = prompt('enter a value')

console.log(uniq(answer.split(',')))

