// === Traditional Declaring Functions ===
// function showText(text){
//     return text;
// }

// === Array Functions ===
// var showText = (text) => {
//     return `${text} !!!`;
// }
// console.log(showText('My sample text'));

// === Function multiple params ===
// var sum = (...numbers) => {
//     let sum = 0;
//     for(let i=0;i<numbers.length;i++){
//         sum += numbers[i];
//     }
//     return sum;
// }
// console.log('Suma cyfr: '+sum(12,10,10));


// === Short Price with VAT ===
// const price_nett = (price,tax = 23) => price*(1+tax/100);
// console.log(`Apple price nett: ${price_nett(3.35)}`);