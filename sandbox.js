
// The Fetch Api Example
const getTodos = async () => {
    const response = await fetch('todos/muhd.json');

    if (response.status !== 200) {
        throw new Error('could not fetch data!');
    }

    const data = response.json();
    return data;
};

getTodos()
    .then(data => console.log('Resolved',data))
    .catch(err => console.log('Rejected',err));

// fetch('todos/muhd.json').then(response => {
//     console.log('Resolved', response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log('Rejected', error);
// });