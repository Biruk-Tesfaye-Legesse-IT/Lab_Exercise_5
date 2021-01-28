// Define UI Variables
//jshint esversion:6 

$(".dropdown-trigger").dropdown();

const taskInput = document.querySelector('#task');
const form = document.querySelector('#task-form');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const sortBtn = document.querySelector(".sort-tasks");
const reloadIcon = document.querySelector('.fa');
const ascend = document.querySelector(".ascending");
const descend = document.querySelector(".descending");


form.addEventListener('submit', addNewTask);


// sortBtn.addEventListener("click", sortEvent);

clearBtn.addEventListener('click', clearAllTasks);

filter.addEventListener('keyup', filterTasks);

taskList.addEventListener('click', removeTask);

reloadIcon.addEventListener('click', reloadPage);

ascend.addEventListener("click", ascending);

descend.addEventListener("click", descending);

// document.addEventListener('DOMContentLoaded', loadTasksfromDB);

let isAscending = true;



function addNewTask(e) {

    e.preventDefault();


    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";

        return;
    }

    // Create an li element when the user adds a task 
    const li = document.createElement('li');
    // Adding a class
    li.className = 'collection-item';
    // Create text node and append it 
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new element for the link 
    const link = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append to UL 
    taskList.appendChild(li);

    // addToDatabase(taskInput.value);


}



// ============================== Clear =============================================


function clearAllTasks() {

    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    clearAllTasksfromDB();
}



// ============================== Search =============================================





function filterTasks(e) { //Receive the user input from the text input 
    let searched = filter.value; //Assign it to a variable so the us can reuse it 
    let collectionItems = document.querySelectorAll(".collection-item"); // Use the querySelectorAll() in order to get the collection of li which have  .collection-item class 
    collectionItems.forEach((item) => { //Iterate over the collection item Node List using forEach
        if (item.textContent.indexOf(searched)) { // On each element check if the textContent of the li contains the text from User Input  [can use indexOf]
            item.style.display = "none";
        } else { // If it contains , change the display content of the element as block , else none
            item.style.display = "block";
        }
    });

}

// ============================== Remove =============================================

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that ?')) {
            e.target.parentElement.parentElement.remove();


            // removefromDB(e.target.parentElement.parentElement);

        }

    }
}

// ============================== Reload =============================================
// Reload Page Function 
function reloadPage() {

    location.reload();
}

// ============================== Load =============================================

function loadTasksfromDB() {
    let listofTasks = loadfromDB();
    if (listofTasks.length != 0) {



        listofTasks.forEach(function(eachTask) {


            const li = document.createElement('li');

            li.className = 'collection-item';

            li.appendChild(document.createTextNode(eachTask));

            const link = document.createElement('a');

            link.className = 'delete-item secondary-content';
            link.innerHTML = '<i class="fa fa-remove"> </i>';

            li.appendChild(link);

            taskList.appendChild(li);
        });

    }

}


// ============================== Ascending =============================================



function ascending() {
    if (isAscending == true) {


    } else {
        for (let index = taskList.childNodes.length - 1; index > 0; index--) {
            taskList.appendChild(taskList.childNodes[index]);
        }
        isAscending = !isAscending;
    }


    if (isAscending) {
        taskList.appendChild(li);
        li.appendChild(link);
    } else {
        taskList.insertBefore(li, taskList.children[0]);
        li.appendChild(link);
    }
    isAscending = true;

}





// ============================== Descending =============================================


function descending() {
    if (isAscending == true) {

        for (let index = taskList.childNodes.length - 1; index > 0; index--) {
            taskList.appendChild(taskList.childNodes[index]);
        }
        isAscending = !isAscending;



        if (isAscending) {
            taskList.appendChild(li);
            li.appendChild(link);
        } else {
            taskList.insertBefore(li, taskList.children[0]);
            li.appendChild(link);
        }
        isAscending = false;


    } else {

    }
}