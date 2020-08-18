const ndjson = require('./ndjson.js')

console.log(ndjson.parse(prompt()))
console.log(ndjson.stringify(prompt()))

//access it like a key for an obj

//dot notation access