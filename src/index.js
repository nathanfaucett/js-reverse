var isArrayLike = require("is_array_like"),
    arrayReverse = require("array-reverse"),
    objectReverse = require("object-reverse");


module.exports = reverse;


function reverse(value) {
    return isArrayLike(value) ? arrayReverse(value) : objectReverse(Object(value));
}
