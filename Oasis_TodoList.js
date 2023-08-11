let mainPageEl = document.getElementById('mainPage');
let secondContainerEl = document.getElementById('secondContainer');
let getStartedBtn = document.getElementById('getStartedBtn');

getStartedBtn.onclick = function() {

    mainPageEl.style.display = 'none';
    secondContainerEl.style.display = 'block';

}


/*today cardel */
let lefBtnEl = document.getElementById('leftBtn');
/*plannedCardEl info */
let planlefBtnEl = document.getElementById('planleftBtn');
/*peronsonal left btn */
let personalLeftBtnEl = document.getElementById('personalLeftBtn');
/*work left btn */
let workLeftBtnEl = document.getElementById('workLeftBtn');
/*ShoppingBtnEl */
let shoppingLeftBtnEl = document.getElementById('shopLeftBtn');

/* < Left Buttons End /> */

let todayCardEl = document.getElementById('todayCard');
let todayCardInfo = document.getElementById('todayCardInformation');

let plannedCardEl = document.getElementById('plannedCard');
let plannedCardInfo = document.getElementById('plannedCardInformation');

let personalCardEl = document.getElementById('personalCard');
let personalCardInfo = document.getElementById('personalCardinformation');

let workCardEl = document.getElementById('workCard');
let workCardInfo = document.getElementById('workCardInformation');

let shoppingCardEl = document.getElementById('shoppingCard');
let shoppingCardInfo = document.getElementById('shopCardInformation');




let listContainer = document.getElementById('listContainer');
let plannedlistContainer = document.getElementById('plannedlistContainer');
let personallistContainer = document.getElementById('personallistContainer');
let worklistContainer = document.getElementById('worklistContainer');
let shoppinglistContainer = document.getElementById('shoppinglistContainer');



lefBtnEl.onclick = function() {
    mainPageEl.style.display = 'none';
    secondContainerEl.style.display = 'block';

    listContainer.style.display = 'none';
    plannedlistContainer.style.display = 'none';
    personallistContainer.style.display = 'none';
    worklistContainer.style.display = 'none';
    shoppinglistContainer.style.display = 'none';


}
planlefBtnEl.onclick = function() {
    mainPageEl.style.display = 'none';
    secondContainerEl.style.display = 'block';

    listContainer.style.display = 'none';
    plannedlistContainer.style.display = 'none';
    personallistContainer.style.display = 'none';
    worklistContainer.style.display = 'none';
    shoppinglistContainer.style.display = 'none';
}


personalLeftBtnEl.onclick = function() {
    mainPageEl.style.display = 'none';
    secondContainerEl.style.display = 'block';

    listContainer.style.display = 'none';
    plannedlistContainer.style.display = 'none';
    personallistContainer.style.display = 'none';
    worklistContainer.style.display = 'none';
    shoppinglistContainer.style.display = 'none';

}
workLeftBtnEl.onclick = function() {
    mainPageEl.style.display = 'none';
    secondContainerEl.style.display = 'block';

    listContainer.style.display = 'none';
    plannedlistContainer.style.display = 'none';
    personallistContainer.style.display = 'none';
    worklistContainer.style.display = 'none';
    shoppinglistContainer.style.display = 'none';
}


shoppingLeftBtnEl.onclick = function() {
    mainPageEl.style.display = 'none';
    secondContainerEl.style.display = 'block';

    listContainer.style.display = 'none';
    plannedlistContainer.style.display = 'none';
    personallistContainer.style.display = 'none';
    worklistContainer.style.display = 'none';
    shoppinglistContainer.style.display = 'none';
}


/*todayCardEl */
todayCardEl.onclick = function() {
    mainPageEl.style.display = 'none';
    secondContainerEl.style.display = 'none';

    listContainer.style.display = 'block';
    plannedlistContainer.style.display = 'none';
    personallistContainer.style.display = 'none';
    worklistContainer.style.display = 'none';
    shoppinglistContainer.style.display = 'none';
}
/*plannedCard */
plannedCardEl.onclick = function() {

    mainPageEl.style.display = 'none';
    secondContainerEl.style.display = 'none';

    listContainer.style.display = 'none';
    plannedlistContainer.style.display = 'block';
    personallistContainer.style.display = 'none';
    worklistContainer.style.display = 'none';
    shoppinglistContainer.style.display = 'none';
}


