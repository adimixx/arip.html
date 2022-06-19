let tableBody = document.getElementById('tableBody');

function calculateTotalGradePoint() {
    let total = 0;
    let gradePoints = document.getElementsByClassName("grade_point_value");
    console.log(gradePoints);
    // iterate and calculate
    // assign to html element
    document.getElementById("total").innerHTML = 10002282;
}

function calculateGradePoint(credit, grade, gradePointElement) {
    let gradePoint = credit * grade;
    gradePointElement.innerHTML = gradePoint;
    calculateTotalGradePoint();
}

function addRow() {
    let rowNum = tableBody.rows.length;

    // Create Credit input element
    let textbox = document.createElement("input");
    textbox.type = "number";

    // Create Select element for grade points
    let select = document.createElement("select");

    let grades = [];
    grades[3] = "A";
    grades[4] = "B";
    grades[5] = "C";

    grades.forEach((value, index) => {
        let option = document.createElement("option");
        option.innerHTML = value;
        option.value = index;
        select.add(option);
    });

    // Create span element for grade points
    let gradePoint = document.createElement("span");
    gradePoint.className = "grade_point_value";

    textbox.onchange = function () {
        calculateGradePoint(textbox.value, select.value, gradePoint);
    };
    select.onchange = function () {
        calculateGradePoint(textbox.value, select.value, gradePoint);
    };

    let row = tableBody.insertRow(rowNum);
    let col1 = row.insertCell(0);
    let col2 = row.insertCell(1);
    let col3 = row.insertCell(2);
    col1.appendChild(textbox);
    col2.appendChild(select);
    col3.appendChild(gradePoint);
}

document.getElementById("addCreditBtn").onclick = function () {
    addRow();
}

addRow();

