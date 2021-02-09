function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

function add() {
    var n = document.getElementById("name");
    var check =document.getElementById("name").value
    if(validURL(check)){
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Remove";
    li.setAttribute('id', n.value);
    li.appendChild(document.createTextNode(n.value));
    ul.appendChild(li);
    li.appendChild(btn);
    btn.addEventListener('click', function () {
    ul.removeChild(li);
    }
    );}
    else
    {
        alert("This is invalid text");

    }
    
    
}

