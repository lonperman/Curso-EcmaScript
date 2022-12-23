const promise1 = new Promise((resolve, reject) => reject("Rechazada"));
const promise2 = new Promise((resolve, reject) => resolve("Resuelta"));
const promise3 = new Promise((resolve, reject) => resolve("Resuelta 2"));

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response));