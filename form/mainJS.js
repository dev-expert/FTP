//var person =  JSON.parse(localStorage.getItem("person11"));

fetch("http://localhost:9090/cv")
    .then(resposne => resposne.json())
    .then(data => {
        console.log(data)

        document.getElementById("name").innerHTML = data[data.length-1].name;

        document.getElementById("dis1").innerHTML = data[data.length-1].dis;
        document.getElementById("dis2").innerHTML = data[data.length-1].dis1;

        document.getElementById("iemail").innerHTML = data[data.length-1].email;
        document.getElementById("iphone").innerHTML = data[data.length-1].phone;
        document.getElementById("ild").innerHTML = data[data.length-1].link;
        document.getElementById("iadd").innerHTML = data[data.length-1].Address;

        document.getElementById("lan1").innerHTML = data[data.length-1].lan1;
        document.getElementById("lan2").innerHTML = data[data.length-1].lan2;

        document.getElementById("int1").innerHTML = data[data.length-1].int1;
        document.getElementById("int2").innerHTML = data[data.length-1].int2;
        document.getElementById("int3").innerHTML = data[data.length-1].int3;


        document.getElementById("pro11").innerHTML = data[data.length-1].pro11;
        document.getElementById("pro12").innerHTML = data[data.length-1].pro12;

        document.getElementById("pro21").innerHTML = data[data.length-1].pro21;
        document.getElementById("pro22").innerHTML = data[data.length-1].pro22;

        document.getElementById("pro31").innerHTML = data[data.length-1].pro31;
        document.getElementById("pro32").innerHTML = data[data.length-1].pro32;

        document.getElementById("pro41").innerHTML = data[data.length-1].pro41;
        document.getElementById("pro42").innerHTML = data[data.length-1].pro42;

        document.getElementById("ed11").innerHTML = data[data.length-1].edu11;
        document.getElementById("ed12").innerHTML = data[data.length-1].edu12;
        document.getElementById("ed13").innerHTML = data[data.length-1].edu13;
        document.getElementById("ed21").innerHTML = data[data.length-1].edu21;
        document.getElementById("ed22").innerHTML = data[data.length-1].edu22;
        document.getElementById("ed23").innerHTML = data[data.length-1].edu23;
        document.getElementById("ed31").innerHTML = data[data.length-1].edu31;
        document.getElementById("ed32").innerHTML = data[data.length-1].edu32;
        document.getElementById("ed33").innerHTML = data[data.length-1].edu33;

        document.getElementById("cer1").innerHTML = data[data.length-1].cer1;
        document.getElementById("cer2").innerHTML = data[data.length-1].cer2;
        document.getElementById("cer3").innerHTML = data[data.length-1].cer3;
        document.getElementById("cer4").innerHTML = data[data.length-1].cer4;

    })


/*fetch("http://localhost:9090/skills")
    .then(resposne => resposne.json())
    .then(data => {
        console.log(data)
        let l = data.length;

        var temp;
        for (var i = 1; i <= l; i++) {

            document.getElementById("skill" + i).style.display = "block";
            document.getElementById("skill" + i).innerHTML = skill[i - 1];
        }
    })

*/
