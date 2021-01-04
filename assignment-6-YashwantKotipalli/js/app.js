//selectors

// querying and selecting particular elements of the html and assigning certain function to them
document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
document.getElementById('clearAll').addEventListener('click', handleClearAll);

//event handlers

// function to handle the text entered into the text box and of the adding items text box.
function handleSubmitForm(e){
    e.preventDefault();
    let input = document.querySelectorAll('input');
    if(input[0].value != '' && input[1].value != '' && input[2].value != '' && input[3].value != '' ) {

        addTodo(input[0].value);
        // addTodo(input[1].value);
        // addTodo(input[2].value);
        // addTodo(input[3].value);

        var modaltxt = document.getElementsById("modal-text");
        modaltxt.textContent += input[1].value + input[2].value +  input[3].value;
    };

    if(input[0].value != '' && input[1].value != '' && input[2].value != '' && input[3].value != '' ){
        skip;
    }
    input.value = ''
};

// function to check which buttton is clicked and redirects the clicked action to the corresponding action function to be performed
function handleClickDeleteOrCheck(e){
    if(e.target.name == 'checkButton')
        checkTodo(e);

    if(e.target.name == 'deleteButton')
        deleteTodo(e);
}

// helper functions
// function to add items into the todo list
function addTodo(todo) {
    
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `
        <button  name= "modalbtn" id= "ModalButton" class="todo-item">${todo}</button>
        <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p id="modal-text" class="modal-text"></p>
                </div>
        </div>
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <button name="deleteButton"><i class="fas fa-trash"></i></button>
    `;
    
    ul.appendChild(li);
    li.classList.add('todo-list-item');
    var modals = document.getElementsByClassName('modal');
        // Get the button that opens the modal
    
    var btns = document.getElementsByClassName("todo-item");
    var spans=document.getElementsByClassName("close");
    for(let i=0;i<btns.length;i++){
        btns[i].onclick = function() {
            modals[i].style.display = "block";
        }
    }
    for(let i=0;i<spans.length;i++){
        spans[i].onclick = function() {
            modals[i].style.display = "none";
        }
    }
}

// function to cross or strike the completed tasks on the existing items in the to-do list
function checkTodo(e){

    let item  = e.target.parentNode;
    if(item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';
    else
        item.style.textDecoration = 'line-through';
}
// function to delete an existing task
function deleteTodo(e){
    let item = e.target.parentNode;
    item.addEventListener('transitionend', function(){
        item.remove();
    });
    item.classList.add('todo-list-item-fall');
}
// function to Clear All the items in the existing task
function handleClearAll(e){
    document.querySelector('ul').innerHTML = "";
}