/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);
    let index = 0;
    let result = 0;
    for(let i=0;i<g.length;i++){
        while(index<s.length && g[i]>s[index]){
            index++;
        }
        if(index >= s.length){
            break;
        }
        index++;
        result++;
    }
    return result;
};