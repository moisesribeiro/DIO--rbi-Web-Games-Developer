// utilizando reduce para somar

function somarValores(arr) {
    return arr.reduce(function(prev, current) {
        console.log({prev});
        console.log({current});
        return prev + current;
    }, 0);
}

const arrInicial = [1, 2, 3];

console.log(somarValores(arr));

