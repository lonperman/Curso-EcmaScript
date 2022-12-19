# ⚙ EcmaScript 6
## 1️⃣ Scope (Alcance de una variable)
   > Las formas de definir una variable en JavaScript como lo son var, let y const, tienen presente un respectivo alcance por lo cual se debe tener presente al momento de ser definidas en el desarrollo de un proyecto.


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
> En la version de ecmaScript 6 contamos con las funciones flecha en donde se agrega una nueva forma de definir una funcion ademas de la forma convencional de como se definen dentro del desarrollo de un proyecto.

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
  > Los templates literals se utilizan para plasmar textos de una manera más dinamica, ya que este nos permite utilizar string y variables dentro de un mismo texto o parrafo dandonos la opcion de cambiar ciertos elementos y ahorrandonos en si, el volver escribir el mismo texto y tener que cambiar ciertas palabras.

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

> Los temple literals nos pueden ahorrar el tener que estar indicandole donde realizar un salto de linea.

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
> Aveces cuando estamos desarrollando un  programa definimos cierta cantidad de parametros los cuales debemos enviarle a una funcion al momento de querer operarla, pero en ocaciones otro desarrollador puede pasar por desapercibido alguno de los argumentos, y esto podria causar que al momento de ejecurtar la funcion, esta arroje un error, pero si utilizamos ciertos valores por defecto en la definicion en nuestras variables podemos ahorranos complicaciones.

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
## 5️⃣ Destructuring, Spread operator, Rest-params.(Destructurar arreglos y objetos,Propagar la informacion)

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
> Metodo que nos permite propagar la informacion sin tener la necesidad de sobreescribirla denuevo.
```
// Spread operator

let person = {name: 'Alejo', age: 25};
let country = 'CO'

let data = { ...person, country};
👨‍💻 console.log(data)
✅ ---> Result: { name: 'Alejo', age: 25, country: 'CO' }
```

> Forma de dispersar la informacion utilizando un spreed como param, a esto se le define rest-spreed.
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
## 6️⃣ Object-literals (Mejora a los objetos)
>Podemos utilizar funciones para que nos devuelvan un objeto con todos los argumentos que les enviamos.

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
> Las promesas se utilizan como los callbacks, los cuales reciben una funcion como parametro, pero en este caso una promesa nos devolvera el valor apartir de una validacion, lo cual podria ser aceptada o rechazada.

> ✅resolve -> Si fue aceptada la validacion.

> ❌reject -> Si fue rechazada la validacion.

```
const anotherFunction = () => {
    return new Promise((resolve,reject) => {
        if(true){
        ✅  resolve('Hey!!')
        } else {
        ❌  reject('Whoooops!')
        }
    })
}
```
> El metodo 🛬 then nos devuelve el resultado de la funcion 👨‍🔧 anotherFunction().
```
anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));

✅ ---> Result: Hey!!
```
## 8️⃣ Clases (Diseño de clases - Utilizando herencia)
> Las clases se han utilizado en distintos lenguajes que utilicen la orientacion a objetos, ya que las clases nos permiten utilizar la herencia en diferentes objetos en donde necesitemos cierto elementos instanciados dentro de la estructura de la clase.

```
//Declarando una clase

👨‍🔧 class User {};

// Instanciando metodos dentro de la clase.

👨‍🔧 class user {
    //metodos
    greeting(){
        return 'Hello';
    }
};

// Instanciando objetos y utilizando los metodos de la clase.

⚓ const gndx = new user();
👨‍💻 console.log(gndx.greeting());
✅ ---> Result: Hello

⚓ const bebeloper = new user();
👨‍💻 console.log(bebeloper.greeting());
✅ ---> Result: Hello

// Utilizando el constructor para inicializar.

👨‍🔧 class user {
    // Constructor
    constructor(){
        console.log('Nuevo Usuario');
    }
    greeting(){
        return 'Hello';
    }
}

⚓ const manuel = new user();
✅ ---> Result: Nuevo Usuario
```
### ⚓ This
> La palabra reservada this, nos sirve como puntero hacia una referencia, en este caso utilizamos this para hacer referencia al elemento padre que contiene la el valor del argumento.

