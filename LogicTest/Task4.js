let a = 3;
let b = 7;

function value() {
    var x = a
    a = b ;
    b = x;
    return [a, b];
}

console.log(value());

