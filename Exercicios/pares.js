// utilizando map para filtrar

function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1 , 0 , 35, 42, 9, 64];

console.log(filtraPares(meuArray));