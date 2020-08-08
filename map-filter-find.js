const number = [1,2,3,4,6,7,9];
const output =[];
for(let i=0; i< number.length; i++){
    const element = number[i];
    const makeDouble = element*element;
    output.push(makeDouble);
}
console.log(output);


// function square(element){
    
// }
const numbersArray = [3,4];

// const result = numbersArray.map(function(element){
//     return element*element;
// })

const result = numbersArray.map(element => element * element)

console.log(result);


//  Use of filter filter


const num = [1,2,3,4,20];
 const resultFilter = num.filter( x => x >19)
 console.log(resultFilter);


