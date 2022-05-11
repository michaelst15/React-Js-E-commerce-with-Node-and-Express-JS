let a = 3;
let b = 7;

function value() {
    [a, b] = [b, a]
    return [a, b];
}

console.log(value());

