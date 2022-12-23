**Table of Content**

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
👨‍🔧 let lorem = 'esto es un string \n' + 'esto es otra linea';

// Temple-literal
👨‍🔧 let lorem2 = `Esta es una frase epica
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

👨‍🔧 function newUser(name, age, country){
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
✅ ---> Result: Manuel 24
```
> Metodo que nos permite propagar las propiedades sin tener la necesidad de sobreescribirla denuevo los datos ✏.
```
// Spread operator

let person = {name: 'Alejo', age: 25};
let country = 'CO'

let data = { ...person, country};
👨‍💻 console.log(data)
✅ ---> Result: { name: 'Alejo', age: 25, country: 'CO' }
```

### 💾 Crear copias de objetos utilizando las propiedades de propagación

> Semejante a crear copias de arrays utilizando el operador de propagación, se puede realizar copias de objetos **en un solo nivel** mediante las propiedades de propagación.
> De esta manera el segundo objeto tendrá una referencia en memoria diferente al original.
```
👨‍🔧 const objetoOriginal = {a: 1, b: 2}
👨‍🔧 const objetoReferencia = objetoOriginal
👨‍🔧 const objetoCopia = {...objetoOriginal}

✅ objetoReferencia === objetoOriginal // true
✅ objetoOriginal === objetoCopia // false
```
> El operador de propagación sirve para crear una copia en un solo nivel de profundidad, esto quiere decir que si existen objetos o arrays dentro de un objeto a copiar. Entonces los sub-elementos en cada nivel, tendrán **la misma referencia en la copia y en el original.**
```
👨‍🔧 const original = { datos: [1, [2, 3], 4, 5] }
👨‍🔧 const copia = { ...original }

✅ original === copia // false
✅ original["datos"] === copia["datos"] // true
```
> Forma de dispersar las propiedades utilizando un spreed como param, a esto se le define rest-spreed.
```
// Rest-spread

👨‍🔧 function sum(num, ...values){
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
👨‍🔧 function newUser(user, age, country, uId){
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
👨‍🔧 const anotherFunction = () => {
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
👨‍🔧 anotherFunction()
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

## 1️⃣2️⃣ Exponential
> El operador de potenciación (exponential operator) consiste en elevar una base a un exponente utilizando el doble asterisco `(**)`.

> `base ** exponente`

```
👨‍🔧 const data = 3 ** 4;
👨‍💻 console.log(data);
✅ ---> Result: 81 
```
## 1️⃣3️⃣ Includes
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
# ⚙ EcmaScript 9
## ⚓ Expresiones regulares
> Las expresiones regulares o RegEx (regular expresions) son **patrones de búsqueda y manipulación de cadenas de caracteres** increíblemente potente y están presentes en todos los lenguajes de programación.
> En JavaScript se crea este patrón entre barras inclinadas (/patrón/) y se utiliza métodos para hacer coincidir la búsqueda.
```
👨‍🔧 const regex = /(\d{4})-(\d{2})-(\d{2})/;
👨‍💻 const matchers = regex.exec('2022-01-01')
👨‍💻 console.table(matchers);
✅ ---> Result: 
┌─────────┬──────────────┐
│ (index) │    Values    │
├─────────┼──────────────┤
│    0    │ '2022-01-01' │
│    1    │    '2022'    │
│    2    │     '01'     │
│    3    │     '01'     │
│  index  │      0       │
│  input  │ '2022-01-01' │
│ groups  │  undefined   │
└─────────┴──────────────┘
```
## ⚓ Método finally en promesas
> El método `finally` para promesas consiste en ejecutar código después que una promesa haya sido ejecutada como resuelta o rechazada.
```
👨‍🔧 promesa()
    .then(response => console.log(response) //✅ Promesa resuelta
    .catch(error => console.log(response) //✅ Promesa rechazada
    .finally( () => console.log("Finalizado") ) //✅ Código final  
```
## ⚓ Generadores asíncronos
> Los generados asíncronos son semejantes a los generadores que ya conoces, pero combinando sintáxis de promesas.
```
👨‍🔧 async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

👨‍🔧 const other = anotherGenerator();
👨‍💻 other.next().then(response => console.log(response.value));
👨‍💻 other.next().then(response => console.log(response.value));
👨‍💻 other.next().then(response => console.log(response.value));
👨‍💻 console.log('Hello!')
✅ ---> Result: 🔽
                Hello!
                1
                2
                3
```
### Cómo utilizar for await
> De la misma manera, `for await` es un ciclo repetitivo que se maneja asíncronamente. El ciclo siempre debe estar dentro de una función con `async`.
```
👨‍🔧 async function forAwait() {
  const nombres = ["Alexa", "Oscar", "David"]
  for await (let valor of nombres) {
    console.log(valor)
  }
}

👨‍💻 forAwait()
✅ ---> Result: 🔽
                Alexa
                Oscar
                David
```
# ⚙ EcmaScript 10
## 🛠 flat-map y trimStart-trimEnd
### 💡 Qué es el aplanamiento de arrays
> El aplanamiento consiste en transformar un array de arrays a una sola dimensión. Los métodos `flat` y `flatMap` permitirán realizar el aplanamiento.

### 🔧 Metodo flat
> El método flat devuelve un array donde los sub-arrays han sido propagados hasta una profundidad especificada.

> Este método es inmutable, es decir, retorna un nuevo array con los cambios y no cambia el array original.

> Este método recibe un argumento:

- La profundidad del aplanamiento, por defecto, tiene un valor de 1.

> Si se desea aplanar todos los sub-arrays en una sola dimensión, utiliza el valor de `Infinity`.
```
👨‍🔧 const array = [1,2,[3,4],5,6]
👨‍💻 const result = array.flat() 
✅ ---> result: [1,2,3,4,5,6]

👨‍🔧 const array2 = [1, 2, [3, 4, [5, 6]]];
👨‍💻 const result2 = array2.flat() 
✅ ---> result2: [1, 2, 3, 4, [5, 6]]

👨‍🔧 const array3 = [1, 2, [3, 4, [5, 6]]]
👨‍💻 const result3 = array3.flat(2) 
✅ ---> result3: [1, 2, 3, 4, 5, 6]

👨‍🔧 const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
👨‍💻 const result4 = array4.flat(Infinity) 
✅ ---> result4: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
### 🔧 Método flatMap
> El método `flatMap` es una combinación de los métodos `map` y `flat`. Primero realiza la iteración de los elementos del `array` (como si fuera `map`), y después los aplana en una sola profundidad (como si fuera `flat`).

> Este método es inmutable, es decir, retorna un nuevo array con los cambios y no cambia el array original.

> Este método recibe los mismos argumentos que el método map.
```
👨‍🔧 const strings = ["Nunca pares", "de Aprender"]
👨‍💻 strings.map(string => string.split(" ")) 
✅ ---> Result: [ [ 'Nunca', 'pares' ], [ 'de', 'Aprender' ] ]
👨‍💻 strings.flatMap(string => string.split(" ")) 
✅ ---> Result: [ 'Nunca', 'pares', 'de', 'Aprender' ]

👨‍🔧 const numbers = [1,2, 3, 4]
👨‍💻 numbers.map(number => [number * 2]) 
✅ ---> Result: [[2], [4], [6], [8]]
👨‍💻 numbers.flatMap(number => [number *2]) 
✅ ---> Result: [2, 4, 6, 8]

📢 Cuidado, primero hace el map y luego el flat
👨‍🔧 const numbers2 = [1,[2,3], 4, 5]
👨‍💻 numbers2.flatMap(number => [number *2]) 
✅ ---> Result: [ 2, NaN, 8, 10 ]
```
### 🧹 Eliminar espacios en blanco de un string
> Existen tres métodos para eliminar espacios en blanco de un string:

- El método `trim` elimina los espacios en blanco al **inicio y al final**.
- El método `trimStart` o `trimLeft` elimina los espacios al **inicio**.
- El método `trimEnd` o `trimRight` elimina los espacios al **final**.
```
👨‍🔧 const saludo = "      hola      "
👨‍💻 const result1 = saludo.trim()
👨‍💻 const result2 = saludo.trimStart()
👨‍💻 const result3 = saludo.trimEnd()

✅ ---> result1: 'hola'
✅ ---> result2: 'hola      '
✅ ---> result3: '      hola'
```
# 🛠 try catch y fromEntries
## 🔧 Parámetro opcional de catch
> El parámetro opcional de `catch` permite omitir el error si es necesario.
```
try {
  // 📢 Manejar el código
} catch (err) {
  // 💡 Se utiliza el parámetro `err`
}

try {
  // 📢 Manejar el código
} catch {
  // 💡 Manejar el error sin el parámetro.
}
```
> 💡 Aunque siempre es recomendable manejar el error como parámetro, ya que tiene más información del problema.

## 🔧 Cómo transformar un array de arrays en un objeto.

> El método `Object.fromEntries` devuelve un objeto a partir de un array donde sus elementos son las entries en forma `[propiedad, valor]`.

> Se considera la operación inversa de `Object.entries()`.
```
👨‍🔧 const arrayEntries = [
  [ 'name', 'Manuel' ],
  [ 'email', 'lonper@correo.com' ],
  [ 'age', 25 ]
] 

👨‍💻 const usuario = Object.fromEntries(arrayEntries) 

👨‍💻 console.log(usuario)
✅ ---> Result: { name: 'Manuel', email: 'lonper@correo.com', age: 25 }
```
# EcmaScript 11
## 🛠 Optional chaining
> Cuando intentas acceder a propiedades de un objeto que no existen, JavaScript te retornará `undefined`.
```
👨‍🔧 const usuario = {}
👨‍💻 console.log(usuario.redes)
❌ ----> Result: undefined
```
> Al acceder a una propiedad más profunda de un objeto, que previamente fue evaluada como undefined, el programa se detendrá y mostrará un error de tipo.
```
👨‍🔧 const usuario = {}
👨‍💻 console.log(usuario.redes.facebook) 
❌ ---> TypeError: Cannot read properties of undefined (reading 'facebook')
```
> Es como intentar ejecutar `undefined.facebook`, lo cual es un error de tipo, debido a que `undefined` es un primitivo, no es un objeto.
### 💡🔧 Cómo utilizar el encadenamiento opcional
> El encadenamiento opcional u optional chaining `(?.)` detiene la evaluación del objeto cuando el valor es `undefined` o `null` antes del `(?.)`, retornando `undefined` sin detener el programa por un error.
```
👨‍🔧 const usuario = {}
👨‍💻 console.log(usuario.redes?.facebook) 
✅ ---> Result: undefined
```
> Pero, ¿por qué usaría propiedades de un objeto vacío? Cuando realizas **peticiones**, el objeto no contiene la información solicitada en seguida, por ende, necesitas que el **programa no colapse** hasta que lleguen los datos y puedas utilizarlos.
### 💡 No abuses del encadenamiento opcional
> **El encadenamiento opcional se debe utilizar únicamente cuando probablemente un valor no exista.**
> Por ejemplo, en un objeto `usuario` que siempre existe, pero la propiedad `redes` es opcional, entonces se debería escribir `usuario.redes?.facebook` y no `usuario?.redes?.facebook`.

> Si abusas del encadenamiento opcional y existe un error en un objeto, el programa podría **“ocultarlo”** por un `undefined`, provocando que el debugging sea más complicado.

## 🛠 BigInt y Nullish
### 🔧 Big Int, enteros muy grandes
> El nuevo dato primitivo `bigint` permite **manejar números enteros muy grandes**. Existen dos formas de crear un `bigint`: el número entero seguido de `n` o mediante la función `BigInt`.
```
👨‍🔧 const number1 = 45n
👨‍🔧 const number2 = BigInt(45)

👨‍💻 console.log(typeof 45n) 
✅ ---> Result: 'bigint'
```
> JavaScript tiene límites numéricos, un máximo `Number.MAX_SAFE_INTEGER` y un mínimo `Number.MIN_SAFE_INTEGER`.

```
👨‍🔧 const max = Number.MAX_SAFE_INTEGER
👨‍🔧 const min = Number.MIN_SAFE_INTEGER

👨‍💻 console.log(max)  ✅ ---> Result: 9007199254740991
👨‍💻 console.log(min)  ✅ ---> Result: -9007199254740991
```
> **Después de los límites, los cálculos muestran resultados erróneos**. Los `bigint` ayudan a manejar operaciones de enteros fuera de los límites mencionados.
```
👨‍🔧 const increment = 2
👨‍🔧 const number = Number.MAX_SAFE_INTEGER + increment
👨‍🔧 const bigInt = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(increment)

👨‍💻 console.log(number) ✅ ---> Result: 9007199254740992
👨‍💻 console.log(bigInt) ✅ ---> Result: 9007199254740993n
```
> Se añade la misma cantidad a ambos tipos de datos, sin embargo, el tipo numérico da un resultado diferente al esperado.

### 🔧 Operador Nullish Coalescing
> El operador nullish coalescing (`??`) consiste en evaluar una variable si es `undefined` o `null` para asignarle un valor.

> El siguiente ejemplo se lee como: `¿usuario.name` es `undefined` o `null`? Si es así, asígnale un valor por defecto `"Alejo"`, caso contrario asigna el valor de `usuario.name`.
```
👨‍🔧 const usuario1 = {}
👨‍💻 const nombre1 = usuario1.name ?? "Alejo"

👨‍🔧 const usuario2 = {name: "Nicolas"}
👨‍💻 const nombre2 = usuario2.name ?? "Alejo"

👨‍💻 console.log(nombre1) ✅ ---> Result: 'Alejo' 
👨‍💻 console.log(nombre2) ✅ ---> Result: 'Nicolas'
```
### 💡 Diferencia entre el operador OR y el Nullish coalescing

> El operador OR (`||`) **evalúa un valor falsey**. Un valor falsy es aquel que es falso en un contexto booleano, estos son: `0`, `""` (string vacío), `false`, `NaN`, `undefined` o `null`.

> Puede que recibas una variable con un valor falsy que necesites asignarle a otra variable, que no sea `null` o `undefined`. Si evalúas con el operador OR, este lo cambiará, provocando un resultado erróneo.
```
👨‍🔧 const id = 0

👨‍🔧 const orId = id || "Sin id"
👨‍🔧 const nullishId = id ?? "Sin id"

👨‍💻 console.log( orId ) ❌ ---> Result: 'Sin id'
👨‍💻 console.log( nullishId ) ✅ ---> Result: 0
```
## 🛠 Promise.allSettled
> En alguna situación necesitarás manejar varias **promesas** y obtener sus resultados. ¿Cómo? Utilizando los métodos `Promise.all` y `Promise.allSettled`.

### 🔧 Promise.all
> El método `Promise.all` sirve para manejar varias promesas al mismo tiempo. Recibe como argumento un array de promesas.
```
👨‍🔧 Promise.all([promesa1, promesa2, promesa3])
        .then(respuesta => console.log(respuesta))
        .catch(error => console.log(error))
```
> El problema es que `Promise.all()` se resolverá, si y solo si **todas las promesas fueron resueltas**. Si al menos una promesa es rechazada, `Promise.all` será rechazada.

### 🔧 Promise.allSettled
> `Promise.allSettled()` permite manejar varias promesas, que devolverá un array de objetos con el **estado y el valor de cada promesa, haya sido resuelta o rechazada**.

```
👨‍🔧 const promise1 = new Promise((resolve, reject) => reject("Rechazada"));
👨‍🔧 const promise2 = new Promise((resolve, reject) => resolve("Resuelta"));
👨‍🔧 const promise3 = new Promise((resolve, reject) => resolve("Resuelta 2"));

👨‍💻 Promise.allSettled([promise1, promise2, promise3])
        .then(response => console.log(response));

✅ ---> Result:
    [
        { status: 'rejected', reason: 'Rechazada' },
        { status: 'fulfilled', value: 'Resuelta' },
        { status: 'fulfilled', value: 'Resuelta 2' }
    ]
```
> ¿Debería usar `Promise.allSettled` en lugar de `Promise.all`? No, porque ambas son muy útiles dependiendo cómo quieras **manejar tus promesas**.

## 🛠 globalThis y matchAll.
### 🔧 Objeto global para cualquier plataforma
> El motor de JavaScript, aquel que compila tu archivo y lo convierte en código que entiende el computador, **al iniciar la compilación crea un objeto global**.

> **El objeto global proporciona funciones y variables propias e integradas en el lenguaje o el entorno**. Dependiendo la plataforma, este objeto global tendrá un nombre diferente.

> En el navegador el objeto global es `window`, para Node.js es `global`, y así para cada entorno. Sin embargo, en Node.js no podrás acceder a `window`, ni en el navegador podrás acceder a `global`.

> Para estandarizar el objeto global se creó `globalThis`, un objeto compatible para cualquier plataforma.

```
// Ejecuta el siguiente código y observa que muestra
👨‍💻 console.log(window) ❌
👨‍💻 console.log(globalThis) ✅

// En el navegador
window === globalThis ✅ ---> Result: true

// En Node.js
global === globalThis ✅ ---> Result: true
```
## 🔧 Método `matchAll` para expresiones regulares.
> El método `matchAll` de los strings **devuelve un iterable** con todas las coincidencias del string específico a partir de una expresión regular, colocada como argumento.
- `string.matchAll(regex)`
> En el iterable, existe una propiedad denominada `index` con el índice del string donde la búsqueda coincide.

```
🔧 const regex = /\b(Apple)+\b/g

👨‍🔧 const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc."

// Tranformación del iterable retornado a array
👨‍💻 const array = [...fruit.matchAll(regex)]
📢 console.log(array)
✅ ---> Result:
    [
        [
            'Apple',
            'Apple',
            index: 0,
            input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
            groups: undefined
        ],
        [
            'Apple',
            'Apple',
            index: 21,
            input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
            groups: undefined
        ]
    ]
```
## 🛠 dynamic Import
> La expresión `import()` permite manejar módulos dinámicamente, ya que la sintaxis de ECMAScript `import ... from ...` no lo permite.

### Cómo utilizar importación dinámica.
> La **importación dinámica** consiste en cargar los módulos cuando el usuario los vaya a utilizar, y no al iniciar la aplicación. Esto permite que la página web sea más rápida, porque descarga menos recursos.

> La expresión `import()` recibe un argumento de tipo `string` con la ruta del módulo a importar y devuelve una promesa.
```
🛣 const ruta = "./modulo.js"

// Utilizando promesas
🛬  import(ruta)
        .then( modulo => {
        📢 modulo.funcion1()
        📢 modulo.funcion2()
        })
        .catch(error => console.log(error))
    
// Utilizando async/await
⏳  async function importarModulo(rutaDelModulo) {
    🛬  const modulo = await import(rutaDelModulo)
    📢  modulo.funcion1()
    📢  modulo.funcion2()
    }

👨‍💻 importarModulo(ruta)
```
## 💡 Ejemplo utilizando importación dinámica.
> De esta manera puedes utilizar una importación dinámica en tu aplicación para desencadenar una descarga de un módulo cuando el usuario lo vaya a utilizar. Por ejemplo, al realizar clic en un botón.
```
🔎 const boton = document.getElementById("boton")

👂  boton.addEventListener("click", async function () {
        const modulo = await import('./modulo.js')
        modulo.funcion()
    })
```
> Puedes usar **las herramientas de desarrollador** para visualizar la descarga de archivos al realizar clic en el botón.

# ⚙ EcmaScript 12
## 🛠 numeric-separators y replaceAll
### 🔧 Separadores numéricos
> Los separadores numéricos ayudan a la legibilidad de cantidades con varias cifras. Se utiliza el caracter guion bajo (` _` ) para **separar las cifras**, y no afecta a la ejecución del programa.

> Lo ideal es separar cada 3 cifras, para visualizar los miles, millones, billones, etc.

```
// 🔽 Baja legibilidad
👨‍🔧 const numero1 = 3501548945
👨‍💻 console.log( numero1 ) 
✅ ---> Result: 3501548945

// ✅ Alta legibilidad
👨‍🔧 const numero2 = 3_501_548_945
👨‍💻 console.log( numero2 ) 
✅ ---> Result: 3501548945
```
### 🔧 Método replaceAll
> El método `replaceAll` retorna un nuevo string, reemplazando **todos los elementos por otro**.

> Este método recibe dos argumentos:
- El **patrón a reemplazar**, puede ser un string o una expresión regular.
- El **nuevo elemento** que sustituye al reemplazado.

> Este procedimiento fue creado para solucionar el problema que tenía el método `replace`, que realizaba la misma función de reemplazar elementos, pero solamente **una sola vez** por invocación.

```
👨‍🔧 const mensaje = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

👨‍💻 mensaje.replace("JavaScript", "Python")
✅ ---> Result: 'Python es maravilloso, con JavaScript puedo crear el futuro de la web.'

👨‍💻 mensaje.replaceAll("JavaScript", "Python")
✅ ---> Result: 'Python es maravilloso, con Python puedo crear el futuro de la web.'

👨‍💻 mensaje.replaceAll(/a/g, "*")
✅ ---> Result: 'J*v*Script es m*r*villoso, con J*v*Script puedo cre*r el futuro de l* web.'
```
## 🛠 promise-any y métodos privados.
### 🔧 Promise.any
> `Promise.any()` es otra forma de manejar varias promesas, que **retornará la primera promesa que sea resuelta** y rebotará si todas las promesas son rechazadas.

```
👨‍🔧 const promesa1 = Promise.reject("Ups promesa 1 falló")
👨‍🔧 const promesa2 = Promise.reject("Ups promesa 2 falló")
👨‍🔧 const promesa3 = Promise.resolve("Promesa 3")


👨‍💻  Promise.any([promesa1, promesa2, promesa3])
    ✅  .then(respuesta => console.log(respuesta)) 
    ❌  .catch(error => console.log(error))
```
### 🔧 Métodos privados de clases.
> Los métodos privados consiste en **limitar el acceso a propiedades y métodos** agregando el caracter numeral `( #)`. Por defecto, las propiedades y métodos de una clase en JavaScript son públicas, es decir, se puede acceder a ellos fuera de la clase.

```
👨‍🔧  class Clase {
    👮‍♂️  #private(valor){
            console.log(valor)
        }
        
    👷‍♂️  public(valor){
            console.log(valor)
        }
    }

🔨 const clase = new Clase()
👨‍💻 clase.public("Hola")  ✅ ---> Result: 'Hola'
👨‍💻 clase.private("Hola") ❌ ---> Result: TypeError: clase.private is not a function
```
# ⚙ EcmaScript 13.
## 🛠 at
> El método `at` de arrays sirve para acceder a los elementos a partir del índice.
- `array.at(índice)`
### 💡 Índices positivos y negativos en arrays
> Los índices positivos comienzan desde `0` hasta la longitud total menos uno, de **izquierda a derecha** del array. El índice `0` es la primera posición.

```
[0,1,2,3, ...., lenght-1]
```
> Los índices negativos comienzan desde `-1` hasta el negativo de la longitud total del array, de **derecha a izquierda**. El índice `-1` es la última posición.
```
[-lenght, ...,  -3, -2, -1]
```
### 🔧 Cómo utilizar el método `at`.
> La utilidad más importante de este método es para manejar **índices negativos**. Algo que no se puede con la notación de corchetes.
```
👨‍🔧 const nombres = ["Andres", "Valeria", "Ana", "Ramiro", "Richard"]

👨‍💻 nombres.at(-1) ✅ ---> "Richard"
👨‍💻 nombres[-1] ❌ ---> undefined
👨‍💻 nombres.at(-3) ✅ ---> "Ana"
👨‍💻 nombres[nombres.length -1] ✅ ---> "Richard"
```
## 🛠 top level await en el consumo de una API.
> Top level await permite utilizar la palabra reservada `await`, sin estar dentro de una **función asíncrona** con `async`. Sin embargo, únicamente se puede utilizar `await` en la parte superior del archivo de un módulo.

### 🔧 Cómo utilizar top level await.
> Anterior a ECMAScript 13, cuando se introdujo funciones asíncronas, si utilizabas `await` fuera de `async`, existirá un error de sintáxis.
```
// ❌ Error
await fetch(URL)
❌ ---> Result: SyntaxError: await is only valid in async function
```
> Ahora, con top level await esto es posible, sin ningún error. Esto puede servir para **importaciones de manera dinámica** o iniciar la conexión de tus bases de datos. Siempre y cuando respetes que debe estar en la parte encima del archivo de tipo módulo.