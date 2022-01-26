const enterText = document.getElementById('enterText');
const submitBtn = document.querySelector('.submitBtn')
const allTask = document.getElementById('todoMainID');

const clList = document.getElementsByClassName('list');
const itemsAll = document.getElementById('itemsAll');
const itemsComplet = document.getElementById('itemsComplet');

let tasks ;
let tasksComplet = [];
!localStorage.tasks ? tasks = [] : tasks = JSON.parse (localStorage.getItem('tasks'));

function Task (description){
    this.description = description;
    this.completed = false;
}
submitBtn.addEventListener('click', () => {
    tasks.push(new Task(enterText.value));
    toHide();
    update();
    enterText.value = '';
    calcItems();
    calcItemsComplet();
    
});

const toHide = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
const update = () => {
    allTask.innerHTML = "";
    sortTasks();
    if(tasks.length > 0){
        tasks.forEach((item, index) => {
            allTask.innerHTML += createTemplate(item, index)
        })
    }
}

const createTemplate = (task, index) => {
    return `
    <li class="list ${task.completed ? 'checked': ''}">
                        <input onclick = "doneTask(${index})" type="checkbox" ${task.completed ? 'checked': ''}>                    
                        ${task.description}
                        <button onclick = "deleteTask(${index})" class="delBtn">delete</button> 
    </li>
    `
}
const doneTask = index => {
    tasks[index].completed = !tasks[index].completed;
    if(tasks[index].completed){
        clList[index].classList.add('checked');
        tasks.push(tasks.splice(index, 1)[0]);
    } 
    else{
        clList[index].classList.remove('checked');
    }
    toHide();
    update();
    calcItemsComplet();
    

}
const deleteTask = index =>{
    tasks.splice(index, 1);
    toHide();
    update();
    calcItems();
    calcItemsComplet();
   
}
const sortTasks = () => {
    const activeTask = tasks.filter(item => item.completed == false);
    const completeTask = tasks.filter(item => item.completed == true);
    tasks = [...activeTask, ...completeTask];    
}

const calcItems = () =>{
    itemsAll.innerHTML = `${tasks.length}`;
};


const sortTasksComplet = function(){  
   
    for (let i = 0; i < tasks.length;) {
        if(tasks[i].completed){
            tasksComplet.push(tasks[i]);
            i++;}
            else i++;        
    }
}
const calcItemsComplet = () =>{   
    tasksComplet = []; 
    sortTasksComplet();
    itemsComplet.innerHTML = `${tasksComplet.length}`;
    
}
update();
calcItems();
calcItemsComplet();






    

