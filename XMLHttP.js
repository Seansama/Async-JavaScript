const getTodos = (callback) => {

    //HTTP requests
    const request = new XMLHttpRequest()
    request.addEventListener(`readystatechange`, () => {

        //Status codes
        if (request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)
            callback(undefined, data);
        }
        else if (request.readyState === 4){
            callback(`Data not found`, undefined);
        }
    })


    request.open(`GET`, `todos.json`);
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

//
