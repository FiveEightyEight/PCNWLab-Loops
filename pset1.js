/*
    @func average
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            find average of all numbers
    @example - average([1,2,3,4]); // 2.5
*/

const average = (arr) => {
    let average = 0;
    for(let i = 0; i < arr.length; i++) {
        average += arr[i];
    }

    return average / arr.length;
}

console.log(average([1,2,3,4])); // 2.5
/*
    @func squareEach
    @param {array} arr
    @returns {array}
    @desc - square each value in array
    @example - squareEach([1,2,3,4]); // [1,4,9,16]
*/
// problem 2
const squareEach = (arr) => {
    const nuArr = [];
    for(let i = 0; i < arr.length; i++) {
        //arr[i] =
        nuArr.push(arr[i] ** 2);    
    }
    return nuArr;
}
console.log(squareEach([1,2,3,4])); // [1,4,9,16]

/*
    @func averageSquare
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            square each element
            find the average of the 
            SQUARES of each element in this array
    @example - 
        // turn [1,2,3,4] to [1,4,9,16]
        // then find the averate of the array to the right
        averageSquare([1,2,3,4); // 7.5
*/
// Problem 3

const averageSquare = (arr) => {
    return average(squareEach(arr));
}
console.log(averageSquare([1,2,3,4])); // 7.5
/*
    @func negateArr
    @param {array} arr
    @returns {array}
    @desc - negate each item in array
    @example
        negateArr([1,2,3,4]); // [-1,-2,-3,-4]
*/
// problem 4

const negateArr = (arr) => {
    const nuArr = [];
    for(let i = 0; i < arr.length; i++) {
        nuArr.push(arr[i] * -1);    
    }
    return nuArr;
}

console.log(negateArr([1,2,3,4])); // [-1,-2,-3,-4])

/*
    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - reverse an array
    @example - reverseArr([1,2,3,4]); // [4,3,2,1]
*/
// problem 5

const reverseArr = (arr) => {
    //can be done with .reverse()
    const nuArr = [];
    for(let i =  arr.length-1; i >= 0 ; i--) {
        nuArr.push(arr[i]);    
    } 
    return nuArr;
}

console.log(reverseArr([1,2,3,4])); // [4,3,2,1])

/*
    @func negateBackwards
    @param {array} arr
    @returns {array}
    @desc - reverse AND negate array
    @example
        negateBackwards([1,2,3,4]); // [-4, -3, -2, -1]
*/
// problem 6

const negateBackwards = (arr) => {
    return negateArr(reverseArr(arr));
}

console.log(negateBackwards([1,2,3,4])); // [-4, -3, -2, -1])

