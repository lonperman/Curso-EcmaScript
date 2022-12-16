## 1️⃣ Scope (Alcance de una variable)
   ### Las formas de definir una variable en JavaScript como lo son var, let y const, tienen presente un respectivo alcance por lo cual se debe tener presente al momento de ser definidas en el desarrollo de un proyecto.


```
const fruits = () => {
    if(true){
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
    }

    console.log(fruit1); // La variable var se imprime
    console.log(fruit2); // variable let no se imprime por su respectivo scope
    console.log(fruit3) //variable const no se imprime por su respectivo scope
}

👨‍💻 fruits()

✅ ---> Result: 1️⃣ Console.log(fruit1) => Apple
❌ ---> Result: 2️⃣ Console.log(fruit2) => fruit2 is not defined.
❌ ---> Result: 3️⃣ Console.log(fruit3) => fruit3 is not defined.

```

## 2️⃣ Arrow Functions (Funciones Flecha)
   ### En la version de ecmaScript 6 contamos con las funciones flecha en donde se agrega una nueva forma de definir una funcion ademas de la forma convencional de como se definen dentro del desarrollo de un proyecto.

```
// Forma normal de definir una funcion.

function square(num){
    return num*num;
}

👨‍💻 ---> console.log(square(3));
✅ ---> Result: 9
```

```
// Forma de definir una funcion como arrow-function.

const square = (num) => {
    return num*num;
}

👨‍💻 ---> console.log(square(3));
✅ ---> Result: 9

// Arrow con el return implicito

const square = num => num*num;

👨‍💻 ---> console.log(square(3));
✅ ---> Result: 9
```
## 3️⃣ Template Literals (Uso de strings y variables)
  ### Los templates literals se utilizan para plasmar textos de una manera más dinamica, ya que este nos permite utilizar string y variables dentro de un mismo texto o parrafo dandonos la opcion de cambiar ciertos elementos y ahorrandonos en si, el volver escribir el mismo texto y tener que cambiar ciertas palabras.

```
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!';

// Forma normal.
👨‍💻 console.log(epicPhrase);
✅ ---> Result: Hello World!

// Template Literals
let epicPhrase2 = `${hello} ${world}`;

👨‍💻 console.log(epicPhrase2)
✅ ---> Result: Hello World
```

### Los temple literals nos pueden ahorrar el tener que estar indicandole donde realizar un salto de linea.

```
// Multi-line strings
let lorem = 'esto es un string \n' + 'esto es otra linea';

// Temple-literal
let lorem2 = `Esta es una frase epica
 la continuacion de esa frase epica.`;

👨‍💻 console.log(lorem);
👨‍💻 console.log(lorem2)

✅ ---> esto es un string 
        esto es otra linea // 1️⃣ Primer console

✅ ---> Esta es una frase epica
        la continuacion de esa frase epica. // 2️⃣ Segundo console.
```

## 4️⃣ Default-params. (Definicion de parametros con valor por defecto)
### Aveces cuando estamos desarrollando un  programa definimos cierta cantidad de parametros los cuales debemos enviarle a una funcion al momento de querer operarla, pero en ocaciones otro desarrollador puede pasar por desapercibido alguno de los argumentos, y esto podria causar que al momento de ejecurtar la funcion, esta arroje un error, pero si utilizamos ciertos valores por defecto en la definicion en nuestras variables podemos ahorranos complicaciones.

```
// Forma normal de definir variables por defecto.

function newUser(name, age, country){
    var name = name || 'Manuel';
    var age = age || 25;
    var country = country || 'CO';
    console.log(name, age, country);
}

👨‍💻 newUser(); 
✅ ---> Result: Manuel 25 CO

👨‍💻 newUser('Alejo',25,'CO');
✅ ---> Result: Alejo 25 CO
```

```
//Forma de definir por defecto los parametros desde su construccion.

function newAdmin(name = 'Manuel', age = 25, country = 'CL'){
    console.log(name, age, country);
}

👨‍💻 newAdmin();
✅ ---> Result: Alejo 25 CO
```
## 5️⃣ Destructuring, Spread operator, Rest-params.(Destructurar arreglos y objectos,Propagar la informacion)

```
// Arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a,b] = fruits;
👨‍💻 console.log(a, fruits[1]);
✅ ---> Result: Apple Banana

// Object destructuring

let user = { username: 'Manuel', age: 24};
let { username, age } = user;
👨‍💻 console.log(username, user.age)
✅ Result: Manuel 24
```
### Metodo que nos permite propagar la informacion sin tener la necesidad de sobreescribirla denuevo.
```
// Spread operator

let person = {name: 'Alejo', age: 25};
let country = 'CO'

let data = { ...person, country};
👨‍💻 console.log(data)
✅ ---> Result: { name: 'Alejo', age: 25, country: 'CO' }
```

### Forma de dispersar la informacion utilizando un spreed como param, a esto se le define rest-spreed.
```
// Rest-spread

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

👨‍💻 sum(1,1,2,3,4)
✅ ---> Result: [ 1, 2, 3, 4 ] 2 => retorna: 2
```
## 6️⃣ Object-literals (Mejora a los objectos)
### Podemos utilizar funciones para que nos devuelvan un objecto con todos los argumentos que les enviamos.

```
function newUser(user, age, country, uId){
    return {
        user,
        age,
        country,
        uId
    }
}

👨‍💻 console.log(newUser("lonper", 25, "CO", 1))
✅ ---> Result: { user: 'lonper', age: 25, country: 'CO', uId: 1 }
```

## 7️⃣ Promises (Algo que va a suceder o no).
### Las promesas se utilizan como los callbacks, los cuales reciben una funcion como parametro, pero en este caso una promesa nos devolvera el valor apartir de una validacion, lo cual podria ser aceptada o rechazada.

### ✅resolve -> si fue aceptada la validacion.
### ❌reject -> Si fue rechazada la validacion.

```
const anotherFunction = () => {
    return new Promise((resolve,reject) => {
        if(true){
            resolve('Hey!!')
        } else {
            reject('Whoooops!')
        }
    })
}
```
### El metodo then nos devuelve el resultado de la funcion anotherFunction().
```
anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));

✅ ---> Result: Hey!!
```
