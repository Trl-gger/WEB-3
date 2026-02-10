const addButton = document.getElementById('addButton');
 
 
 
addButton.addEventListener('click',() => {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');  
    const taskText = taskInput.value;
   
    if (!taskText){
        console.log("Nic sa nestalo")
        return
    }
   
 
    console.log(taskText)
 
 
    let newLi = document.createElement('li');
    newLi.textContent = taskText;
    console.log(newLi);
 
    let newInput = document.createElement('input');
    newInput.type = "checkbox"; 
   
 
 
    let newSpan = document.createElement('span');
   
 
 
    let newButton = document.createElement('button');
 
    newLi.appendChild(newInput);
    newLi.appendChild(newSpan);
    newLi.appendChild(newButton);
 
 
 
    document.getElementById('taskList').appendChild(newLi);
});