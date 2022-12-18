function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate(['Alejo','Manuel','Nicolas','Camilo'])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
