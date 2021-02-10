let a = ["1", "2", "3", "4", "3", "2", "1"];

for(let i = 0; i<a.length; i++){
    
    if(a.lastIndexOf(a[i]) == a.indexOf(a[i])){
        alert(a[i]);
    }
}