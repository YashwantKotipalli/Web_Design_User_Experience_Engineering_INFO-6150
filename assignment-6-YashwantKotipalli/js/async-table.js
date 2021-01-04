const contentsPath = 'data/todo.json';

const populate = (contents) => {
    const personContainer = document.getElementById('todo-container');
    const persontable = document.createElement('table'); 
    let row, col;
    contents.forEach(todo => {

        row= document.createElement('tr');
        col = document.createElement('td');
        col.innerHTML = todo.Title;
        row.appendChild(col);
        //row= document.createElement('tr');
        col = document.createElement('td');
        col.innerHTML = todo.Description;
        row.appendChild(col);
        //row= document.createElement('tr');
        col = document.createElement('td');
        col.innerHTML = todo.Due;
        row.appendChild(col);
        // row= document.createElement('tr');
        col = document.createElement('td');
        col.innerHTML = todo.Time;
        row.appendChild(col);
        persontable.appendChild(row);
    });
    personContainer.appendChild(persontable);
}
const loadButton = document.getElementById("todo-load");
loadButton.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', contentsPath );
    xhr.addEventListener('load', (evt) => {
        const contents = JSON.parse(evt.target.responseText);
        populate(contents);
    });
    xhr.send();
});


