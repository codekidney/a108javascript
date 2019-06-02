// const config = {login: 'username'};
// config.login = 'Piotr';
// console.log(config);

// let price_apple = price_orange = 12;
// console.log(price_orange); 

// === String template ===
// const user = { first_name: 'Kamil', second_name: 'Nowak', age: '30'};
// console.log(`\nImię: ${user.first_name}`, `\nNazwisko: ${user.second_name}`);

// === Multiline text ===
// let message = "Username: \
// Kamil Nowak";
// console.log(message);

/* === Variables Scope === */
// let sampleFunVar = 2;
// function sampleFun() {
//     let sampleFunVar = 12;
//     return sampleFunVar;
// }
// console.log(sampleFunVar);
// console.log(window.sampleFun());

/* === Variables Types === */
// let a = 'sample texts'
// if(typeof a === 'object'){
//     console.log( 'Variable type object');
// }

// const sun = true;
// console.log('Weather is '+(sun) ? 'good':'bad');

/* === Arrays === */
// let myArr = ['Kamil', 'Tomek', 'Paweł'];
// myArr.push('Krysia','Ola');
// console.log(`Array myArr: ${myArr.join(',')}`);
// console.log(`Array myArr (sort): ${myArr.sort()}`);
// console.log(`Array myArr (reverse): ${myArr.reverse()}`);

// Functin "Concat"
// let myArr1 = [1,2];
// let myArr2 = [11,12];
// let myArr3 = [12];
// console.log(myArr1.concat(myArr2,myArr3));
// console.log( [...myArr1,...myArr2,...myArr3] );

// Function "Of"
// console.log(Array.of(1,2));

// Function "Includes"
// console.log(Array.of('Polska','Niemcy', 'Portugalia').includes('Węgry'));

// Function "toString"
// let myArr = ['Polska','Niemcy'];
// console.log(Array.of('Polska','Niemcy').toString());
// console.log(typeof myArr);


// Function "splice" (remove, and add)
// let myArr = ['Polska','Niemcy', 'Portugalia'];
// console.log(myArr);
// myArr.splice(2,1,'Włochy')
// console.log(myArr);

// let myCar = {
//     brand: 'Ferrari',
//     color: 'red',
//     showSlogan() {
//         return 'My '+this.brand+' has nices color '+this.color;
//     }
// };
// Object.freeze(myCar);
// myCar.brand = 'Fiat';
// myCar['brand'] = 'Fiat';

// console.log( myCar.showSlogan() );
// console.log( Object.getOwnPropertyNames(myCar) );

// class Wehicle {
//     constructor(name,wheels){
//         this.name = name;
//         this.wheels = wheels;
//     }
//     getDescription(){
//         return `Wehicle ${this.name} has ${this.wheels} wheels`;
//     }
// }

// class TextTools {
//     static makeUpperCase(text){
//         return text.toUpperCase();
//     }
// }
// class Car extends Wehicle {
//     setBrand(brand){
//         this.brand = brand;
//     }
// }

// let myWehicle = new Wehicle('Bike',2);
// console.log(myWehicle.getDescription());

// static method
// console.log(TextTools.makeUpperCase('abn'));

// let myCar = new Car('Ferrari',4);
// Car.prototype.getDescription = function(){
//     return `Car ${this.name} has ${this.wheels} wheels`;
// }
// console.log(myCar.getDescription());

