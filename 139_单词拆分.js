/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length+1).fill(false); // 长度为i的字符串能否组成目标字符串的结果dp[i](true || false)
    dp[0] = true;
    for(let i=1;i<=s.length;i++){
        for(let j=0;j<i;j++){
            let word = s.slice(j,i);
            if(wordDict.includes(word) && dp[j]){
                dp[i] = true;
            }
        }
    }
    return dp[s.length]
};