personalCardEl.onclick = function() {
    mainPageEl.style.display = 'none';
    secondContainerEl.style.display = 'none';

    listContainer.style.display = 'none';
    plannedlistContainer.style.display = 'none';
    personallistContainer.style.display = 'block';
    worklistContainer.style.display = 'none';
    shoppinglistContainer.style.display = 'none';
}
/*plannedCard */
workCardEl.onclick = function() {

    mainPageEl.style.display = 'none';
    secondContainerEl.style.display = 'none';

    listContainer.style.display = 'none';
    plannedlistContainer.style.display = 'none';
    personallistContainer.style.display = 'none';
    worklistContainer.style.display = 'block';
    shoppinglistContainer.style.display = 'none';
}

shoppingCardEl.onclick = function() {

    mainPageEl.style.display = 'none';
    secondContainerEl.style.display = 'none';

    listContainer.style.display = 'none';
    plannedlistContainer.style.display = 'none';
    personallistContainer.style.display = 'none';
    worklistContainer.style.display = 'none';
    shoppinglistContainer.style.display = 'block';
}

/*todoList adding and deleting are started from hee */


/*Today Card */

let todoContainerEl = document.getElementById('TodaytodoListContainer');
let addBtnEl = document.getElementById('addTodoBtn');
let saveBtnEl = document.getElementById('saveBtn');



function getTodoLocalStorage() {
    let stringList = localStorage.getItem('todoList');
    let parsedList = JSON.parse(stringList);
    if (parsedList === null) {
        return [];
    } else {
        return parsedList;
    }
}

let todoList = getTodoLocalStorage();
let todosCount = todoList.length;

saveBtnEl.onclick = function() {

    localStorage.setItem('todoList', JSON.stringify(todoList));

}


function onAddTodoList() {
    let userInputEl = document.getElementById('userInput');
    let userInputValue = userInputEl.value;

    if (userInputValue === "") {
        alert('Enter Text');
        return;
    }
    todosCount = todosCount + 1;
    let newTodo = {
        text: userInputValue,
        uniqNo: todosCount,
        isChecked: false
    };
    todoList.push(newTodo);
    createAndAppendList(newTodo);
    userInputEl.value = '';
}
addBtnEl.onclick = function() {

    onAddTodoList();

}

function onTodoStatusChange(checkId, labelId, todoId) {

    let checkBoxEl = document.getElementById(checkId);
    let labelEl = document.getElementById(labelId);
    labelEl.classList.toggle('checkedList');

    let todoObjIndex = todoList.findIndex(function(eachList) {
        let eachListId = "todo" + eachList.uniqNo;
        if (eachListId === todoId) {
            return true;
        } else {
            return false;
        }
    });
    let todoObjectList = todoList[todoObjIndex];

    if (todoObjectList.isChecked === true) {
        todoObjectList.isChecked = false;
    } else {
        todoObjectList.isChecked = true;
    }
}

function OnDeleteTodoList(todoId) {
    let todoEl = document.getElementById(todoId);
    todoContainerEl.removeChild(todoEl);

    let deleteElIndex = todoList.findIndex(function(eachTodo) {

        let eachListId = "todo" + eachTodo.uniqNo;
        if (eachListId === todoId) {
            return true;
        } else {
            return false;
        }
    })
    todoList.splice(deleteElIndex, 1);

}

function createAndAppendList(todo) {

    let todoId = "todo" + todo.uniqNo;
    let checkId = "checkbox" + todo.uniqNo;
    let labelId = "label" + todo.uniqNo;


    let todoEl = document.createElement('li');
    todoEl.classList.add('d-flex', 'flex-row', 'justify-content-center')
    todoEl.id = todoId;
    todoContainerEl.appendChild(todoEl);

    let inputEl = document.createElement('input');
    inputEl.type = 'checkBox';
    inputEl.id = checkId;
    inputEl.textContent = inputEl.value;
    inputEl.checked = todo.isChecked;

    inputEl.onclick = function() {
        onTodoStatusChange(checkId, labelId, todoId);
    }

    inputEl.classList.add('check-box-input');
    todoEl.appendChild(inputEl);

    let labelContainer = document.createElement('div');
    labelContainer.classList.add('label-Container', "d-flex", 'flex-row', 'shadow');
    todoEl.appendChild(labelContainer);

    let labelEl = document.createElement('label');
    labelEl.setAttribute('for', checkId);
    labelEl.id = labelId;
    labelEl.classList.add('checkbox-label');

    labelEl.textContent = todo.text;

    if (todo.isChecked === true) {
        labelEl.classList.add('checked');
    }
    labelContainer.appendChild(labelEl);

    let deleteContainer = document.createElement('div');
    deleteContainer.classList.add('delete-icon-container');
    labelContainer.appendChild(deleteContainer);

    let deleteIcon = document.createElement('i');
    deleteIcon.classList.add('far', 'fa-trash-alt', 'delete-icon', 'deleteIcon');

    deleteIcon.onclick = function() {
        OnDeleteTodoList(todoId);
    };
    deleteContainer.appendChild(deleteIcon);

}
for (let todo of todoList) {
    createAndAppendList(todo);
}



