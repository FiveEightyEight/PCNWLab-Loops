/*
    @func average
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            find average of all numbers
    @example - average([1,2,3,4]); // 2.5
*/


const average = (arr) => {

    return arr.reduce( (acc, element) => {
        return acc += element
    }) / arr.length;
        
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
    return arr.reduce( (acc, element) => {
       acc.push(element ** 2);
       return acc;
    },[])
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

const averageSquare = (arr) => {
    return arr.reduce( (acc, element) => {
        acc.push(element ** 2)
        return acc;
    }, []).reduce( (acc, element) => {
        acc += element
        return acc;
    }) / arr.length;
}

console.log(averageSquare([1,2,3,4])); // 7.5)

/*
    @func negateArr
    @param {array} arr
    @returns {array}
    @desc - negate each item in array
    @example
        negateArr([1,2,3,4]); // [-1,-2,-3,-4]
*/

const negateArr = (arr) => {
    return arr.reduce((acc, element) => {
        acc.push(element * -1)
        return acc;
    },[])
}
console.log(negateArr([1,2,3,4])); // [-1,-2,-3,-4]
/*
    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - reverse an array
    @example - reverseArr([1,2,3,4]); // [4,3,2,1]
*/

const reverseArr = (arr) => {
    return arr.reduce((acc, element, i)=> {
         acc.push( arr[(arr.length -1) - i ] );
        return acc;
    },[]) 
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


const negateBackwards = (arr) => {
    return arr.reduce((acc, element, i) => {
        acc.push( arr[ (arr.length - 1) - i])  
        return acc
    }, []).reduce((acc, element) => {
        acc.push(element * -1);
        return acc;
    }, [])
}

console.log(negateBackwards([1,2,3,4])); // [-4, -3, -2, -1]
