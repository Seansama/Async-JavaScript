const getTodos = (callback) => {

    //HTTP requests
    const request = new XMLHttpRequest()
    request.addEventListener(`readystatechange`, () => {

        //Status codes
        if (request.readyState === 4 && request.status === 200){
            callback(undefined, request.responseText);
        }
        else if (request.readyState === 4){
           callback(`Data not found`, undefined);
        }
    })


    request.open(`GET`, `https://jsonplaceholder.typicode.com/todos/`);
    request.send()


}
//callback functions
getTodos((err, data) => {
console.log(`callback fired`)
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
});
