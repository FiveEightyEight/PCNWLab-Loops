/*
    @func getMiddle
    @param {array} arr
    @return {array}
    @desc - get the middle item of an array
            if even number of elements, return the middle TWO items
            
    @example - getMiddle([1,2,3); // [3]
               getMiddle([1,2,3,4]); // [2,3]
*/

const getMiddle = (arr) => {
    const nuArr = [];
    if (arr.length % 2 === 0) {
        nuArr.push(arr[Math.floor(arr.length/2)-1]);
        nuArr.push(arr[Math.floor(arr.length/2)]);
        
        return nuArr
    }
    nuArr.push( arr[Math.ceil( arr.length/2 )] );
    return nuArr;
}
console.log(getMiddle([1,2,3])); // [3]
console.log(getMiddle([1,2,3,4])); // [2,3])

/*
    @func addToMiddle
    @param {array} arr
    @param {anything} element
    @return {array}
    @desc - add element to the middle of array
            if odd number of elements, add after middle
            
    @example - addToMiddle([1,2,3], 0); // [1,2,0,3];
               addToMiddle([1,2,3,4], 0); // [1,2,0,3,4]
*/
// problem 2

const addToMiddle = (arr, element) => {
    const nuArr = [];
    for(let i =  0; i < arr.length; i++){
        if (arr.length % 2 === 0 && i === Math.floor(arr.length/2)) {
            // nuArr.push(arr[Math.floor(arr.length/2)])
            nuArr.push(element);
        }  
        if (arr.length % 2 === 1 && i === Math.floor(arr.length/2)+1){
            nuArr.push(element);
        }
        nuArr.push(arr[i]);
        }
        return nuArr;
}

console.log(addToMiddle([1,2,3], 0)); // [1,2,0,3];)


console.log(addToMiddle([1,2,3,4], 0)); // [1,2,0,3,4])

/*
    @func hasAtSymbol
    @param {string} email
    @return {boolean}
    @desc - return true if '@' present in string
    @example - hasAtSymbol('taq@karim.com'); // true
               hasAtSymbol('foobar'); // false
*/
// problem 3

const hasAtSymbol = (string) => {
    for(let i =  0; i < string.length; i++){
        if(string[i] === '@'){
            return true;
        }
    }
    return false;
}

console.log(hasAtSymbol('taq@karim.com')); // true
console.log(hasAtSymbol('foobar')); // false
/*
    @func capitalize
    @param {string} str
    @returns {string}
    
    @desc - capitalize the FIRST letter of string
    @example - capitalize('taq'); // 'Taq'
               capitalize('Taq'); // 'Taq'
*/

// problem 4

const capitalize = (str) => {
    let nuStr = "";
    for(let i = 0; i < str.length; i++){
        if(i === 0){
      nuStr += str.charAt(i).toUpperCase();  
       } else {
        nuStr += str[i];
        }
    }
    return nuStr;   
}

console.log(capitalize('taq')); // 'Taq'
console.log(capitalize('Taq')); // 'Taq'

/*
    @func isAllUpperCased
    @param {string} str
    @returns {boolean}
    
    @desc - return true if all caps else false
    @example isAllUpperCased('TAQ'); // true
             isAllUpperCased('tAq'); // false
*/
// problem 5

const isAllUpperCased = (str) => {
    if(str === str.toUpperCase()){
        return true;
    }
    return false;
}

console.log(isAllUpperCased('TAQ')); // true
console.log(isAllUpperCased('tAq')); // false
/*
    @func capitalizeEachWord
    @param {string} str
    @returns {string}
    
    @desc - returns string with each WORD capitalized
    @example - capitalizeEachWord('the cow jumped over the fence')
               // 'The Cow Jumped Over
                The Fence'
*/
// problem 6

const capitalizeEachWord = (str) => {
    let nuStr = "";

    for (let i = 0; i < str.length; i++){
        if(i === 0){
            nuStr += str.charAt(i).toUpperCase();
        } else if (str.charAt(i) === " ") {
            nuStr += str.charAt(i)
            nuStr += str.charAt(i+1).toUpperCase();
            i++;
        } else {
            nuStr += str.charAt(i)
        }
    }
    return nuStr;
}

console.log(capitalizeEachWord('the cow jumped over the fence'));
/*
    @func capitalizeEachWordWithExceptions
    @param {string} str
    @param {array} exceptions
    @returns {string}
    
    @desc - returns string with each WORD capitalized EXCEPT the exceptions
    @example - capitalizeEachWord(
                'the cow and a fox went on the trip', 
                ['the', 'and', 'a', 'on']
               )
               // 'The Cow and a Fox Went on the Trip'
*/
//problem 7

const capitalizeEachWordWithExceptions = (str, exceptions) => {
    str = str.split(' ');
    let nuStr = '';
    
    for (let i = 0; i < str.length; i++) {
        console.log(`At index ${i}; Str: ${str[i]} Exception: ${exceptions[i]}`)
        for(let j = 0; j < exceptions.length; j++){ 
       if (str[i] === exceptions[j]){
            nuStr += str[i];
                if(i === str.length-1){
                    break;
                }
            nuStr += " ";
        } else {
            str[i][0] = str[i][0].toUpperCase()
            nuStr += str[i];
            if(i === str.length-1){
                break;
            }
            nuStr += " ";
         }
      }   
    }
    return nuStr;
}

console.log(capitalizeEachWordWithExceptions(
    'the cow and a fox went on the trip', 
    ['the', 'and', 'a', 'on']
   ));
   // 'The Cow and a Fox Went on the Trip'


/*
    @func findAtMentions
    @param {string} tweet
    @returns {array}
    
    @desc - returns array with all the @mentions
    @example - 
        findAtMentions('@the_taqquikarim @someOtherGuy @etc this was a cool event @foobar')
        // ['the_taqquikarim', 'someOtherGuy', 'etc', 'foobar']
*/

/*
    @func roundToN
    @param {number} num
    @param {number} decimalPlaces
    @returns {number}
    
    @desc - rounds to the decimalPlaces
    @example - roundToN(1123.1234, 3); // 1123.123
*/

/*
    @func addArrays
    @param {array} arrays
    @returns {array}
    
    @desc - adds arrays together
    @example - addArrays([
        [1,2,3],
        [4,5],
        [6,7,8,9]
    ]); // [1,2,3,4,5,6,7,8,9]
*/


