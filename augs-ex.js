// Sum

// function sum() {
//     let args = Array.from(arguments);
//     let result = 0;

//     args.forEach( (el)=> result += el );

//     return result
// }

function sum(...args) {
    let result = 0;

    args.forEach((el) => (result += el));

    return result;
}

console.log(sum(1,2,3,4) ===10);