```
// this 
👨‍🔧 class user {
    constructor(name){
        this.name = name; //hace referecnia. 
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

⚓ const Alejo = new user('Alejo');
👨‍💻 console.log(Alejo.greeting());
✅ ---> Result: Hello Alejo
```
### ⚓ Getters & Setters 
> Los metodos Getters & Setters nos permiten obtener el valor de una variable(Getters) y modificar el valor de las variables(Setters).

```
👨‍🔧 class user {
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}}`
    }
    // Getter
    get uAge(){
        return this.age;
    }
    // Setter
    set uAge(n){
        this.age = n;
    }
}

// Instanciando un nuevo objeto
⚓ const bebeloper1 = new user('David', 15);

// Llamando al metodo Getter
👨‍💻 console.log(bebeloper1.uAge);
✅ --> Result: 15

// Llamando al metodo Setter
👨‍💻 console.log(bebeloper1.uAge = 24);
✅ --> Result: 24
```
### 9️⃣ Module (exportar & importar funciones de diferentes archivos)

> Aveces cuando se quiere obtener un codigo mas limpio y segmentado, no el famoso codigo espagueti, se utilizan modulos los cuales son archivos distintos, en donde estan definidas ciertas funciones que pueden ser requeridas para el desarrollo de un programa.

`$ module.js`

```
//Se instancia un metodo o funcion en un archivo diferente.

👨‍🔧 const hello = () => {
    console.log('Hello!');
}

//Se exporta el metodo o la funcion del archivo.

🛫 export default hello;
```

`$ 08-module.js`
```
// Se importa los elementos del otro archivos.
🛬 import hello from "./module.js";

// Se ejecuta el metodo importado

👨‍💻 hello();
✅ ---> Result: Hello!
```

> Se debe configurar el archivo package.json para poder utilizar un modulo.

`$ package.json`
```
{
  "name": "curso-de-ecmascript",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "javascript",
    "ecmascript"
  ],
  "author": "Manuel Perdomo <lonperman@gmail.com>",
  "license": "MIT",
  "type": "module" // ➕ Se agrega el modulo. 
}
```

## 🔟 Generadores
> Los generadores son funciones especiales que pueden pausar su ejecución, luego volver al punto donde se quedaron, recordando su scope y seguir retornando valores.

> Estos se utilizan para guardar la totalidad de datos infinitos, a través de una función matemática a valores futuros. De esta manera ocupan poca memoria, con respecto a si creamos un array u objeto.

### ⚓ Cómo utilizar generadores
> La sintaxis de los generadores comprende lo siguiente:

- La palabra reservada `function*` (con el asterisco al final).
- La palabra reservada `yield` que hace referencia al valor retornado cada vez que se invoque, recordando el valor anterior.
- Crear una variable a partir de la función generadora.
- El método `next` devuelve un objeto que contiene una propiedad `value` con cada valor de `yield`; y otra propiedad `done` con el valor `true` o `false` si el generador ha terminado.

> Si el generador se lo invoca y ha retornado todos sus valores de `yield`, entonces devolverá el objeto con las propiedades `value` con `undefined` y un `done` con `true`.

```
// Declaración

👨‍🔧 function* nombre(parámetros){
    yield (primer valor retornado)
    yield (segundo valor retornado)
    ...
    yield (último valor retornado)

}

//Crear el generador
⚓ const generador = nombre(argumentos)

// Invocacioens

✅ generador.next().value //primer valor retornado
✅ generador.next().value //segundo valor retornado
...
✅ generador.next().value //último valor retornado
```
### ⚓ Ejemplo de un generador
> Creamos un generador que retornara tres valores.

```
👨‍🔧 function* generator(){
    yield 1
    yield 2
    yield 3
}

⚓ const generador = generator()

