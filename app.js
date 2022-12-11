//HTTP requests
const request = new XMLHttpRequest()
request.addEventListener(`readystatechange`, () => {

    //Status codes
    if (request.readyState === 4 && request.status === 200){
        console.log(request.responseText)
    }
    else if (request.readyState === 4){
        console.log(`Could not fetch data`)
    }
})


request.open(`GET`, `https://jsonplaceholder.typicode.com/todos/`);
request.send()

//