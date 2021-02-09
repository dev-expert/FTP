function isUrlValid(str) {
    var regexQuery = "/(http(s)?://.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/";
    var url = new RegExp(regexQuery,"g");
    if (url.test(input1)) {
        alert('Great, you entered an E-Mail-address');
        return true;
    }
    return false;
}    
if(isUrlValid(input1))
{        
function addRow(){
    var input1=document.getElementById('input1').value;
    var table=document.getElementsByTagName('table')[0];

    var newRow=table.insertRow(1);

    var cel1=newRow.insertCell(0);
    var cel2=newRow.insertCell(1);


    cel1.innerHTML=input1;


    cel2.innerHTML=`<a href="#" onClick="onDelete(this)">Delete</a>`
}
function onDelete(td){
    
        row=td.parentElement.parentElement;
        document.getElementById("myTable").deleteRow(row.rowIndex);
       
    
}
}
else
alert("enter url")
