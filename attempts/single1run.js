//rename this to uniquely.js
var uniq = require('uniq');

module.exports = function (str) {
  return uniq(str.split(','));
};


// const uniq = require('uniq')

// module.exports = function(str) {
//     return uniq(str.split(','))
// }


// const uniq = require('uniq')

// const getString = (answer) => {
//     return uniq(answer.split(','))
    
// }

// getString.exports = getString;

// RESULT: TAP version 13
// # (anonymous)
// ok 1 3 files in the bundle
// ok 2 should be equal
// ok 3 relative require
// ok 4 prompt() should be called in your entry file
// ok 5 uniquely requires the `uniq` module

// /Users/8tutor/Documents/node_modules/falafel/node_modules/esprima/esprima.js:3831
//             throw e;
//             ^


// const uniq = require('uniq')

// const answer = prompt('enter a value')




// const getString = () => {
//     return uniq(answer.split(','))
    
// }

// getString.exports = getString;

//RESULT:
// # (anonymous)
// ok 1 3 files in the bundle
// ok 2 should be equal
// ok 3 relative require
// not ok 4 prompt() should be called in your entry file
//   ---
//     operator: ok
//     expected: true
//     actual:   false
//     at: ConcatStream.<anonymous> (/Users/8tutor/Documents/node_modules/concat-stream/index.js:37:43)
//   ...
// ok 5 uniquely requires the `uniq` module