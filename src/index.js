var keys = require("keys"),
    isArrayLike = require("is_array_like");


module.exports = reverse;


function reverse(object) {
    return isArrayLike(object) ? reverseArray(object) : reverseObject(Object(object));
}

function reverseArray(array) {
    var i = array.length,
        results = new Array(i),
        j = 0;

    while (i--) {
        results[j++] = array[i];
    }

    return results;
}

function reverseObject(object) {
    var objectKeys = keys(object),
        i = -1,
        il = objectKeys.length - 1,
        results = {},
        key;

    while (i++ < il) {
        key = objectKeys[i];
        results[object[key]] = key;
    }

    return results;
}
