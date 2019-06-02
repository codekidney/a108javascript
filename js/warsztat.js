
let iloczyn = (...numbers) => {

    // check empty
    if(numbers.length === 0 ){
        throw "Pass something to function"
    }
    
    // check all params
    if(typeof numbers !== 'object'){
        throw "Please pass numbers";
    }
    numbers.forEach( (elem ) => {
        if(typeof elem !== 'number'){
            throw "Please pass numbers";
        }
    });
    
    // calculate
    var result = numbers[0];
    numbers.splice(0,1);
    numbers.forEach( (elem ) => {
        result *= elem;
    });
    return result;
}

console.log( iloczyn(2,"dsafdsa") );