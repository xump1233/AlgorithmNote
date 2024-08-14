// 第一题:
// 小友正在优化财务报表分析功能，给定 一个由不同整数构成的数组
// revernues,每个元素表示再不同的时间段的收入
// 我们用以下方式定义一个与revernues长度相同的数组
// maxDurations:
//   maxDurations[i]是一个子数组 revernues[l..r]的最大长度
// 该子数组中最大收入等于revernues[i].
// 返回maxDurations   
// 注意: 子数组是数组的连续部分
var getMaxDurations = function(revernues){
    let maxDurations = [];
    for(let i=0;i<revernues.length;i++){
        let left = 0;
        let right = 0;
        let target = 0,maxLen=-Number.MAX_VALUE;
        while(right<revernues.length && left<revernues.length){
            if(target<=revernues[i]){
                target+=revernues[right];
                right++;
                if(right-left>maxLen){
                    maxLen = right-left;
                }
            }
            else{
                target-=revernues[left];
                left++;
            }

        }
        maxDurations.push(maxLen);
    }
    return maxDurations;
}

// 第二题:
// 小友负责维护公司的电力供应网络.公司由n*n的网络组成,每个单元格
// 代表一个区域.区域中有些电力设施(用1表示),有些则没有(用0表示)
// 为了保证公司电力供应,必须让每个没有电力设施的区域能够尽量
// 靠近一个有电力设施的区域
// 你需要找到一个没有电力设施 的区域,这个区域 到最近的电力设施
// 的区域的距离是最大的，并返回该距离.如果整个公司都有电力设施
// 的区域或者没有电力设施的区域  请返回-1
// 注意:(x0,y0)和(x1,y1)这两个区域之间的距离是|x0-x1|+|y0-y1|.


// 第三题:
// 小友参加了一场汽车比赛，赛车从起点开始向目的地出发，不能掉头
// ，赛车出发时，有一定量的燃料,每经过一公里，消耗一升燃料,
// 整个赛道中,在不同的位置设有加油站,赛车经过加油站时 可以选择加油,
// 每次加油会把加油站的所有燃料加到赛车中(假设赛车的油箱无限大).
// 为了顺利达到终点,小友需要最低停靠几次加油?

// target:  表示目的地距离
// startFuel: 表示小友赛车初始燃料数量
// stations: 表示每个加油站距离起点的位置和燃料数量  用逗号间隔

var minCount = function(target,startFuel,stations){

}