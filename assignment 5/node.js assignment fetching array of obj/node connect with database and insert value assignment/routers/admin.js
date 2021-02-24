// const b = function(elementa) {
//         console.log("function 2");
//         elementa();
//     }
// b(function() {
//     console.log("function1");
// });

const c = function(b) {
        console.log("function 3");
        b(function() {
            console.log("function 1");
        });
    }
    // const a = function() {
    //     console.log("function 1");
    // }
c(function(a) {
    console.log("function 2");
    a();
});