/*Planned Card */

let PlantodoContainerEl = document.getElementById('PlantodoListContainer');
let PlanaddBtnEl = document.getElementById('PlanaddTodoBtn');
let PlansaveBtnEl = document.getElementById('PlansaveBtn');



function PlangetTodoLocalStorage() {
    let PlanstringList = localStorage.getItem('PlantodoList');
    let PlanparsedList = JSON.parse(PlanstringList);
    if (PlanparsedList === null) {
        return [];
    } else {
        return PlanparsedList;
    }
}

let PlantodoList = PlangetTodoLocalStorage();
let PlantodosCount = PlantodoList.length;

PlansaveBtnEl.onclick = function() {

    localStorage.setItem('PlantodoList', JSON.stringify(PlantodoList));

}


function PlanonAddTodoList() {
    let PlanuserInputEl = document.getElementById('PlanuserInput');
    let PlanuserInputValue = PlanuserInputEl.value;

    if (PlanuserInputValue === "") {
        alert('Enter Text');
        return;
    }
    PlantodosCount = PlantodosCount + 1;
    let PlannewTodo = {
        text: PlanuserInputValue,
        uniqNo: PlantodosCount,
        isChecked: false
    };
    PlantodoList.push(PlannewTodo);
    PlancreateAndAppendList(PlannewTodo);
    PlanuserInputEl.value = '';
}
PlanaddBtnEl.onclick = function() {

    PlanonAddTodoList();

}

function PlanonTodoStatusChange(PlancheckId, PlanlabelId, PlantodoId) {

    let PlancheckBoxEl = document.getElementById(PlancheckId);
    let PlanlabelEl = document.getElementById(PlanlabelId);
    PlanlabelEl.classList.toggle('checkedList');

    let PlantodoObjIndex = PlantodoList.findIndex(function(PlaneachList) {
        let PlaneachListId = "todo" + PlaneachList.uniqNo;
        if (PlaneachListId === PlantodoId) {
            return true;
        } else {
            return false;
        }
    });
    let PlantodoObjectList = PlantodoList[PlantodoObjIndex];

    if (PlantodoObjectList.isChecked === true) {
        PlantodoObjectList.isChecked = false;
    } else {
        PlantodoObjectList.isChecked = true;
    }
}

function PlanOnDeleteTodoList(PlantodoId) {
    let PlantodoEl = document.getElementById(PlantodoId);
    PlantodoContainerEl.removeChild(PlantodoEl);

    let PlandeleteElIndex = PlantodoList.findIndex(function(PlaneachTodo) {

        let PlaneachListId = "todo" + PlaneachTodo.uniqNo;
        if (PlaneachListId === PlantodoId) {
            return true;
        } else {
            return false;
        }
    })
    PlantodoList.splice(PlandeleteElIndex, 1);

}

