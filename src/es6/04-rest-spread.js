// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a,b] = fruits;
console.log(a, fruits[1]);

// Object destructuring

let user = { username: 'Manuel', age: 24};
let { username, age } = user;
console.log(username, user.age)

// spread operator

let person = {name: 'Alejo', age: 25};
let country = 'CO'

let data = { ...person, country};
console.log(data)

// rest

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1,1,2,3,4)