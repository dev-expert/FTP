var listcopy = [];
var len = 0;
var flag = 0;

function lists() {

    var link = document.getElementById("email").value;
    var len = listcopy.length;
    console.log(len);

    const protocol = link.match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)\.[a-z]{2,5}(:[0-9]{1,5})?(\/.)?$/gm)
    console.log(protocol);
    if (protocol != null) {

        for (i = 0; i <= len; i++) {
            if (listcopy[i] === link) {
                flag = 1;
                break;
            }
        }
        if (flag != 1) {
            var node = document.createElement("LI");

            var textnode = document.createTextNode(link);
            var button = document.createElement("button");
            button.innerHTML = 'delete';
            button.className = 'btn';
            node.appendChild(textnode);
            node.appendChild(button);
            document.getElementById("myList").appendChild(node);
            var ulist = document.getElementById("myList");
            listcopy.push(link);
            console.log(listcopy);

            button.addEventListener("click", function() {
                var ulist = document.getElementById("myList");
                ulist.removeChild(node);
            });
        } else
            alert('Link inserted already present in the list');
    } else
        alert('enter valid link');

    flag = 0;

}