// IMAGE
// var loadFile = function (event) {
//     var image = document.getElementById('pic');
//     image.src = URL.createObjectURL(event.target.files[0]);
// };

async function sendData() {
  
  //     const image = document.getElementById("pic_in").value;
  //    // alert(image);

  const name = document.getElementById("fname").value;
  // // alert(name);
  // const adres =document.getElementById('faddrs').value;
  // const mobn=document.getElementById('fmobno').value;
  // const mail=document.getElementById('fmail').value;
  // const dob=document.getElementById('dob').value;
  // const lang1=document.getElementById('lang1').value;

  // var formdata= document.forms.form1;
  // var formdetails= new FormData(formdata);
  // const gender=formdetails.get("gender");
  // const mrid=formdetails.get("mrid");

  // // const pic=document.getElementById('pic').value;
  // // alert(pic);

  // const yop=document.getElementById('yop').value;
  // const snam=document.getElementById('snam').value;
  // const prcnt=document.getElementById('prcnt').value;
  // const board=document.getElementById('board').value;

  // const yop1=document.getElementById('yop1').value;
  // const snam1=document.getElementById('snam1').value;
  // const prcnt1=document.getElementById('prcnt1').value;
  // const board1=document.getElementById('board1').value;

  // const yop2=document.getElementById('yop2').value;
  // const cname=document.getElementById('cname').value;
  // const prcnt2=document.getElementById('prcnt2').value;
  // const uni=document.getElementById('uni').value;

  // const os=document.getElementById('os').value;
  // const lang=document.getElementById('lang').value;
  // const data=document.getElementById('data').value;
  // const other=document.getElementById('other').value;

  // const hobi=document.getElementById('hobi').value;
  // const hobi1=document.getElementById('hobi1').value;
  // const hobi2=document.getElementById('hobi2').value;
  // const hobi3=document.getElementById('hobi3').value;
  // // const email=document.getElementById('fmail').value;
  //alert(namee);

  var resume = {
    name: name,
    // address:adres, mobile:mobn, email:mail, dob:dob, lang1:lang1, gender:gender, mrid:mrid,

    // yop:yop, snam:snam, prcnt:prcnt, board:board,

    // yop1:yop1, snam1:snam1, prcnt1:prcnt1, board1:board1,

    // yop2:yop2, cname:cname, prcnt2:prcnt2, uni:uni,

    // os:os, lang:lang, data:data, other:other,

    // hobi:hobi, hobi1:hobi1, hobi2:hobi2, hobi3:hobi3,

    // image:image
  };

   fetch("http://localhost:4000/exportdata", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resume),
  })
    .then((response) => response.json())
    .then((resume) => {
      console.log("Success:", resume);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  window.open("resume_db.html");
}

 function showdata() {
  debugger;
  var resume;

   fetch("http://localhost:4000/importdata", {
    method: "GET", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resume),
  })
    .then((response) => response.json())
    .then((resume) => {
      console.log("Success:", resume);
      // data(resume);
      keys = resume;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

    for (i = 0; i < keys.length; i++) {
        s = keys[i];
      
        // alert(s.name);
        document.getElementById("name").innerHTML = s.name;
        // document.getElementById("raddrs").innerHTML=s.address;
        // document.getElementById("rmob").innerHTML=s.mobile;
        // document.getElementById("remail").innerHTML=s.email;
        // document.getElementById('dob').innerHTML=s.dob;
        // document.getElementById('lang1').innerHTML=s.lang1;
        // document.getElementById('mle').innerHTML=s.gender;
        // document.getElementById('ms').innerHTML=s.mrid;
      
        // document.getElementById("yop").innerHTML=s.yop;
        // document.getElementById("snam").innerHTML=s.snam;
      
        // document.getElementById("prcnt").innerHTML=s.prcnt;
        // document.getElementById("board").innerHTML=s.board;
      
        // document.getElementById("yop1").innerHTML=s.yop1;
        // document.getElementById("snam1").innerHTML=s.snam1;
        // document.getElementById("prcnt1").innerHTML=s.prcnt1;
        // document.getElementById("board1").innerHTML=s.board1;
      
        // document.getElementById("yop2").innerHTML=s.yop2;
        // document.getElementById("cname").innerHTML=s.cname;
        // document.getElementById("prcnt2").innerHTML=s.prcnt2;
        // document.getElementById("uni").innerHTML=s.uni;
      
        // document.getElementById("os").innerHTML=s.os;
        // document.getElementById("lang").innerHTML=s.lang;
        // document.getElementById("data").innerHTML=s.data;
        // document.getElementById("other").innerHTML=s.other;
      
        // document.getElementById("hobi").innerHTML=s.hobi;
        // document.getElementById("hobi1").innerHTML=s.hobi1;
        // document.getElementById("hobi2").innerHTML=s.hobi2;
        // document.getElementById("hobi3").innerHTML=s.hobi3;
      
        // document.getElementById("name1").innerHTML=s.name;
      
        // document.getElementById("pic").src=s.image;
      
        // document.write(s.name,"<br>");
        // document.write(s.address,"<br>");
        // document.write(s.mobile,"<br>");
      }
}

for (i = 0; i < keys.length; i++) {
  s = keys[i];

  alert(s.name);
  document.getElementById("name").innerHTML = s.name;
  // document.getElementById("raddrs").innerHTML=s.address;
  // document.getElementById("rmob").innerHTML=s.mobile;
  // document.getElementById("remail").innerHTML=s.email;
  // document.getElementById('dob').innerHTML=s.dob;
  // document.getElementById('lang1').innerHTML=s.lang1;
  // document.getElementById('mle').innerHTML=s.gender;
  // document.getElementById('ms').innerHTML=s.mrid;

  // document.getElementById("yop").innerHTML=s.yop;
  // document.getElementById("snam").innerHTML=s.snam;

  // document.getElementById("prcnt").innerHTML=s.prcnt;
  // document.getElementById("board").innerHTML=s.board;

  // document.getElementById("yop1").innerHTML=s.yop1;
  // document.getElementById("snam1").innerHTML=s.snam1;
  // document.getElementById("prcnt1").innerHTML=s.prcnt1;
  // document.getElementById("board1").innerHTML=s.board1;

  // document.getElementById("yop2").innerHTML=s.yop2;
  // document.getElementById("cname").innerHTML=s.cname;
  // document.getElementById("prcnt2").innerHTML=s.prcnt2;
  // document.getElementById("uni").innerHTML=s.uni;

  // document.getElementById("os").innerHTML=s.os;
  // document.getElementById("lang").innerHTML=s.lang;
  // document.getElementById("data").innerHTML=s.data;
  // document.getElementById("other").innerHTML=s.other;

  // document.getElementById("hobi").innerHTML=s.hobi;
  // document.getElementById("hobi1").innerHTML=s.hobi1;
  // document.getElementById("hobi2").innerHTML=s.hobi2;
  // document.getElementById("hobi3").innerHTML=s.hobi3;

  // document.getElementById("name1").innerHTML=s.name;

  // document.getElementById("pic").src=s.image;

  // document.write(s.name,"<br>");
  // document.write(s.address,"<br>");
  // document.write(s.mobile,"<br>");
}
