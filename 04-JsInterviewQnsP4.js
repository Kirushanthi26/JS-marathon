// Q1: Write an example of fetching data using fetch API

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
