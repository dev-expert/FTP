// const a = 
// const b = 
const c = (elementb) => {
    console.log('function c')
    elementb(() => {
        console.log('function a');
    });
}

c(
    (elementa) => {
        console.log('function b');
        elementa();
    }
);