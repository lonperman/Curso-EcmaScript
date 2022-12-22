try {
    hello();
} catch (error) {
    console.log(error);
}

try {
    anotherFunction();
} catch {
    console.log('Esto es un error')
}