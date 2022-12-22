const entries = new Map([["name", "manuel"],["age", 25]]);
console.log(entries);
console.log(Object.fromEntries(entries));


const arrayEntries = [
    [ 'name', 'Manuel' ],
    [ 'email', 'lonper@correo.com' ],
    [ 'age', 25 ]
  ] 
  
  const usuario = Object.fromEntries(arrayEntries) 
  
  console.log(usuario)