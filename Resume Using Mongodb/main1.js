window.onload=()=>{
    var old = [];

    (async () => {
        console.log('before start');

        let response = await fetch("http://localhost:2020/main");

        if (response.ok) {
            let old2 = await response.json();
            old = old2[0];
            document.getElementById("name").innerHTML=old.fn + " " + old.ln;
            document.getElementById("role").innerHTML=old.rol;
            document.getElementById("bio").innerHTML=old.bio;
            document.getElementById("mail").innerHTML=old.mail;
            document.getElementById("loc").innerHTML=old.loc;
            document.getElementById("git").innerHTML=old.git
            document.getElementById("mbl").innerHTML=old.mbl
            document.getElementById("lnk").innerHTML=old.lnk
            document.getElementById("ins").innerHTML=old.ins
            document.getElementById("edu1").innerHTML=old.qul1 + " : <br><br>" + old.scl1 + "<br>" +"cgpa:" + old.cgpa1 ; 
            document.getElementById("edu2").innerHTML=old.qul2 + " : <br><br>" + old.scl2 + "<br>" +"cgpa:" + old.cgpa2 ; 
            document.getElementById("edu3").innerHTML=old.qul3 + " : <br><br>" + old.scl3 + "<br>" +"cgpa:" + old.cgpa3 ; 
            document.getElementById("pro1").innerHTML="Project1: " + old.pro1 + "<br></br>"
            document.getElementById("pro2").innerHTML="Project2: " + old.pro2 + "<br></br>"
            document.getElementById("pro3").innerHTML="Project3: " + old.pro3 + "<br></br>"
            document.getElementById("pro12").innerHTML=" - " + old.pro12 + "<br></br>"
            document.getElementById("pro22").innerHTML=" - " + old.pro22 + "<br></br>"
            document.getElementById("pro32").innerHTML=" - " + old.pro32 + "<br></br>"
            document.getElementById("ac1").innerHTML="Achievement 1: " + old.ac1 + "<br></br>"
            document.getElementById("ac2").innerHTML="Achievement 2: " + old.ac2 + "<br></br>"
            document.getElementById("ac3").innerHTML="Achievement 3: " + old.ac3 + "<br></br>"
            document.getElementById("o1").innerHTML= old.o1 + "<br></br>"
            document.getElementById("o2").innerHTML=old.o2 + "<br></br>"
            document.getElementById("c1").innerHTML=old.c1 + "<br></br>"
            document.getElementById("c2").innerHTML=old.c2 + "<br></br>"
            document.getElementById("c3").innerHTML=old.c3 + "<br></br>"
            document.getElementById("l1").innerHTML=old.l1 + "<br></br>"
            document.getElementById("l2").innerHTML=old.l2 + "<br></br>"
            document.getElementById("l3").innerHTML=old.l3 + "<br></br>"
            document.getElementById("l4").innerHTML=old.l4 + "<br></br>"
            document.getElementById("h1").innerHTML=old.h1 + "<br></br>"
            document.getElementById("h2").innerHTML=old.h2 + "<br></br>"
            document.getElementById("h3").innerHTML=old.h3 + "<br></br>"
            document.getElementById("h4").innerHTML=old.h4 + "<br></br>"


            


            console.log(old);

        } else {
            alert("HTTP-Error: " + response.status);
        }

        console.log('after start');
    })();
}