const contentsPath = 'data/person.json';

const populate = (contents) => {

    const personContainer = document.getElementById('person-container');
    const persontable = document.createElement('table'); 
    let row, col;
    contents.forEach(person => {

        row= document.createElement('tr');
        col = document.createElement('td');
        col.innerHTML = person.firstname;
        row.appendChild(col);
        col = document.createElement('td');
        col.innerHTML = person.lastname;
        row.appendChild(col);
        persontable.appendChild(row);
    }); 

    personContainer.appendChild(persontable);       
}

const loadButton = document.getElementById("person-load");
loadButton.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', contentsPath );
    xhr.addEventListener('load', (evt) => {
        const contents = JSON.parse(evt.target.responseText);
        populate(contents);
    });
    xhr.send();
});

