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

let names = ['Kamil','Paweł','Tomek'];
// for(var i=0;i<names.length;i++){
//     console.log(`Imię ${names[i]}`);
// }

names.forEach(function(elem,idx){
    console.log(elem+idx);
})