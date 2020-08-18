// export a `parse()` and `stringify()`
// function by assigning properties onto the `exports` object.

exports.parse = function(str){
    return str.split('\n').map(JSON.parse)
}

exports.stringify = function(rows){
    return rows.map(JSON.stringify).join('\n')
}

// TAP version 13
// # (anonymous)
// ok 1 >= 2 files in the bundle
// ok 2 should be equal
// ok 3 relative require
// ok 4 prompt() should be called in your entry file
// #########################################
// ###   YOUR SOLUTION IS NOT CORRECT!   ###
// #########################################


// ok 5 prompt() should not be called in your ndjson file