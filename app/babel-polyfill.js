'use strict';

let arrayLike = {

    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
console.log(Array.from(arrayLike));

var promise = new Promise(function (resolve, reject) {

    var flag = 1;

    if (flag) {
        resolve(value);
    } else {
        reject(error);
    }
});

var set = new Set([1, 2, 3, 4, 4])
console.log([...set]);

class Calc {
    constructor() {
        console.log('Calc constructor');
    }

    add(a, b) {
        return a + b;
    }
}
var c = new Calc();
console.log(c.add(4, 5));