function PlancreateAndAppendList(Plantodo) {

    let PlantodoId = "todo" + Plantodo.uniqNo;
    let PlancheckId = "checkbox" + Plantodo.uniqNo;
    let PlanlabelId = "label" + Plantodo.uniqNo;


    let PlantodoEl = document.createElement('li');
    PlantodoEl.classList.add('d-flex', 'flex-row', 'justify-content-center')
    PlantodoEl.id = PlantodoId;
    PlantodoContainerEl.appendChild(PlantodoEl);

    let PlaninputEl = document.createElement('input');
    PlaninputEl.type = 'checkBox';
    PlaninputEl.id = PlancheckId;
    PlaninputEl.textContent = PlaninputEl.value;
    PlaninputEl.checked = Plantodo.isChecked;

    PlaninputEl.onclick = function() {
        PlanonTodoStatusChange(PlancheckId, PlanlabelId, PlantodoId);
    }

    PlaninputEl.classList.add('check-box-input');
    PlantodoEl.appendChild(PlaninputEl);

    let PlanlabelContainer = document.createElement('div');
    PlanlabelContainer.classList.add('label-Container', "d-flex", 'flex-row', 'shadow');
    PlantodoEl.appendChild(PlanlabelContainer);

    let PlanlabelEl = document.createElement('label');
    PlanlabelEl.setAttribute('for', PlancheckId);
    PlanlabelEl.id = PlanlabelId;
    PlanlabelEl.classList.add('checkbox-label');

    PlanlabelEl.textContent = Plantodo.text;

    if (Plantodo.isChecked === true) {
        PlanlabelEl.classList.add('checked');
    }
    PlanlabelContainer.appendChild(PlanlabelEl);

    let PlandeleteContainer = document.createElement('div');
    PlandeleteContainer.classList.add('delete-icon-container');
    PlanlabelContainer.appendChild(PlandeleteContainer);

    let PlandeleteIcon = document.createElement('i');
    PlandeleteIcon.classList.add('far', 'fa-trash-alt', 'delete-icon', 'deleteIcon');

    PlandeleteIcon.onclick = function() {
        PlanOnDeleteTodoList(PlantodoId);
    };
    PlandeleteContainer.appendChild(PlandeleteIcon);

}
for (let Plantodo of PlantodoList) {
    PlancreateAndAppendList(Plantodo);
}


/* Persnol List */


let PrsnltodoContainerEl = document.getElementById('PersonaltodoListContainer');
let PrsnlsaveBtnEl = document.getElementById('PersonalsaveBtn');
let PrsnladdBtnEl = document.getElementById('PersoaladdTodoBtn')

function PrsnlgetTodoLocalStorage() {
    let PrsnlstringList = localStorage.getItem('PrsnltodoList');
    let PrsnlparsedList = JSON.parse(PrsnlstringList);
    if (PrsnlparsedList === null) {
        return [];
    } else {
        return PrsnlparsedList;
    }
}

let PrsnltodoList = PrsnlgetTodoLocalStorage();
let PrsnltodosCount = PrsnltodoList.length;

PrsnlsaveBtnEl.onclick = function() {

    localStorage.setItem('PrsnltodoList', JSON.stringify(PrsnltodoList));

}


function PrsnlonAddTodoList() {
    let PrsnluserInputEl = document.getElementById('PersonaluserInput');
    let PrsnluserInputValue = PrsnluserInputEl.value;

    if (PrsnluserInputValue === "") {
        alert('Enter Text');
        return;
    }
    PrsnltodosCount = PrsnltodosCount + 1;
    let PrsnlnewTodo = {
        text: PrsnluserInputValue,
        uniqNo: PrsnltodosCount,
        isChecked: false
    };
    PrsnltodoList.push(PrsnlnewTodo);
    PrsnlcreateAndAppendList(PrsnlnewTodo);
    PrsnluserInputEl.value = '';
}
PrsnladdBtnEl.onclick = function() {

    PrsnlonAddTodoList();

}

function PrsnlonTodoStatusChange(PrsnlcheckId, PrsnllabelId, PrsnltodoId) {

    let PrsnlcheckBoxEl = document.getElementById(PrsnlcheckId);
    let PrsnllabelEl = document.getElementById(PrsnllabelId);
    PrsnllabelEl.classList.toggle('checkedList');

    let PrsnltodoObjIndex = PrsnltodoList.findIndex(function(PrsnleachList) {
        let PrsnleachListId = "todo" + PrsnleachList.uniqNo;
        if (PrsnleachListId === PrsnltodoId) {
            return true;
        } else {
            return false;
        }
    });
    let PrsnltodoObjectList = PrsnltodoList[PrsnltodoObjIndex];

    if (PrsnltodoObjectList.isChecked === true) {
        PrsnltodoObjectList.isChecked = false;
    } else {
        PrsnltodoObjectList.isChecked = true;
    }
}

function PrsnlOnDeleteTodoList(PrsnltodoId) {
    let PrsnltodoEl = document.getElementById(PrsnltodoId);
    PrsnltodoContainerEl.removeChild(PrsnltodoEl);

    let PrsnldeleteElIndex = PrsnltodoList.findIndex(function(PrsnleachTodo) {

        let PrsnleachListId = "todo" + PrsnleachTodo.uniqNo;
        if (PrsnleachListId === PrsnltodoId) {
            return true;
        } else {
            return false;
        }
    })
    PrsnltodoList.splice(PrsnldeleteElIndex, 1);

}

