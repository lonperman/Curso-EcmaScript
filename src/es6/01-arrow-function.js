// Forma normal
function square(num){
    return num*num;
}

console.log(square(3));

// arrow function
const square = (num) => {
    return num*num;
}

console.log(square(3));

// Arrow con el return implicito
const square = num => num*num;

console.log(square(3));