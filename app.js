//async and await
const getTodos = async () => {
const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
  const data = await response.json();
return data;
};

getTodos().then(data => console.log(`resolved:`, data));





//fetch api

/*
fetch(`https://jsonplaceholder.typicode.com/todos/`).then((response) => {

    console.log(`resolved`, response)
return response.json();
}).then(data => {

console.log(data);
}).catch((err) => {

console.log(`rejected`, err)
});
*/
