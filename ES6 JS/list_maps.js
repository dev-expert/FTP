// let mySet = Object.create(null);
// mySet.id = 0;
// if(mySet.id){
//     console.log("id exists");
    
// }

// let myMap = Object.create(null);
// myMap.name ="Shubham Sharma";
// let val = myMap.name;
// console.log(val);


// let map = new Map(),
//     val2 = 'val2',
//     val3 = {
//       key: 'value'
//     };
// map.set(0, 'val1');
// map.set('1', val2);
// map.set({ key: 2 }, val3);
// console.log(map)


// let map,
//     val2 = 'val2',
//     val3 = {
//       key: 'value'
//     };
// map = new Map([[0, 'val1'], ['1', val2], [{ key: 2 }, val3]]);
// console.log(map);



// let set = new Set();
// set.add(1);
// set.add('1');
// set.add({ key: 'value' });
// console.log(set);


// let object1 = { name: 'Zelda'};
// let object2 = { name: 'Link'};
// let characters = new WeakSet([object1, object2]);
// console.log(characters);


let player1 = { name: 'Mario'};
let player2 = { name: 'Luigi'};
 
let players = new Map();
players.set(player1, 'Super Mario!');
players.set(player2, 'Awesome Luigi!');
 
console.log(players.get(player1));
console.log(players.get(player2));
console.log(players.size);

let shield1 = {name: 'Ancient Shield'};
let shield2 = {name: 'Boko Shield'};
 
let shieldmap = new WeakMap([
    [shield1, 'Emblazoned Shield'],
    [shield2, 'Fishermans Shield']
]);
 
console.log(shieldmap);
 
shield1 = null;
// garbage collection
 
console.log(shieldmap.size);