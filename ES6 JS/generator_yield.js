function* add(){
console.log(5*5);
yield 1;
console.log(10*5);
yield 2;
console.log(5*10)
}
 var a = add();
 console.log(a.next());
 console.log(a.next());
 console.log(a.next());