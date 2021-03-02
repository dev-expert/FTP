var info = document.getElementById('localstorage_table');
var result;

var users = () => {
    debugger;
    document.getElementById('localstorage_table').style.display = 'block';
    // var persons = JSON.parse(localStorage.getItem('person'));
    fetch("http://localhost:8086/login", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(result),
        })
        .then((response) => response.json())
        .then((result) => {
            var str = " "
            var keys = result;
            console.log(keys);
            for (var i = 0; i < keys.length; i++) {
                var s = keys[i];
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
        }).catch((err) => {
            console.log(err);
        });
};


//for single user deletion
var deleteuser = (email_address) => {
    if (confirm("if you press ok user is going to be deleted")) {
        var persons = JSON.parse(localStorage.getItem('person'));

        for (var i = 0; i < persons.length; i++) {
            var s = persons[i];
            if (email_address == s.email_address)
                persons.splice(i, 1);
        }
        localStorage.setItem('person', JSON.stringify(persons));
        users();
    } else {
        users();
    }

};

//for user multidelete

function deletetick(keys1) {
    if (confirm("if you press ok user is going to be deleted")) {
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
    } else {
        users();
    }
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
    localStorage.removeItem('persons');
    location.replace('index.html');
};

var checkadmin = () => {
    var person = JSON.parse(localStorage.getItem('persons'));
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
    window.open('resume-builder/nodejs resume frontend/index.html')
}