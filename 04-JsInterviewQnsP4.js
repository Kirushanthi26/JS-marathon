// Q1: Write an example of fetching data using fetch API

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

// Q2: Write an asynchronous function which executes callback after finishing it's asynchronous task

// What problem does callback solve? They let you run code only after an async task is finished.

const asyncFn = (callbackfn) => {
  setTimeout(() => {
    callbackfn("done");
  }, 2000);
};

asyncFn((message) => {
  console.log(message);
});

/**
 * *A callback is a function passed to another function. It runs after something finishes.
 *
 * *Promise: I promise I will give you the result later
 */

const asyncFnPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 2000);
  });
};

asyncFnPromise().then((result) => {
  console.log(result);
});
