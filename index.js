var todos = ['first todo', 'second todo', 'third todo'];

function markAsDone(todos){

    for(let i = 0; i < todos.length; i++){
        todos[i] = 'done - ' + todos[i];
    }
    return todos;
}

document.getElementById('result').innerHTML = todos;