function PrsnlcreateAndAppendList(Prsnltodo) {

    let PrsnltodoId = "todo" + Prsnltodo.uniqNo;
    let PrsnlcheckId = "checkbox" + Prsnltodo.uniqNo;
    let PrsnllabelId = "label" + Prsnltodo.uniqNo;


    let PrsnltodoEl = document.createElement('li');
    PrsnltodoEl.classList.add('d-flex', 'flex-row', 'justify-content-center')
    PrsnltodoEl.id = PrsnltodoId;
    PrsnltodoContainerEl.appendChild(PrsnltodoEl);

    let PrsnlinputEl = document.createElement('input');
    PrsnlinputEl.type = 'checkBox';
    PrsnlinputEl.id = PrsnlcheckId;
    PrsnlinputEl.textContent = PrsnlinputEl.value;
    PrsnlinputEl.checked = Prsnltodo.isChecked;

    PrsnlinputEl.onclick = function() {
        PrsnlonTodoStatusChange(PrsnlcheckId, PrsnllabelId, PrsnltodoId);
    }

    PrsnlinputEl.classList.add('check-box-input');
    PrsnltodoEl.appendChild(PrsnlinputEl);

    let PrsnllabelContainer = document.createElement('div');
    PrsnllabelContainer.classList.add('label-Container', "d-flex", 'flex-row', 'shadow');
    PrsnltodoEl.appendChild(PrsnllabelContainer);

    let PrsnllabelEl = document.createElement('label');
    PrsnllabelEl.setAttribute('for', PrsnlcheckId);
    PrsnllabelEl.id = PrsnllabelId;
    PrsnllabelEl.classList.add('checkbox-label');

    PrsnllabelEl.textContent = Prsnltodo.text;

    if (Prsnltodo.isChecked === true) {
        PrsnllabelEl.classList.add('checked');
    }
    PrsnllabelContainer.appendChild(PrsnllabelEl);

    let PrsnldeleteContainer = document.createElement('div');
    PrsnldeleteContainer.classList.add('delete-icon-container');
    PrsnllabelContainer.appendChild(PrsnldeleteContainer);

    let PrsnldeleteIcon = document.createElement('i');
    PrsnldeleteIcon.classList.add('far', 'fa-trash-alt', 'delete-icon', 'deleteIcon');

    PrsnldeleteIcon.onclick = function() {
        PrsnlOnDeleteTodoList(PrsnltodoId);
    };
    PrsnldeleteContainer.appendChild(PrsnldeleteIcon);

}
for (let Prsnltodo of PrsnltodoList) {
    PrsnlcreateAndAppendList(Prsnltodo);
}


/*Work List */

let WorktodoContainerEl = document.getElementById('WorktodoListContainer');
let WorkaddBtnEl = document.getElementById('WorkaddTodoBtn');
let WorksaveBtnEl = document.getElementById('WorkaddTodoBtn');

function WorkgetTodoLocalStorage() {
    let WorkstringList = localStorage.getItem('WorktodoList');
    let WorkparsedList = JSON.parse(WorkstringList);
    if (WorkparsedList === null) {
        return [];
    } else {
        return WorkparsedList;
    }
}

let WorktodoList = WorkgetTodoLocalStorage();
let WorktodosCount = WorktodoList.length;

WorksaveBtnEl.onclick = function() {

    localStorage.setItem('WorktodoList', JSON.stringify(WorktodoList));

}


function WorkonAddTodoList() {
    let WorkuserInputEl = document.getElementById('WorkuserInput');
    let WorkuserInputValue = WorkuserInputEl.value;

    if (WorkuserInputValue === "") {
        alert('Enter Text');
        return;
    }
    WorktodosCount = WorktodosCount + 1;
    let WorknewTodo = {
        text: WorkuserInputValue,
        uniqNo: WorktodosCount,
        isChecked: false
    };
    WorktodoList.push(WorknewTodo);
    WorkcreateAndAppendList(WorknewTodo);
    WorkuserInputEl.value = '';
}
WorkaddBtnEl.onclick = function() {

    WorkonAddTodoList();

}

