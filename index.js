// let таблица = document.getElementById('myTable');
// let номер = 1;

// function add() {
//     let newRow = таблица.insertRow(-1);
//     let cell1 = newRow.insertCell(0);
//     let cell2 = newRow.insertCell(1);
//     let cell3 = newRow.insertCell(2);
//     let cell4 = newRow.insertCell(3);

//     cell1.innerHTML = номер++;
//     cell2.innerHTML = 'Имя';
//     cell3.innerHTML = 'Год рождения';
//     cell4.innerHTML = '<button onclick="редактировать(this)">Редактировать</button> ' +
//                       '<button onclick="удалить(this)">Удалить</button>';
// }

// function redd(button) {
//     let row = button.parentNode.parentNode;
//     let cells = row.getElementsByTagName('td');

//     document.getElementById('editedName').value = cells[1].innerHTML;
//     document.getElementById('editedYear').value = cells[2].innerHTML;

//     otok();
// }

// function soxiz() {
//     let editedName = document.getElementById('editedName').value;
//     let editedYear = document.getElementById('editedYear').value;

//     let selectedRow = таблица.getElementsByClassName('selected')[0];
//     selectedRow.cells[1].innerHTML = editedName;
//     selectedRow.cells[2].innerHTML = editedYear;

//     zakok();
// }

// function del(button) {
//     let row = button.parentNode.parentNode;
//     таблица.deleteRow(row.rowIndex);
// }

// function otok() {
//     document.getElementById('myModal').style.display = 'block';
// }

// function zakokx() {
//     document.getElementById('myModal').style.display = 'none';
// }


let таблица = document.getElementById('myTable');
let номер = 1;

function показать() {
    let имя = document.getElementById('name').value;
    let возраст = document.getElementById('age').value;

    добавить(имя, возраст);
}

function добавить(имя, возраст) {
    let newRow = таблица.insertRow(-1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.innerHTML = номер++;
    cell2.innerHTML = имя;
    cell3.innerHTML = возраст;
    cell4.innerHTML = '<button onclick="редактировать(this)">✐</button> ' +
                      '<button onclick="удалить(this)">🗑</button>';
}

function редактировать(button) {
    let row = button.parentNode.parentNode;
    let cells = row.getElementsByTagName('td');

    document.getElementById('editedName').value = cells[1].innerHTML;
    document.getElementById('editedAge').value = cells[2].innerHTML;

    открытьМодальноеОкно();
}

function сохранитьИзменения() {
    let editedName = document.getElementById('editedName').value;
    let editedAge = document.getElementById('editedAge').value;

    let selectedRow = таблица.getElementsByClassName('selected')[0];
    selectedRow.cells[1].innerHTML = editedName;
    selectedRow.cells[2].innerHTML = editedAge;

    закрытьМодальноеОкно();
}

function удалить(button) {
    let row = button.parentNode.parentNode;
    таблица.deleteRow(row.rowIndex);
}

function открытьМодальноеОкно() {
    document.getElementById('myModal').style.display = 'block';
}

function закрытьМодальноеОкно() {
    document.getElementById('myModal').style.display = 'none';
}