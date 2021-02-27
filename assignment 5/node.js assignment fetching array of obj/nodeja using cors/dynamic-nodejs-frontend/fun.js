var str = '';
var putdata = () => {
    var name = document.getElementById('name').value;
    var obj = {
        name: name
    };
    fetch('http://localhost:8085/post-feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        }).then((res) => res.json())
        .then((obj) => {
            console.log('successs', obj);
        }).catch((err) => {
            console.log(err);
        });

}

var getdata = () => {
    var obj;
    fetch("http://localhost:8085/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        })
        .then((response) => response.json())
        .then((obj) => {
            console.log("Success:", obj);
//             let myString = "";
//             obj.forEach((element) => {
//                 let key = Object.keys(element)[1];
//                 myString += `<tr>
// <td>Name</td>
// <td>${element[key]}</td></tr>`;
//             });

            document.getElementById("displaydata").innerHTML = myString;
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}