function WorkonTodoStatusChange(WorkcheckId, WorklabelId, WorktodoId) {

    let WorkcheckBoxEl = document.getElementById(WorkcheckId);
    let WorklabelEl = document.getElementById(WorklabelId);
    WorklabelEl.classList.toggle('checkedList');

    let WorktodoObjIndex = WorktodoList.findIndex(function(WorkeachList) {
        let WorkeachListId = "todo" + WorkeachList.uniqNo;
        if (WorkeachListId === WorktodoId) {
            return true;
        } else {
            return false;
        }
    });
    let WorktodoObjectList = WorktodoList[WorktodoObjIndex];

    if (WorktodoObjectList.isChecked === true) {
        WorktodoObjectList.isChecked = false;
    } else {
        WorktodoObjectList.isChecked = true;
    }
}

function WorkOnDeleteTodoList(WorktodoId) {

    let WorktodoEl = document.getElementById(WorktodoId);
    WorktodoContainerEl.removeChild(WorktodoEl);

    let WorkdeleteElIndex = WorktodoList.findIndex(function(WorkeachTodo) {

        let WorkeachListId = "todo" + WorkeachTodo.uniqNo;
        if (WorkeachListId === WorktodoId) {
            return true;
        } else {
            return false;
        }
    })
    WorktodoList.splice(WorkdeleteElIndex, 1);

}

function WorkcreateAndAppendList(Worktodo) {

    let WorktodoId = "todo" + Worktodo.uniqNo;
    let WorkcheckId = "checkbox" + Worktodo.uniqNo;
    let WorklabelId = "label" + Worktodo.uniqNo;


    let WorktodoEl = document.createElement('li');
    WorktodoEl.classList.add('d-flex', 'flex-row', 'justify-content-center')
    WorktodoEl.id = WorktodoId;
    WorktodoContainerEl.appendChild(WorktodoEl);

    let WorkinputEl = document.createElement('input');
    WorkinputEl.type = 'checkBox';
    WorkinputEl.id = WorkcheckId;
    WorkinputEl.textContent = WorkinputEl.value;
    WorkinputEl.checked = Worktodo.isChecked;

    WorkinputEl.onclick = function() {
        WorkonTodoStatusChange(WorkcheckId, WorklabelId, WorktodoId);
    }

    WorkinputEl.classList.add('check-box-input');
    WorktodoEl.appendChild(WorkinputEl);

    let WorklabelContainer = document.createElement('div');
    WorklabelContainer.classList.add('label-Container', "d-flex", 'flex-row', 'shadow');
    WorktodoEl.appendChild(WorklabelContainer);

    let WorklabelEl = document.createElement('label');
    WorklabelEl.setAttribute('for', WorkcheckId);
    WorklabelEl.id = WorklabelId;
    WorklabelEl.classList.add('checkbox-label');

    WorklabelEl.textContent = Worktodo.text;

    if (Worktodo.isChecked === true) {
        WorklabelEl.classList.add('checked');
    }
    WorklabelContainer.appendChild(WorklabelEl);

    let WorkdeleteContainer = document.createElement('div');
    WorkdeleteContainer.classList.add('delete-icon-container');
    WorklabelContainer.appendChild(WorkdeleteContainer);

    let WorkdeleteIcon = document.createElement('i');
    WorkdeleteIcon.classList.add('far', 'fa-trash-alt', 'delete-icon', 'deleteIcon');

    WorkdeleteIcon.onclick = function() {
        WorkOnDeleteTodoList(WorktodoId);
    };
    WorkdeleteContainer.appendChild(WorkdeleteIcon);

}
for (let Worktodo of WorktodoList) {
    WorkcreateAndAppendList(Worktodo);
}


/*Shopping List */

let ShoptodoContainerEl = document.getElementById('ShoppingtodoListContainer');
let ShopaddBtnEl = document.getElementById('ShopaddTodoBtn');
let ShopsaveBtnEl = document.getElementById('ShopsaveBtn');

function ShopgetTodoLocalStorage() {
    let ShopstringList = localStorage.getItem('ShoptodoList');
    let ShopparsedList = JSON.parse(ShopstringList);
    if (ShopparsedList === null) {
        return [];
    } else {
        return ShopparsedList;
    }
}

let ShoptodoList = ShopgetTodoLocalStorage();
let ShoptodosCount = ShoptodoList.length;

ShopsaveBtnEl.onclick = function() {

    localStorage.setItem('ShoptodoList', JSON.stringify(ShoptodoList));

}