✅ generador.next().value //1
✅ generador.next().value //2
✅ generador.next().value //3
✅ generador.next() // {value: undefined, done: true}
```

### ⚓ Ejemplo utilizando for.
```
👨‍🔧 function* iterate(array){
    for(let value of array){
        yield value;
    }
}

⚓ const it = iterate(['Alejo','Manuel','Nicolas','Camilo'])

// Invocaciones

👨‍💻 console.log(it.next().value) // ✅ Alejo
👨‍💻 console.log(it.next().value) // ✅ Manuel
👨‍💻 console.log(it.next().value) // ✅ Nicolas
```
## 1️⃣1️⃣ Set
> Set es una nueva estructura de datos para almacenar elementos únicos, es decir, sin elementos repetidos.

### ⚓ Como manipular los Sets
> Para manipular estas estructuras de datos, existen los siguientes métodos:

- `add(value)`: añade un nuevo valor.
- `delete(value)`: elimina un elemento que contiene el `Set`, retorna un booleano si existía o no el valor.
- `has(value)`: retorna un booleano si existe o no el valor dentro del `Set`.
- `celar(value)`: elimina todos los valores del `Set`.
- `size`: retorna la cantidad de elementos del `Set`.


```
\\ ⚓ Se define una instancia.

const list = new Set();

\\ Agregando elementos al elemento Set.

➕ list.add('item 1');
➕ list.add('item 2').add('item 3');

👨‍💻 console.log(list)
✅ ---> Result: Set(3) { 'item 1', 'item 2', 'item 3' }
```

### Como quitar los elementos repetidos.
```
// Array con elementos repetidos.

👨‍🔧 const array = [1, 1, 2, 2, 3, 4, 4, 5]

// Creando nuevo array

👨‍🔧 const sinRepetidos = [... new Set(array)]

👨‍💻 console.log(sinRepetidos)
✅ ---> Result: [ 1, 2, 3, 4, 5 ]
```
# ⚙ EcmaScript 7

## Exponential
> El operador de potenciación (exponential operator) consiste en elevar una base a un exponente utilizando el doble asterisco `(**)`.

> `base ** exponente`

```
👨‍🔧 const data = 3 ** 4;
👨‍💻 console.log(data);
✅ ---> Result: 81 
```
## Includes
> El método `includes` determina si un array o string incluye un determinado elemento. Devuelve `true` o `false`, si existe o no respectivamente.

```
// Utilizando arrays.

👨‍🔧 let numbers = [1, 3, 4, 6, 7, 8];
👨‍💻 console.log(numbers.includes(9));
✅ ---> Result: false

👨‍🔧 const list = ['Oscar','David','Ana'];
👨‍💻 console.log(list.includes('Oscar'));
✅ ---> Result: true
```
### Include para objetos.
> En objetos también existen formas para saber si existe una propiedad.

- La palabra reservada `in`.
- El metodo de objetos `hasOwnProperty`.
- El método `Object.hasOwn`, que recibe el objeto y la propiedad a evaluar.

```
👨‍🔧 const letras = { a: 1, b: 2, c: 3 }

👨‍💻 "a" in letras 
✅ ---> Result: true
👨‍💻 letras.hasOwnProperty("a") 
✅ ---> Result: true
👨‍💻 Object.hasOwn(letras, "a") 
✅ ---> Result: true
```
# ⚙ EcmaScript 8
## 🔧 Object-entries
> `Object.entries()` devuelve un array con las entries en forma `[propiedad, valor]` del objeto enviado como argumento.
```
👨‍🔧 const countries = {MX: 'Mexico', CO: 'Colombia', CL: 'Chile', PE: 'Peru'};

👨‍💻 console.log(Object.entries(countries));
✅ ---> Result ⬇: 
[
  [ 'MX', 'Mexico' ],
  [ 'CO', 'Colombia' ],
  [ 'CL', 'Chile' ],
  [ 'PE', 'Peru' ]
]
```
## 🔧 Object-values
> `Object.values()` devuelve un array con los valores de cada propiedad del objeto enviado como argumento.
```
👨‍🔧 const countries = {MX: 'Mexico', CO: 'Colombia', CL: 'Chile', PE: 'Peru'};

