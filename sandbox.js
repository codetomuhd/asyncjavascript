const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('could not fetch data', undefined);
        }
    });

    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    request.open('GET', resource);

    request.send();
};

getTodos('todos/muhd.json', (err, data) => {
    console.log(data);
    getTodos('todos/musa.json', (err, data) => {
        console.log(data);
        getTodos('todos/yusuf.json', (err, data) => {
            console.log(data);
        });
    });
});