var table = document.getElementById("game_table");
var firstRow = table.insertRow(0).insertCell(0);

table.rows[0].cells[0].setAttribute("class", "circle");
var circles = document.getElementsByClassName('circle');
var totalCircles = circles.length;
var length = 1;
var color = randomColor();
var uniIndex = 0;
SetUniqueColor();

function AddCircles() {
    let table = document.getElementById("game_table");
    circles[uniIndex].removeEventListener('click', AddCircles, { capture: false });
    let tr = table.insertRow(table.rows.length);
    for (let index = 0; index < table.rows.length; index++) {

        let td1 = table.rows[index].insertCell(table.rows.length - 1);
        td1.setAttribute("class", "circle");

        if (table.rows.length - 1 !== index) {
            let td2 = tr.insertCell(index);
            td2.setAttribute("class", "circle");
        }
    }
    totalCircles = circles.length;
    length++;
    ChangeCirclesColor();
    SetUniqueColor();
}

function randomColor() {

    var r = Math.floor(Math.random() * 200)

    var g = Math.floor(Math.random() * 200)

    var b = Math.floor(Math.random() * 200)

    return "rgba(" + r + ", " + g + ", " + b + "," + 1 + ")";
}

function ChangeCirclesColor() {
    color = randomColor();

    for (let index = 0; index < totalCircles; index++) {
        circles[index].style.background = color;
    }
}

function SetUniqueColor() {
    uniIndex = Math.floor(Math.random() * totalCircles);
    circles[uniIndex].style.background = color.replace(/[^,]+(?=\))/, '0.2');
    circles[uniIndex].addEventListener('click', AddCircles, false);
}