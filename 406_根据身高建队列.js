/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    let queue = [];
    people.sort((a,b)=>{
        if(b[0]-a[0] === 0){
            return a[1] - b[1];
        }
        else{
            return b[0]-a[0]
        }
    })
    for(let i=0;i<people.length;i++){
        queue.splice(people[i][1],0,people[i]);
    }
    console.log(queue)
    return queue;
};