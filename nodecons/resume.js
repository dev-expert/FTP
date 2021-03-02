
    fetch('http://localhost:2030/getuserdata')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById("phone").innerHTML = data[data.length-1].phone
            document.getElementById("name").innerHTML  = data[data.length-1].name
            document.getElementById("email").innerHTML = data[data.length-1].email
            
            document.getElementById("address").innerHTML = data[data.length-1].Address
            document.getElementById("cert1").innerHTML = data[data.length-1].cert1
            document.getElementById("cert2").innerHTML= data[data.length-1].cert2

            document.getElementById("hobb1").innerHTML = data[data.length-1].hobb1
            document.getElementById("hobb2").innerHTML = data[data.length-1].hobb2
            document.getElementById("lang1").innerHTML = data[data.length-1].lang1
            document.getElementById("lang2").innerHTML = data[data.length-1].lang2
            document.getElementById("lang3").innerHTML = data[data.length-1].lang3
        
            document.getElementById("about").innerHTML = data[data.length-1].about
            document.getElementById("educ1").innerHTML = data[data.length-1].educ1
            document.getElementById("educ2").innerHTML = data[data.length-1].educ2
            document.getElementById("educ3").innerHTML = data[data.length-1].educ3
            document.getElementById("source1").innerHTML = data[data.length-1].source1
            document.getElementById("source2").innerHTML = data[data.length-1].source2
            document.getElementById("source3").innerHTML = data[data.length-1].source3
            document.getElementById("projs1").innerHTML = data[data.length-1].projs1
            document.getElementById("projs2").innerHTML = data[data.length-1].projs2
            document.getElementById("projs3").innerHTML = data[data.length-1].projs3
            document.getElementById("web1").innerHTML = data[data.length-1].web1
            document.getElementById("web2").innerHTML = data[data.length-1].web2
            document.getElementById("web3").innerHTML = data[data.length-1].web3
            document.getElementById("acti1").innerHTML = data[data.length-1].acti1
            document.getElementById("acti2").innerHTML = data[data.length-1].acti2
          });
          
          let l = skill.length;
          for (var i = 1; i <= l; i++) {

            document.getElementById("lenskill" + i).style.display = "block";
            document.getElementById("lenskill" + i).innerHTML = skill[i - 1];
         }

