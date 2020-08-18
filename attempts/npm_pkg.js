const ndjson = require('./ndjson.js')

//first is a string you should parse into an array of objects
ndjson.parse(prompt())

//2nd value is an array you should serialize back into a string
ndjson.stringify(prompt())

//question I asked Yahya Hafez and Mike - why are we parsing twice? we are not, it's just the name of the export