var arr=[];
var ul = document.getElementById("list");
var input = document.getElementById("url");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
  });
  function is_url(str){
        regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(str)){return true;}
        else{return false;}
        }
  function checkurl(str){
    var flag=0;
    for(i=0;i<arr.length;i++)
    {
      if(arr[i]==str)
      {
        flag=1;
      }     
    }
    if(flag==1)
    {
      alert("Enter a Unique URL.");
      return false;
    }
    else
    {
      return true;
    }
  }
function addurl()
{
  var val=document.getElementById("url").value;
  if(is_url(val))
  {
    if(checkurl(val))
    {
    console.log(val);
    arr.push(val);
    showurl();
    }
  }
  else
  {
  alert("Enter a Valid Url");
  }
  console.log(arr);
}
function showurl()
{
  let str="";
  arr.forEach(element => {
    str+=`<li><input type="checkbox" id="urlcheck" onclick="selectcheckbox('${element}')">
    ${element}<button onclick="dellistitem('${element}')">Delete URL</button><br>`;
    console.log(element);
  });
  document.getElementById("list").innerHTML = str;
}
function dellistitem(d)
{
  arr.splice(arr.indexOf(d), 1);
  showurl();
}
function selectcheckbox(u){
  var c=document.getElementById("urlcheck");
}