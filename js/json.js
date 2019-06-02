
// let myCar = {model: '105',brand: 'Fiat',status: 'used'};
// let myCarStr = JSON.stringify(myCar);
// let myCarImp = JSON.parse(myCarStr);
// console.log( myCarStr );
// console.log( myCarImp );

let xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = () => {
    console.log( this );
};
xmlHttp.open('GET', 'json-data.json', true);
xmlHttp.send();