// class Animal {
//     legs = 0;
//     constructor(name){
//         this.name = name;
//     }
// }

// let lion = new Animal('Henry');
// lion.legs = 4;

// for (var i in lion){
//     console.log(lion[i]);
// }

// let names = ['Kamil','Paweł','Tomek'];
// for(var i=0;i<names.length;i++){
//     console.log(`Imię ${names[i]}`);
// }

/* === forEeach Loop === */

// names.forEach(function(elem,idx){
//     console.log(`User ${elem} with ID ${idx}`);
// })

// names.forEach(
//     (elem, idx) => {
//         console.log(`User ${elem} with ID ${idx}`);
//     }
// );

/* === Object Loop - for in === */
// let myCar = {
//     model: '105',
//     brand: 'Fiat',
//     status: 'used'
// }
// for( prop in myCar) {
//     console.log(`${prop} = ${myCar[prop]}`);
// }

/* === Whitel vs DoWhile === */
// let item = 15;
// Nothing will happen
// while (item >15 && item < 20) {
//     console.log(item);
//     item++;
// }
// will start iteration
// do {
//     console.log(item);
//     item++;
// } while(item > 15 && item < 20);

/* === Continue and Break === */
// let i = 0
// while(i<20){
//     i++;
//     if (i % 2 == 0){
//         continue;
//     }
//     if (i > 10) break;
//     console.log(`${i}`);
// }
