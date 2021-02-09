var input = document.getElementById("url");
        input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("myBtn").click();
        }
        });
        function is_url(str)
        {
        regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(str))
        {
          return true;
        }
        else
        {
          return false;
        }
        }
        function addurl()
        {
            var ul = document.getElementById("list");
            var li = document.createElement("li");
            var val=document.getElementById("url").value;
            if(is_url(val))
            {
            li.setAttribute('id',val.value);
            li.appendChild(document.createTextNode(val));
            var button = document.createElement("button");
            button.innerHTML = "Delete URL";
            li.appendChild(button);
            ul.appendChild(li);
            button.onclick=function()
            {
              ul.removeChild(li);
            };
            }
            else
            {
                alert("Enter a Valid Url");
            }
        }