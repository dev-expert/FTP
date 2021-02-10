let urll=[];
let flag=0;

function check(){

    r= /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi; 
    
    if(r.test(input1.value)==false){
        alert("Please Enter Valid URL");
        //msg.innerHTML="Enter Valid URL";
    }
    else{
        duplicate();
    }
}



function duplicate(){
    //alert(urll[flag]);

    if(urll.indexOf(document.getElementById("input1").value)<0)
    {
        urll[flag]=document.getElementById("input1").value;
        flag++;
        addRow();
    }

    else{
        alert("This URL is already in our Bank.");
    }

}


function addRow(){
    
    var input1=document.getElementById('input1').value;



    var table=document.getElementsByTagName('table')[0];

    var newRow=table.insertRow(1);

    var cel1=newRow.insertCell(0);
    var cel2=newRow.insertCell(1);
    var cel3=newRow.insertCell(2);



    cel1.innerHTML='<input type="checkbox" id="select"></input>'
    cel2.innerHTML=input1;


    cel3.innerHTML=`<a href="#" onClick="onDelete(this)">Delete</a>`
}
function onDelete(td){
    if(confirm('Are you sure to delete this record?')){
        row=td.parentElement.parentElement;
        document.getElementById("myTable").deleteRow(row.rowIndex);
       
    }
}