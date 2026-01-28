let arr = [10,20,30,40,50,60];

// console.log(arr.findIndex());

// ***********************************8

// console.log(arr.find());

// ******************************************

// console.log(arr.findLast());

// *************************************

console.log(arr.findLastIndex(checkGreater) || "no element found");
function checkGreater(v){
    return v>4000;
}


// ********************************************8
let arr2 = [10,20,30,[10,20,30],[45,34,[23,35],79]]
console.log(arr2.flat(1));







