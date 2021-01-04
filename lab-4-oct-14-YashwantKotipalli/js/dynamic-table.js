const contents = [['x','y'],[1,2],[3,4]];
const tableContainer = document.getElementById('table-container');
const result = document.getElementById('table-result');
const table = document.createElement('table'); 
table.style.backgroundColor = 'white'
let row, column, dataElementTag, className, cols;
const select = (evt) => {
    const target = evt.target;
    target.style.backgroundColor= '#a32626';
} ;
contents.forEach((rowItems, i)=> {

    dataElementTag = i == 0 ? 'th': 'td';
    className = i ==0 ? 'heading': 'data-row';
    row = document.createElement('tr');
    row.classList.add(className);
    rowItems.forEach(colItem => {
        
        
        col = document.createElement(dataElementTag);
        if(i>0){
            col.addEventListener('click',select);
        }
        col.innerHTML = colItem;
        row.appendChild(col);
    });
    table.appendChild(row);
});
tableContainer.appendChild(table);

let rows  = table.querySelectorAll('.data_row'),
    sum=0;
    cols;
row.forEach(row => {
    col = row.querySelectorAll('td')
    col.forEach(col => {
        sum+= Number(col.innerHTML.trim());
    });

});

result.innerHTML = sum; 