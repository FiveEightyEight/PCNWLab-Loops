/*
    @func removeNegatives
    @param {array} arr
    @returns {array}
    @desc - takes all engative numbers and makes positive
    @example - removeNegatives([-3,-2,1,2,3,-4]); // [3,2,1,2,3,4]
*/
const removeNegatives = (arr) => {
    const nuArr = [];
    for(let i = 0; i < arr.length; i++) {
        //arr[i] =
        nuArr.push(Math.abs(arr[i]));    
    }
    return nuArr;
}

console.log(removeNegatives([-3,-2,1,2,3,-4])); // [3,2,1,2,3,4])

/*
    @func findVal
    @param {array} arr
    @param {anything} val
    @returns {number}
    @desc - checks each value of array and compares to val
            if found, returns the INDEX at which val was found
            otherwise, returns -1
    @example
        findVal([1,2,3,4], 1); // 0
        findVal([1,2,3,4], 4); // 3
        findVal([1,2,3,4], 9); // -1
*/
// problem 2

const findVal = (arr, val = 0) => {
    let index = -1;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val){
            index = i;
        }
    }
    return index;
}

console.log(findVal([1,2,3,4], 1)); // 0
console.log(findVal([1,2,3,4], 4)); // 3
console.log(findVal([1,2,3,4], 9)); // -1

/*
    @func removeOdds
    @param {array} arr
    @returns {array}
    @desc - checks each value of array
            if odd, remove from array
            otherwise, keep in array
    @example
        removeOdds([1,2,3,4]); // [2,4]
        removeOdds([1,"2",3,4]); // [4]
*/
// problem 3
 
const removeOdds = (arr) => {
    const nuArr = [];
    for(let i =  0; i < arr.length; i++) {
        if(typeof arr[i] === 'number' && arr[i] % 2 === 0){
            nuArr.push(arr[i]);  
        }  
    } 
    return nuArr;
}

console.log(removeOdds([1,2,3,4])); // [2,4]
console.log(removeOdds([1,"2",3,4])); // [4]
/*
    @func addSquares
    @param {array} arr
    @returns {array}
    @desc - for each value in array, square it then add to array
    @example - 
        addSquares([1,2,3,4); // [1,2,3,4,1,4,9,16]
*/
// problem 4

const addSquares = (arr) => {
    const nuArr = [];
    for(let i =  0; i < arr.length; i++) {
        nuArr.push(arr[i] ** 2);
    } 
    return nuArr;
}

console.log(addSquares([1,2,3,4])); // [1,2,3,4,1,4,9,16]
/*
    @func doubleify
    @param {array} arr
    @returns {array}
    @desc - take each value of array, add same value right after
    @example - doubleify([1,2,3,4); // [1,1,2,2,3,3,4,4]
*/


/*
    @func findMax
    @param {array}
    @returns {number}
    @desc - find largest number in array
    @example - findMax([1,2,3,99,4]); // 99 
*/
