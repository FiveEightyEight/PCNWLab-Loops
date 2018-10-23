/*
    @func average
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            find average of all numbers
    @example - average([1,2,3,4]); // 2.5
*/

// nums +=nums;
    // return nums /arr.length ;

let arr = [1,2,3,4];

const arrAvg = (arr) => {
    let sum = 0;
    arr.forEach(element => {
       sum += element; 
    });
    return sum / arr.length;
}

console.log(arrAvg(arr));


// console.log(pset1Sum += stuff);
// console.log(pset1Sum = pset1Sum / arr.length);


// console.log(average1([1,2,3,4])); // 2.5
/*
    @func squareEach
    @param {array} arr
    @returns {array}
    @desc - square each value in array
    @example - squareEach([1,2,3,4]); // [1,4,9,16]
*/
// problem 2

const squareArr = (arr) => {

    return arr.map(element => {
        return element ** 2;
    })
}

console.log(squareArr(arr))

//   arr[i] = arr[i] ** 2;
//   return arr;
// console.log(squareEach([1,2,3,4])); // [1,4,9,16]

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

const avgSqrArr = (arr) => {
    return arrAvg(squareArr(arr));
}

console.log(avgSqrArr(arr));
/*
    @func negateArr
    @param {array} arr
    @returns {array}
    @desc - negate each item in array
    @example
        negateArr([1,2,3,4]); // [-1,-2,-3,-4]
*/

const negateArr = (arr) => {

    return arr.map(element =>{
        return element * -1;
    })
}

console.log(negateArr(arr));

/*
    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - reverse an array
    @example - reverseArr([1,2,3,4]); // [4,3,2,1]
*/

const reverseArr = (arr) => {
    return arr.map((element, i, arr)=> {
        return arr[(arr.length - 1)-i]
    })
}

console.log(reverseArr(arr))
/*
    @func negateBackwards
    @param {array} arr
    @returns {array}
    @desc - reverse AND negate array
    @example
        negateBackwards([1,2,3,4]); // [-4, -3, -2, -1]
*/

const negateBackwards = (arr) => {
return negateArr(reverseArr(arr));
}

console.log(negateBackwards(arr))