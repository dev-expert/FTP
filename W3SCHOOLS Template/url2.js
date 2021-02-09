            
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
    if(confirm('Are you sure to delete this record?')){
        row=td.parentElement.parentElement;
        document.getElementById("myTable").deleteRow(row.rowIndex);
       
    }
}