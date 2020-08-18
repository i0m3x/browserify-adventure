// his is a less common way of exporting functionality but is
// still useful in some circumstances, such as a protocol with `.parse()` and
// `.stringify()` functions which are the inverses of each other.

// For this level, call `prompt()` twice from your entry file to obtain 2
// values: the first is a string you should parse into an array of objects and
// the second value is an array you sh

exports.parse= function (str) {
    return str.split('\n').map(JSON.parse)
}

exports.stringify = function (rows) {
    return rows.map(JSON.stringify).join('\n')
}