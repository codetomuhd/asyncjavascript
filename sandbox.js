const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState);
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('error getting data');
            }
        });

        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
        request.open('GET', resource);

        request.send();
    });

};

getTodos('todos/muhd.json').then((data) => {
    console.log('Promise resolved: ', data);
}).catch(err => {
    console.log('Promise rejected: ', err);
});

//promise example

// const getSomething = () => {

//     return new Promise((resolve, reject) => {
//         // fetch some data
//         resolve('Some data');
//         // reject('some error');
//     });

// };

// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });