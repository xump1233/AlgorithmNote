/*
题目描述
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。 

每次你可以爬至多m (1 <= m < n)个台阶。你有多少种不同的方法可以爬到楼顶呢？ 

注意：给定 n 是一个正整数。

输入描述
输入共一行，包含两个正整数，分别表示n, m
输出描述
输出一个整数，表示爬到楼顶的方法数。
输入示例
3 2
输出示例
3
*/
const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function preoceeInput(){
    rl.on('line',(input)=>{
        const [n,m] = input.split(' ').map(Number);
        if(n === 0 && m===0){
            return;
        }else{
            let dp = new Array(n+1).fill(0);
            dp[0] = 1;
            let nums = [];
            for(let i=1;i<=m;i++){
                nums.push(i);
            }
            for(let i=0;i<=n;i++){
                for(let j=0;j<nums.length;j++){
                    if(i>=nums[j]){
                        dp[i] = dp[i] + dp[i-nums[j]];
                    }
                }
            }
            console.log(dp[n])
        }
    })
}

preoceeInput()