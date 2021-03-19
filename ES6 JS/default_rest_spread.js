// function abc(a=2, b=3) {
//     return(a+b); 
// }
// console.log(abc());
// var q = function (...arr) {
//     console.log("arr =" +arr);
//     // console.log("i=" + i + "j=" +j);   
// }
// q(1,2,3,4,5,6);

var q = function (i,j,k) {
    console.log("i =" + i + "j =" + j + "k =" + k );
    // console.log("i=" + i + "j=" +j);   
}
var arr1 = [1,2,3]
q(...arr1);

