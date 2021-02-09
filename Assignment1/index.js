
var delarr = [];

var url = [];
function addUrl() {
    var value = document.getElementById("url").value;
    var res = value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if (res == null)
        alert("Invalid Url")
    else {
        for (i = 0; i < url.length; ++i) {
            if (url[i] == value) {
                return alert("Url is already exists");
            }

        }
        enrollUrl(value, getUrl); //it will call the function to insert the elements in to the array.
    }
}
function enrollUrl(e, callback) {
    url.push(e);
    callback(); //call back function is used for to call the other function after this execution.

}
function getUrl() {
    let str = "";
    url.forEach(element => {

        str +=  `
        <tr>
        <td>${element}</td>
        <td><button type="button" onclick="deleteOnebyOne('${element}') "class="delete-btn">Delete</button></td>
        <td> <input type="checkbox" id="chk" onclick="checkBox('${element}')"></td>
      </tr>`
    });
    document.getElementById("fetch").innerHTML = str;
    console.log(url);// rough work

}
function deleteUrl() {

    for (i = 0; i < delarr.length; ++i) {
        for (j = 0; j < url.length; ++j) {
            if (delarr[i] == url[j]) {
                url.splice(j, 1)
            }
        }
    }
    getUrl();
    delarr = []; //once the delete function is excuted the deleetearray initialize with 0 element.
}
function deleteOnebyOne(e) {
    url.splice(url.indexOf(e), 1);
    getUrl();
}//this function is for if you want to delete one by one row
function checkBox(e) {
    console.log(e);
    var check = document.getElementById("chk");
    if (check.checked == true) {
        delarr.push(e);
    }
    else {
        delarr.splice(delarr.indexOf(e), 1);
    }
    console.log(delarr);
}