function ShoponAddTodoList() {
    let ShopuserInputEl = document.getElementById('ShopuserInput');
    let ShopuserInputValue = ShopuserInputEl.value;

    if (ShopuserInputValue === "") {
        alert('Enter Text');
        return;
    }
    ShoptodosCount = ShoptodosCount + 1;
    let ShopnewTodo = {
        text: ShopuserInputValue,
        uniqNo: ShoptodosCount,
        isChecked: false
    };
    ShoptodoList.push(ShopnewTodo);
    ShopcreateAndAppendList(ShopnewTodo);
    ShopuserInputEl.value = '';
}
ShopaddBtnEl.onclick = function() {

    ShoponAddTodoList();

}

function ShoponTodoStatusChange(ShopcheckId, ShoplabelId, ShoptodoId) {

    let ShopcheckBoxEl = document.getElementById(ShopcheckId);
    let ShoplabelEl = document.getElementById(ShoplabelId);
    ShoplabelEl.classList.toggle('checkedList');

    let ShoptodoObjIndex = ShoptodoList.findIndex(function(ShopeachList) {
        let ShopeachListId = "todo" + ShopeachList.uniqNo;
        if (ShopeachListId === ShoptodoId) {
            return true;
        } else {
            return false;
        }
    });
    let ShoptodoObjectList = ShoptodoList[ShoptodoObjIndex];

    if (ShoptodoObjectList.isChecked === true) {
        ShoptodoObjectList.isChecked = false;
    } else {
        ShoptodoObjectList.isChecked = true;
    }
}

function ShopOnDeleteTodoList(ShoptodoId) {

    let ShoptodoEl = document.getElementById(ShoptodoId);
    ShoptodoContainerEl.removeChild(ShoptodoEl);

    let ShopdeleteElIndex = ShoptodoList.findIndex(function(ShopeachTodo) {

        let ShopeachListId = "todo" + ShopeachTodo.uniqNo;
        if (ShopeachListId === ShoptodoId) {
            return true;
        } else {
            return false;
        }
    })
    ShoptodoList.splice(ShopdeleteElIndex, 1);

}

function ShopcreateAndAppendList(Shoptodo) {

    let ShoptodoId = "todo" + Shoptodo.uniqNo;
    let ShopcheckId = "checkbox" + Shoptodo.uniqNo;
    let ShoplabelId = "label" + Shoptodo.uniqNo;


    let ShoptodoEl = document.createElement('li');
    ShoptodoEl.classList.add('d-flex', 'flex-row', 'justify-content-center')
    ShoptodoEl.id = ShoptodoId;
    ShoptodoContainerEl.appendChild(ShoptodoEl);

    let ShopinputEl = document.createElement('input');
    ShopinputEl.type = 'checkBox';
    ShopinputEl.id = ShopcheckId;
    ShopinputEl.textContent = ShopinputEl.value;
    ShopinputEl.checked = Shoptodo.isChecked;

    ShopinputEl.onclick = function() {
        ShoponTodoStatusChange(ShopcheckId, ShoplabelId, ShoptodoId);
    }

    ShopinputEl.classList.add('check-box-input');
    ShoptodoEl.appendChild(ShopinputEl);

    let ShoplabelContainer = document.createElement('div');
    ShoplabelContainer.classList.add('label-Container', "d-flex", 'flex-row', 'shadow');
    ShoptodoEl.appendChild(ShoplabelContainer);

    let ShoplabelEl = document.createElement('label');
    ShoplabelEl.setAttribute('for', ShopcheckId);
    ShoplabelEl.id = ShoplabelId;
    ShoplabelEl.classList.add('checkbox-label');

    ShoplabelEl.textContent = Shoptodo.text;

    if (Shoptodo.isChecked === true) {
        ShoplabelEl.classList.add('checked');
    }
    ShoplabelContainer.appendChild(ShoplabelEl);

    let ShopdeleteContainer = document.createElement('div');
    ShopdeleteContainer.classList.add('delete-icon-container');
    ShoplabelContainer.appendChild(ShopdeleteContainer);

    let ShopdeleteIcon = document.createElement('i');
    ShopdeleteIcon.classList.add('far', 'fa-trash-alt', 'delete-icon', 'deleteIcon');

    ShopdeleteIcon.onclick = function() {
        ShopOnDeleteTodoList(ShoptodoId);
    };
    ShopdeleteContainer.appendChild(ShopdeleteIcon);

}
for (let Shoptodo of ShoptodoList) {
    ShopcreateAndAppendList(Shoptodo);
}