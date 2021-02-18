var info = document.getElementById('localstorage_table');
var users = () => {
    document.getElementById('localstorage_table').style.display = 'block';
    var persons = JSON.parse(localStorage.getItem('person'));
    var str = ""
    for (var i = 0; i < persons.length; i++) {
        var s = persons[i];
        str += `
    <tr>
        <td>${s.email_address}</td>
        <td>${s.mobile_number}</td>
        <td>
        <input type="checkbox" name="tick" value="${s.email_address}"> 
        <button type="submit" onclick="deleteuser('${s.email_address}')">Delete</button>
        </td>
    </tr>
    `;

    }
    document.getElementById('datatable').innerHTML = str;
};


//for single user deletion
var deleteuser = (email_address) => {
    var persons = JSON.parse(localStorage.getItem('person'));

    for (var i = 0; i < persons.length; i++) {
        var s = persons[i];
        if (email_address == s.email_address)
            persons.splice(i, 1);
    }
    localStorage.setItem('person', JSON.stringify(persons));
    users();

};

//for user multidelete

function deletetick(keys1) {
    let keys = JSON.parse(localStorage.getItem("person"));
    for (i = 0; i < keys1.length; i++) {
        for (j = 0; j < keys.length; j++) {
            s = keys[j];
            if (keys1[i] === s.email_address) {
                keys.splice(j, 1);
            }
        }
    }
    localStorage.setItem("person", JSON.stringify(keys));
    users();
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

//for editing user
var edituser = (email_address) => {
    var persons = JSON.parse(localStorage.getItem('person'));

    for (var i = 0; i < persons.length; i++) {
        var s = persons[i];
        if (email_address == s.email_address)
            persons.splice(i, 1);
    }
    localStorage.setItem('person', JSON.stringify(persons));
    users();

};

var logout = () => {
    localStorage.removeItem('logged_in');
    location.replace('index.html');
};

var checkadmin = () => {
    var person = JSON.parse(localStorage.getItem('logged_in'));
    if (person == null)
        location.replace('index.html')

}

var home = () => {
    location.replace('admin.html')
}

var calculator = () => {
    window.open('calculator/index.html');
}

var notepad = () => {
    window.open('notepad/index.html');
}

var website_notepad = () => {
    window.open('website with notepad embedded/index.html')
}

var resume_generator = () => {
    window.open('resume-builder/index.html')
}