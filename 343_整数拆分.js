/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) { 
    // 解法一
    if(n === 2){
        return 1;
    }
    if(n === 3){
        return 2;
    }
    if(n%3 === 0){
        return 3**(Math.floor(n/3));
    }
    else if(n%3 === 1){
        return (3**((Math.floor(n/3)-1)))*(2**2)
    }
    else{
        return (3**(Math.floor(n/3)))*2
    }
};