👨‍💻 console.log(Object.values(countries));
✅ ---> Result: [ 'Mexico', 'Colombia', 'Chile', 'Peru' ]
```
## 🔧 Object-keys
> `Object.keys()` devuelve un array con las propiedades `(keys)` del objeto enviado como argumento.
```
👨‍🔧 const countries = {MX: 'Mexico', CO: 'Colombia', CL: 'Chile', PE: 'Peru'};

👨‍💻 console.log(Object.keys(countries));
✅ ---> Result: [ 'MX', 'CO', 'CL', 'PE' ]
```
## ⚓ String padding
> El padding consiste en rellenar un `string` por el principio o por el final, con el carácter especificado, repetido hasta que complete la longitud máxima.

> Este método recibe dos argumentos:

- La longitud máxima a rellenar, incluyendo el `string` inicial.
- El `string` para rellenar, por defecto, es un espacio.

> Si la longitud a rellenar es menor que la longitud del string actual, entonces no agregará nada.

### 🛠 Metodos
#### 🔧 Metodo padStart
> El método `padStart` completa un `string` con otro `string` en el inicio hasta tener un total de caracteres especificado.
```
👨‍🔧 const string = 'Hello';

👨‍💻 console.log(string.padStart(6,'_'));
✅ ---> Result: _Hello

👨‍💻 console.log(string.padStart(10,'foo'));
✅ ---> Result: foofoHello

👨‍💻 console.log(string.padStart(6,'123456'));
✅ ---> Result: 123Hello
```
### 🔧 Metodo padEnd
> El método padEnd completa un string con otro string en el final hasta tener un total de caracteres especificado.
```
👨‍🔧 const string = 'Hello';
👨‍💻 console.log(string.padEnd(8,'123456'));
✅ ---> Result: Hello123

👨‍💻 console.log(string.padEnd(10,'123456'));
✅ ---> Result: Hello12345

👨‍💻 console.log(string.padEnd(6,'123456'));
✅ ---> Result: Hello1
```
## ⚓ Trailing commas
> Las trailing commas consisten en comas al final de objetos o arrays que faciliten añadir nuevos elementos y evitar errores de sintaxis.
```
👨‍🔧 const array = [24,34,25,26,,,,45]; //📢 Trailing commas

👨‍💻 console.log(array);
✅ ---> Result: [ 24, 34, 25, 26, <3 empty items>, 45 ]
👨‍💻 console.log(array.length);
✅ ---> Result: 8
```

## ⚓ Funciones asíncronas
> Es otra forma de ejecutar funciones, pero esta presente una particularidad, ya que se ejecutara la funcion pero al utilizar `await` en una proemsa la funcion que tiene el `async` estara pendiente de la respuesta que le devuelva.

### Como utilizar funciones asíncronas
> La función asíncrona se crea mediante la palabra reservada `async` y retorna una promesa.
```
👨‍🔧 async function asyncFunction () {...}

👨‍🔧 const asyncFunction = async () => { ... } 
```
> La palabra reservada await significa que espera hasta que una promesa sea resuelta y solo funciona dentro de una función asíncrona. Los bloques try / catch sirven para manejar si la promesa ha sido resuelta o rechazada.

```
👨‍🔧 async function asyncFunction () {
  try {
    const response = await promesa()
    return response
  } catch (error) {
    return error
  }
}
```
> ¿Cuál es la mejor forma de manejar promesas, then o async / await? Ambas son muy útiles, manejar ambas te hará un mejor desarrollador.

### 👨‍💻 Ejemplo Async-Await
```
👨‍🔧 const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) 
            ? setTimeout(() => resolve('AsynC'),2000) 
            : reject(new Error('Error!'));
    });
}

👨‍🔧 const anotherFn = async () => {
 ⏳ const somethig = await fnAsync();
    console.log(somethig);
    console.log('Hello!');
}

👨‍💻 anotherFn();
✅ ---> Result: AsynC Hello!
```