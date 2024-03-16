// fill in javascript code here
let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
let arr = [];

form.addEventListener("submit", function(event) {
    handleSubmit(event);
});

function handleSubmit(event) {
    event.preventDefault();
    let Name = document.getElementById("name");
    let NameValue = Name.value;
    let employeeID = document.getElementById("employeeID").value;
    let department = document.getElementById("department").value;
    var experience = parseInt(document.getElementById("exp").value);
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mbl").value;
    let obj = {
        employeeName: NameValue,
        employeeID: employeeID,
        department: department,
        experience: experience,
        email: email,
        mobile: mobile
    };
    arr.push(obj);
    showData();
}

function showData() {
    tbody.innerHTML = "";
    arr.forEach(function(ele, i) {
        let role;
        if (ele.experience > 5) {
            role = "Senior";
        } else if (ele.experience <= 5 && ele.experience >= 2) {
            role = "Junior";
        } else {
            role = "Fresher";
        }
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = ele.employeeName;
        let td2 = document.createElement('td');
        td2.innerHTML = ele.employeeID;
        let td3 = document.createElement('td');
        td3.innerHTML = ele.department;
        let td4 = document.createElement('td');
        td4.innerHTML = ele.experience;
        let td5 = document.createElement('td');
        td5.innerHTML = ele.email;
        let td6 = document.createElement('td');
        td6.innerHTML = ele.mobile;
        let td7 = document.createElement('td');
        td7.innerText = role;
        let td8 = document.createElement("td");
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", function() {
            dltRow(i);
        });
        td8.appendChild(deleteBtn);
        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
        tbody.append(tr);
    });
}

function dltRow(index) {
    // arr = arr.filter(function(ele) {
    //     return ele.employeeID !== employeeID;
    // });
    arr.splice(index,1)
    showData();
}

