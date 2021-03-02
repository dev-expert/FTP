function display() {
    var obj = JSON.parse(localStorage.getItem("users"));
    let len = obj.length;
    str = "";
    for (var i = 0; i < len; i++) {
        s = obj[i];
        if (obj[i].admin === "false") {
            str += `<tr>
        <td>${s.username}</td>
        <td>${s.email}</td>
        <td>${s.phonenumber}</td>
        <td>${s.admin}</td>
        <td><input type="checkbox" name="tickdata" value="${s.email}"></td>
        </tr>`
        }
        document.getElementById("data1").innerHTML = str;
    }
}



// function deleteData() {
//     //debugger;
//     var table = document.getElementById("myTable1");
//     var obj = JSON.parse(localStorage.getItem("users"));


//     var checkboxs = table.getElementsByTagName("Input");

//     for (var i = 0; i < checkboxs.length; i++) {

//         if (checkboxs[i].checked == true) {
//             //alert(i);
//             table.deleteRow(i + 1);
//             obj.splice(i, 1);
//             i--;
//         }
//     }

//     localStorage.setItem("users", JSON.stringify(obj));
// }

function deletetick(keys1) {
    let keys = JSON.parse(localStorage.getItem("users"));
    for (i = 0; i < keys1.length; i++) {
        for (j = 0; j < keys.length; j++) {
            s = keys[j];
            if (keys1[i] === s.email) {
                keys.splice(j, 1);
            }
        }
    }
    localStorage.setItem("users", JSON.stringify(keys));
    display();
}
function gettick(semail) {
    const c = document.querySelectorAll(`input[name="${semail}"]:checked`);
    let drr = [];
    c.forEach((c) => {
        drr.push(c.value);
        console.log(c.value);
    });
    return drr;
}
function validateuser() {
    var keys = JSON.parse(localStorage.getItem("presentuser"));
    if (keys != null) {
        return true;
    }
    else {
        window.open('home.html')
    }
}
function logoff() {
    window.localStorage.removeItem("presentuser");
    location.reload();
}
// var row = data.insertRow(i);

// var cell = row.insertCell(0);
// cell.innerHTML = obj[i].username;

// var cell1 = row.insertCell(1);
// cell1.innerHTML = obj[i].email;

// var cell2 = row.insertCell(2);
// cell2.innerHTML = obj[i].phonenumber;

// var cell3 = row.insertCell(3);
// if (obj[i].admin == "true")
//     cell3.innerHTML = "Admin";

// else
//     cell3.innerHTML = "Normal User";

// var cell4 = row.insertCell(4);


// var checkbox = document.createElement("Input");
// checkbox.setAttribute("type", "checkbox");
// checkbox.setAttribute("name", "check");

// cell4.appendChild(checkbox);



function fetch1() {
    console.log("hii");
    fetch('http://localhost:8080/')
        .then(response => response.json())
        .then(data => console.log(data))
    //.catch(err => console.error(err));
}